import { Decimal } from 'decimal.js';
import { TCurrencyCode } from '../internationalization/core-services-internationalization.interface';
import { TCurrencySymbolTypes, TDecimalSeparators } from './core-services-number-interface';
declare class Core {
    toCurrency(currencyCode: TCurrencyCode, value: number, decimalPlaces?: number): string;
    toDecimal(value: number, errorValue?: Decimal): Decimal;
    toPercentage(num: number, includeSymbol?: boolean, decimalSeparator?: TDecimalSeparators, decimalPlaces?: number): string;
    toString(number: number): string;
    currencyToNumber(num: number, decimal?: TDecimalSeparators, currency?: TCurrencySymbolTypes, decimalPlaces?: number): number;
    decimalToString(num: number, decimalOutput?: TDecimalSeparators, decimalPlaces?: number): string;
    percentageToNumber(num: string, decimal?: TDecimalSeparators, decimalPlaces?: number): number;
    stringCurrencyToNumber(num: string, decimal: TDecimalSeparators, currency: TCurrencySymbolTypes, decimalPlaces?: number): number;
    formatDecimalSeparator(num: number, decimal?: TDecimalSeparators): string;
}
export declare const NumberParse: Core;
export {};
