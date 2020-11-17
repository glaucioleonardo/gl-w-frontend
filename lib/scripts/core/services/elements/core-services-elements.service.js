import { DateValidation } from '../date/core-services-date.service';
class Remove {
    childElements(elementClassId) {
        if (typeof elementClassId === 'string') {
            const element = document.querySelector(elementClassId);
            if (element != null) {
                while (element.firstChild) {
                    element.removeChild(element.firstChild);
                }
            }
        }
        else {
            while (elementClassId.firstChild) {
                elementClassId.removeChild(elementClassId.firstChild);
            }
        }
    }
}
export const ElementRemove = new Remove();
class Selector {
    element(className) {
        return document.querySelector(className);
    }
}
export const ElementSelector = new Selector();
class Highlight {
    clearError(field) {
        if (typeof (field) === 'object') {
            field === null || field === void 0 ? void 0 : field.classList.remove('required-fill');
        }
        else {
            if (field != null) {
                const currentField = document.querySelector(field);
                if (currentField != null) {
                    currentField.classList.remove('required-fill');
                }
            }
        }
    }
    error(fieldHighlighted) {
        if (fieldHighlighted != null) {
            fieldHighlighted.classList.add('required-fill');
            fieldHighlighted.focus();
        }
    }
    invalidDate(date, input) {
        if (DateValidation.date(date)) {
            input.classList.remove('error-highlight');
        }
        else {
            input.classList.add('error-highlight');
        }
    }
    setError(field) {
        if (field != null) {
            field.classList.add('required-fill');
            field.focus();
        }
    }
}
export const ElementHighlight = new Highlight();
//# sourceMappingURL=core-services-elements.service.js.map