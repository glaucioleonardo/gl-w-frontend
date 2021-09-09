import { ElementRemove } from '../elements/core-services-elements.service';
class Core {
    loadData(combobox, data, keepValue) {
        return new Promise(resolve => {
            const parent = combobox.parentNode;
            if (parent != null) {
                const comboboxInput = parent.querySelector('input.custom-combobox-input');
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
            }
            else {
                console.error('Parent of current combobox is null');
                resolve(null);
            }
        });
    }
}
export const ComboBoxCore = new Core();
class Data {
    byValue(arrayData, value) {
        const tempActionPlan = arrayData.filter(x => x.value === value);
        if (value == null || tempActionPlan.length === 0) {
            return '';
        }
        else {
            return tempActionPlan[0].text;
        }
    }
}
export const ComboBoxData = new Data();
class Dom {
    disableInput(combobox, disable) {
        const parent = combobox.parentNode;
        const input = parent.querySelector('input');
        if (input == null) {
            console.error(`Input not found on current combobox group: ${parent}`);
        }
        else {
            if (disable) {
                input.disabled = true;
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
    }
}
export const ComboBoxDom = new Dom();
//# sourceMappingURL=core-services-combobox.service.js.map