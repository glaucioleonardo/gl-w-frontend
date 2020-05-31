// import $ = require('jquery');
import * as $ from 'jquery';
import '../../../../../node_modules/jquery-ui-dist/jquery-ui.min';

import { removeChildElements } from '../elements/core-services-elements.service';
import { IComboBoxData } from './core-services-combobox.interface';

/**
 * This function is using Jquery and Jquery-ui and typescript is not available
 * To this function work is necessary the following imports, respectively:
 * import $ = require('jquery');
 * import '../../../../../node_modules/jquery-ui-dist/jquery-ui.min';
 */
export const initialize = (combobox: HTMLSelectElement, callback: any, invalidCallback: any) => {
  $.widget('custom.combobox', {
    _create() {
      // @ts-ignore
      this.wrapper = $('<span>')
        .addClass('custom-combobox')
        .insertAfter(this.element);

      this.element.hide();
      this._createAutocomplete();
      this._createShowAllButton();

      // @ts-ignore
      this.input.attr('placeholder', this.element.attr('placeholder'));

      // @ts-ignore
      this.input.focus().blur();
    },

    _createAutocomplete() {
      const selected = this.element.children(':selected');
      const value = selected.val() ? selected.text() : '';

      // @ts-ignore
      this.input = $('<input>')
          // @ts-ignore
        .appendTo(this.wrapper)
        .val(value)
        .attr('title', '')
        .addClass(`custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left ${this.element.attr('class')}`)
        .autocomplete({
          delay: 0,
          minLength: 0,
          // @ts-ignore
          maxShowItems: 5,
          source: $.proxy(this, '_source')
        })
        .tooltip({
          classes: { 'ui-tooltip': 'ui-state-highlight' }
        });

      // noinspection JSDeprecatedSymbols
      // @ts-ignore
      this.input.focus().blur();

      // @ts-ignore
      // noinspection SpellCheckingInspection
      this._on(this.input, {
        autocompleteselect(event: any, ui: any) {
          ui.item.option.selected = true;
          // Get the value: ui.item.option.value
          // Get the text: ui.item.value

          callback(ui.item.option.value, ui.item.value);
          this._trigger('select', event, {
            item: ui.item.option
          });
        },
        disable() {
          this._disable();
        },
        enable() {
          this._enable();
        },
        autocompletechange: '_removeIfInvalid'
      });
    },

    _createShowAllButton() {
      // @ts-ignore
      const input = this.input;
      let wasOpen = false;

      $('<a>')
        .attr('tabIndex', -1)
        .attr('title', 'Mostrar todos os itens')
        .tooltip()
          // @ts-ignore
        .appendTo(this.wrapper)
        .button({
          icons: {
            primary: 'ui-icon-triangle-1-s'
          },
          text: false
        })
        .removeClass('ui-corner-all')
        .on('mousedown', () => {
          wasOpen = input.autocomplete('widget').is(':visible');
        })
        .on('click', () => {
          wasOpen = input.autocomplete('widget').is(':visible');
          input.trigger('focus');

          // Close if already visible
          if (wasOpen) {
            return;
          }

          // Pass empty string as value to search for, displaying all results
          input.autocomplete('search', '');
        });
    },

    _source(request: any, response: any) {
      // noinspection TypeScriptValidateJSTypes
      const matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
      // noinspection TypeScriptValidateJSTypes
      response(this.element.children('option').map(function() {
        // @ts-ignore
        const text = $(this).text();

        // @ts-ignore
        if (this.value && (!request.term || matcher.test(text))) {
          return {
            label: text,
            value: text,
            // @ts-ignore
            option: this
          };
        } else {
          return null;
        }
      }));
    },

    _removeIfInvalid(event: any, ui: any) {
      // Selected an item, nothing to do
      if (ui.item) { return; }

      // Search for a match (case-insensitive)
      // @ts-ignore
      const value = this.input.val();
      const valueLowerCase = value.toLowerCase();

      let valid = false;
      this.element.children('option').each(function() {
        if ($(this).text().toLowerCase() === valueLowerCase) {
          // @ts-ignore
          this.selected = valid = true;
          return false;
        }
      });

      // Found a match, nothing to do
      if (valid) {
        // Get the value: this.element.val()
        // Get the text: this.input.val()
        // @ts-ignore
        callback(this.element.val(), this.input.val());
        return;
      }

      // Remove invalid value
      // noinspection TypeScriptValidateJSTypes
      // @ts-ignore
      this.input
        .val('')
        .attr('title', `O valor ${value} não existe para este item!`)
        .tooltip('open');
      this.element.val('');
      // @ts-ignore
      this._delay(function() {
        // @ts-ignore
        this.input.tooltip('close').attr('title', '');
      }, 2500);
      // @ts-ignore
      this.input.autocomplete('instance').term = '';
      // @ts-ignore
      invalidCallback(this.element.val(), this.input.val());
    },

    _destroy() {
      // @ts-ignore
      this.wrapper.remove();
      this.element.show();
    }
  });

  // @ts-ignore
  $(combobox).combobox();
};
export const loadData = (combobox: HTMLSelectElement, data: IComboBoxData[], keepValue: boolean) => {
  return new Promise(resolve => {
    const parent = combobox.parentNode;

    if (parent != null) {
      const comboboxInput = parent.querySelector('input.custom-combobox-input') as HTMLInputElement;
      removeChildElements(combobox);

      if (!keepValue) {
        combobox.value = '';
        comboboxInput.value = '';
      }

      const emptyOption = document.createElement('option');
      emptyOption.value = '';

      combobox.appendChild(emptyOption);

      data.forEach(d => {
        const option = document.createElement('option');
        option.value = d.value;
        option.innerText = d.text;

        combobox.appendChild(option);
      });

      resolve(combobox);
    } else {
      console.error('Parent of current combobox is null');
      resolve(null);
    }
  });
};
export const dataByValue = (arrayData: IComboBoxData[], value: string) => {
  const tempActionPlan = arrayData.filter(x => x.value === value);

  if (value == null || tempActionPlan.length === 0) {
    return '';
  } else {
    return tempActionPlan[0].text;
  }
};
export const disableInput = (combobox: HTMLSelectElement, disable: boolean) => {
  const parent: HTMLDivElement = combobox.parentNode as HTMLDivElement;
  const input: HTMLInputElement | null = parent.querySelector('input');

  if (input == null) {
    console.error(`Input not found on current combobox group: ${parent}`);
  } else {
    if (disable) {
      input.disabled = true; // this disables just the popup menu (widget),
      input.classList.add('ui-autocomplete-disabled');
      input.classList.add('ui-state-disabled');
      input.setAttribute('tabIndex', '-1');
      input.setAttribute('aria-disabled', 'true');
    } else {
      input.disabled = false;
      input.classList.remove('ui-state-disabled');
      input.classList.remove('ui-autocomplete-disabled');
      input.removeAttribute('tabIndex');
      input.setAttribute('aria-disabled', 'false');
    }
  }
};
