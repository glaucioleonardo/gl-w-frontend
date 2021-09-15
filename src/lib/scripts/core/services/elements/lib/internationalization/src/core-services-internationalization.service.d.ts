import { IInternationalizationList, TCountryLanguage, TCountryName, TCurrencyCode, TCurrentFullName } from './core-services-internationalization.interface';
declare class Core {
    retrieveList(main?: boolean, countryName?: TCountryName, currencyFullName?: TCurrentFullName, currencyCode?: TCurrencyCode, countryLanguage?: TCountryLanguage): IInternationalizationList[];
}
export declare const InternationalCore: Core;
export {};
