import { TCurrencyNames } from './core-services-string-interface';
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
    currencyNameToSymbol(currency: TCurrencyNames): string;
    stringToBoolean(value: string): boolean;
    stringUnicode(string: string): string;
    titleCase(string: string): string;
}
export declare const StringConverter: Converter;
export {};
