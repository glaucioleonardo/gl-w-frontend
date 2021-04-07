import { TCurrencyTypes } from './core-services-input.interface';
import { TDecimalSeparators } from '../string/core-services-string-interface';
declare class Mask {
    currency(field: HTMLInputElement, type?: TCurrencyTypes, currencySymbol?: string): string;
    percentage(field: HTMLInputElement, allowMinus?: boolean, decimalSeparator?: TDecimalSeparators, rightAlign?: boolean, step?: number): string;
    numeric(field: HTMLInputElement, allowMinus?: boolean, decimalSeparator?: TDecimalSeparators, rightAlign?: boolean, step?: number): string;
    integer(field: HTMLInputElement, allowMinus?: boolean, rightAlign?: boolean, step?: number): string;
    customNumberPhone(mask: string, field: HTMLInputElement, rightAlign?: boolean): string;
    remove(field: HTMLInputElement): void;
}
export declare const InputMask: Mask;
export {};
