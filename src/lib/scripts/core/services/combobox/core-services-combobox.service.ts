import { ElementRemove } from '../elements/core-services-elements.service';
import { IComboBoxData } from './core-services-combobox.interface';

class Core {
  loadData(combobox: HTMLSelectElement, data: IComboBoxData[], keepValue: boolean): PromiseLike<HTMLSelectElement | null> {
    return new Promise(resolve => {
      const parent = combobox.parentNode;

      if (parent != null) {
        const comboboxInput = parent.querySelector('input.custom-combobox-input') as HTMLInputElement;
        ElementRemove.childElements(combobox);

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
  }
}

// tslint:disable-next-line:variable-name
export const ComboBoxCore = new Core();

class Data {
  byValue(arrayData: IComboBoxData[], value: string) {
    const tempActionPlan = arrayData.filter(x => x.value === value);

    if (value == null || tempActionPlan.length === 0) {
      return '';
    } else {
      return tempActionPlan[0].text;
    }
  }
}

// tslint:disable-next-line:variable-name
export const ComboBoxData = new Data();

class Dom {
  disableInput(combobox: HTMLSelectElement, disable: boolean): void {
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
  }
}

// tslint:disable-next-line:variable-name
export const ComboBoxDom = new Dom();
