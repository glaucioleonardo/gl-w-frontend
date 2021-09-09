import { IComboBoxData } from './core-services-combobox.interface';
declare class Core {
    loadData(combobox: HTMLSelectElement, data: IComboBoxData[], keepValue: boolean): PromiseLike<HTMLSelectElement | null>;
}
export declare const ComboBoxCore: Core;
declare class Data {
    byValue(arrayData: IComboBoxData[], value: string): string;
}
export declare const ComboBoxData: Data;
declare class Dom {
    disableInput(combobox: HTMLSelectElement, disable: boolean): void;
}
export declare const ComboBoxDom: Dom;
export {};
