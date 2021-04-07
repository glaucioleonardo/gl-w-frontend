import { TFields } from './core-services-elements.interface';
import { IDate } from '../date/core-services-date.interface';
import { DateValidation } from '../date/core-services-date.service';

class Remove {
    childElements(elementClassId: string | HTMLElement): void {
        if (typeof elementClassId === 'string') {
            const element = document.querySelector(elementClassId);
            if (element != null) {
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
            }
        } else {
            while (elementClassId.firstChild) {
                elementClassId.removeChild(elementClassId.firstChild);
            }
        }
    }
}
// tslint:disable-next-line:variable-name
export const ElementRemove = new Remove();

class Selector {
    element(className: string): HTMLElement | null {
        return document.querySelector(className);
    }
}
// tslint:disable-next-line:variable-name
export const ElementSelector = new Selector();

class Highlight {
    clearError(field: TFields): void {
        if (typeof (field) === 'object') {
            field?.classList.remove('required-fill');
        } else {
            if (field != null) {
                const currentField: TFields = document.querySelector(field);
                if (currentField != null) {
                    (currentField as HTMLElement).classList.remove('required-fill');
                }
            }
        }
    }

    error(fieldHighlighted: TFields): void {
        if (fieldHighlighted != null) {
            fieldHighlighted.classList.add('required-fill');
            fieldHighlighted.focus();
        }
    }

    invalidDate(date: IDate, input: HTMLElement): void {
        if (DateValidation.date(date)) {
            input.classList.remove('error-highlight');
        } else {
            input.classList.add('error-highlight');
        }
    }

    setError(field: TFields)  {
        if (field != null) {
            field.classList.add('required-fill');
            field.focus();
        }
    }
}
// tslint:disable-next-line:variable-name
export const ElementHighlight = new Highlight();
