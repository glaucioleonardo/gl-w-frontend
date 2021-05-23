import { TCurrencyNames, TCurrencySymbolTypes, TDecimalSeparators } from './core-services-string-interface';
declare class Clean {
    trim(text: string): string;
    trimLeft(text: string): string;
    trimRight(text: string): string;
    trimBetween(text: string): string;
    trimMiddle(text: string): string;
    cleanText(string: string): string;
}
export declare const StringClean: Clean;
declare class Converter {
    percentageToNumber(num: string, decimal?: TDecimalSeparators): number;
    numberToPercentage(num: number, includeSymbol?: boolean, separator?: TDecimalSeparators): string;
    currencyToNumber(num: number, decimal?: TDecimalSeparators, currency?: TCurrencySymbolTypes): number;
    stringCurrencyToNumber(num: string, decimal: TDecimalSeparators | undefined, currency: TCurrencySymbolTypes): number;
    currencyNameToSymbol(currency: TCurrencyNames): string;
    decimalNumberToString(num: number, decimalOutput?: TDecimalSeparators, places?: number): string;
    formatNumber(num: number, decimal?: TDecimalSeparators): string;
    numberToString(number: number): string;
    stringToBoolean(value: string): boolean;
    stringUnicode(string: string): string;
    titleCase(string: string): string;
}
export declare const StringConverter: Converter;
export {};
