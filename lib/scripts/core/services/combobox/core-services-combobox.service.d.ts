import '../../../../../node_modules/jquery-ui-dist/jquery-ui.min';
import { IComboBoxData } from './core-services-combobox.interface';
/**
 * This function is using Jquery and Jquery-ui and typescript is not available
 * To this function work is necessary the following imports, respectively:
 * import $ = require('jquery');
 * import '../../../../../node_modules/jquery-ui-dist/jquery-ui.min';
 */
export declare const initialize: (combobox: HTMLSelectElement, callback: any, invalidCallback: any) => void;
export declare const loadData: (combobox: HTMLSelectElement, data: IComboBoxData[], keepValue: boolean) => Promise<unknown>;
export declare const dataByValue: (arrayData: IComboBoxData[], value: string) => string;
export declare const disableInput: (combobox: HTMLSelectElement, disable: boolean) => void;
