import { IInternationalizationList, TCountryLanguage, TCountryName, TCurrencyCode, TCurrentFullName } from './core-services-internationalization.interface';
declare class Core {
    retrieveList(main?: boolean, countryName?: TCountryName, currencyFullName?: TCurrentFullName, currencyCode?: TCurrencyCode, countryLanguage?: TCountryLanguage): IInternationalizationList[];
}
export declare const InternationalCore: Core;
declare class Conversion {
    numberToCurrency(currencyCode: TCurrencyCode, value: number): string;
}
export declare const InternationalConversion: Conversion;
export {};
