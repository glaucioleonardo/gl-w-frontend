import { TFields } from './core-services-elements.interface';
import { IDate } from '../date/core-services-date.interface';
declare class Remove {
    childElements(elementClassId: string | HTMLElement): void;
}
export declare const ElementRemove: Remove;
declare class Selector {
    element(className: string): HTMLElement | null;
}
export declare const ElementSelector: Selector;
declare class Highlight {
    clearError(field: TFields): void;
    error(fieldHighlighted: TFields): void;
    invalidDate(date: IDate, input: HTMLElement): void;
    setError(field: TFields): void;
}
export declare const ElementHighlight: Highlight;
declare class Dragging {
    horizontal(slider: HTMLElement): void;
}
export declare const ElementDragging: Dragging;
export {};
