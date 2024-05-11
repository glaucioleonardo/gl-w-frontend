import { TFields } from './core-services-elements.interface';
import { IDate } from '../../date/src';
import { DateValidation } from '../../date/src';

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

export const ElementRemove = new Remove();

class Selector {
  element(className: string): HTMLElement | null {
    return document.querySelector(className);
  }
}

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

  setError(field: TFields) {
    if (field != null) {
      field.classList.add('required-fill');
      field.focus();
    }
  }
}

export const ElementHighlight = new Highlight();

class Dragging {
  horizontal(slider: HTMLElement) {
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
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
