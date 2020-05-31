// import $ = require('jquery');
import * as $ from 'jquery';
import '../../../../../node_modules/jquery-ui-dist/jquery-ui.min';
import { removeChildElements } from '../elements/core-services-elements.service';
/**
 * This function is using Jquery and Jquery-ui and typescript is not available
 * To this function work is necessary the following imports, respectively:
 * import $ = require('jquery');
 * import '../../../../../node_modules/jquery-ui-dist/jquery-ui.min';
 */
export var initialize = function (combobox, callback, invalidCallback) {
    $.widget('custom.combobox', {
        _create: function () {
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
        _createAutocomplete: function () {
            var selected = this.element.children(':selected');
            var value = selected.val() ? selected.text() : '';
            // @ts-ignore
            this.input = $('<input>')
                // @ts-ignore
                .appendTo(this.wrapper)
                .val(value)
                .attr('title', '')
                .addClass("custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left " + this.element.attr('class'))
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
                autocompleteselect: function (event, ui) {
                    ui.item.option.selected = true;
                    // Get the value: ui.item.option.value
                    // Get the text: ui.item.value
                    callback(ui.item.option.value, ui.item.value);
                    this._trigger('select', event, {
                        item: ui.item.option
                    });
                },
                disable: function () {
                    this._disable();
                },
                enable: function () {
                    this._enable();
                },
                autocompletechange: '_removeIfInvalid'
            });
        },
        _createShowAllButton: function () {
            // @ts-ignore
            var input = this.input;
            var wasOpen = false;
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
                .on('mousedown', function () {
                wasOpen = input.autocomplete('widget').is(':visible');
            })
                .on('click', function () {
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
        _source: function (request, response) {
            // noinspection TypeScriptValidateJSTypes
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
            // noinspection TypeScriptValidateJSTypes
            response(this.element.children('option').map(function () {
                // @ts-ignore
                var text = $(this).text();
                // @ts-ignore
                if (this.value && (!request.term || matcher.test(text))) {
                    return {
                        label: text,
                        value: text,
                        // @ts-ignore
                        option: this
                    };
                }
                else {
                    return null;
                }
            }));
        },
        _removeIfInvalid: function (event, ui) {
            // Selected an item, nothing to do
            if (ui.item) {
                return;
            }
            // Search for a match (case-insensitive)
            // @ts-ignore
            var value = this.input.val();
            var valueLowerCase = value.toLowerCase();
            var valid = false;
            this.element.children('option').each(function () {
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
                .attr('title', "O valor " + value + " n\u00E3o existe para este item!")
                .tooltip('open');
            this.element.val('');
            // @ts-ignore
            this._delay(function () {
                // @ts-ignore
                this.input.tooltip('close').attr('title', '');
            }, 2500);
            // @ts-ignore
            this.input.autocomplete('instance').term = '';
            // @ts-ignore
            invalidCallback(this.element.val(), this.input.val());
        },
        _destroy: function () {
            // @ts-ignore
            this.wrapper.remove();
            this.element.show();
        }
    });
    // @ts-ignore
    $(combobox).combobox();
};
export var loadData = function (combobox, data, keepValue) {
    return new Promise(function (resolve) {
        var parent = combobox.parentNode;
        if (parent != null) {
            var comboboxInput = parent.querySelector('input.custom-combobox-input');
            removeChildElements(combobox);
            if (!keepValue) {
                combobox.value = '';
                comboboxInput.value = '';
            }
            var emptyOption = document.createElement('option');
            emptyOption.value = '';
            combobox.appendChild(emptyOption);
            data.forEach(function (d) {
                var option = document.createElement('option');
                option.value = d.value;
                option.innerText = d.text;
                combobox.appendChild(option);
            });
            resolve(combobox);
        }
        else {
            console.error('Parent of current combobox is null');
            resolve(null);
        }
    });
};
export var dataByValue = function (arrayData, value) {
    var tempActionPlan = arrayData.filter(function (x) { return x.value === value; });
    if (value == null || tempActionPlan.length === 0) {
        return '';
    }
    else {
        return tempActionPlan[0].text;
    }
};
export var disableInput = function (combobox, disable) {
    var parent = combobox.parentNode;
    var input = parent.querySelector('input');
    if (input == null) {
        console.error("Input not found on current combobox group: " + parent);
    }
    else {
        if (disable) {
            input.disabled = true; // this disables just the popup menu (widget),
            input.classList.add('ui-autocomplete-disabled');
            input.classList.add('ui-state-disabled');
            input.setAttribute('tabIndex', '-1');
            input.setAttribute('aria-disabled', 'true');
        }
        else {
            input.disabled = false;
            input.classList.remove('ui-state-disabled');
            input.classList.remove('ui-autocomplete-disabled');
            input.removeAttribute('tabIndex');
            input.setAttribute('aria-disabled', 'false');
        }
    }
};
//# sourceMappingURL=core-services-combobox.service.js.map