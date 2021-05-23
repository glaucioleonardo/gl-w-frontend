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
class Dragging {
    horizontal(slider) {
        let isDown = false;
        let startX;
        let scrollLeft;
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) {
                return;
            }
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX);
            slider.scrollLeft = scrollLeft - walk;
        });
    }
}
export const ElementDragging = new Dragging();
//# sourceMappingURL=core-services-elements.service.js.map