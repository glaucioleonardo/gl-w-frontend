import Decimal from 'decimal.js';
import { UrlDecode } from '../url/core-services-url.service';
import { TCurrencyNames, TCurrencySymbolTypes, TDecimalSeparators } from './core-services-string-interface';

class Clean {
		trim(text: string): string {
				if (text == null) {
						return '';
				} else {
						const between = /^\s*|\s*$/g; // remove space from start and end
						const middle = /\s\s+/g; // remove space from middle

						return text
								.replace(between, '')
								.replace(middle, ' ');
				}
		}

		trimLeft(text: string): string {
				if (text == null) {
						return '';
				} else {
						const between = /^\s*/g; // remove space from start
						return text.replace(between, '');
				}
		}

		trimRight(text: string): string {
				if (text == null) {
						return '';
				} else {
						const between = /\s*$/g; // remove space from end
						return text.replace(between, '');
				}
		}

		trimBetween(text: string): string {
				if (text == null) {
						return '';
				} else {
						const between = /^\s*|\s*$/g; // remove space from start and end
						return text.replace(between, '');
				}
		}

		trimMiddle(text: string): string {
				if (text == null) {
						return '';
				} else {
						const middle = /\s\s+/g; // remove space from middle
						return text.replace(middle, ' ');
				}
		}

		cleanText(string: string): string {
				string = this.trim(string);
				return UrlDecode.decodeHtmlText(StringConverter.stringUnicode(string).trim());
		}
}

// tslint:disable-next-line:variable-name
export const StringClean = new Clean();

class Converter {
		percentageToNumber(num: string, decimal: TDecimalSeparators = ','): number {
			return parseFloat(num
				.replace(/\./g, '')
				.replace(decimal, '.')
				.replace('% ', '')
			) / 100.0;
		}
		numberToPercentage(num: number, includeSymbol: boolean = true, separator: TDecimalSeparators = ','): string {
			const parsedNumber: number = num * 100.0;
			const parsedString: string = parsedNumber.toString().replace('.', separator);
			const symbol: string = includeSymbol ? '%' : '';

			return `${parsedString}${symbol}`;
		}
		currencyToNumber(num: number, decimal: TDecimalSeparators = ',', currency?: TCurrencySymbolTypes): number {
				if (currency != null) {
						return parseFloat(
								num.toString()
										.replace(/\./g, '')
										.replace(',', '.')
										.replace(' ', '')
										.replace(currency, ''),
						);
				} else {
						return parseFloat(
								num.toString()
										.replace(/\./g, '')
										.replace(',', '.')
										.replace('Ar$ ', '')
										.replace('R$ ', '')
										.replace('€ ', '')
										.replace('US$ ', ''),
						);
				}
		}
		stringCurrencyToNumber(num: string, decimal: TDecimalSeparators = ',', currency: TCurrencySymbolTypes): number {
			return parseFloat(num
					.replace(/\./g, '')
					.replace(',', '.')
					.replace(' ', '')
					.replace(currency, ''));
		}
		currencyNameToSymbol(currency: TCurrencyNames): string {
			switch (currency) {
				case 'euro': return '€';
				case 'dolar': return 'US$';
				case 'peso': return '$';
				case 'peso-ar': return 'Ar$';
				case 'real': return 'R$';
				case 'pounds-sterling': return '£';
				case 'canadian-dollars': return '$';
				case 'yuan': return '¥';
				case 'rupee': return '₹';
				case 'yen': return '¥';
				default: return 'R$';
			}
		}

		decimalNumberToString(num: number, decimalOutput: TDecimalSeparators = '.', places: number = 2): string {
			const value = new Decimal(num);
			const stringValue = value.toDecimalPlaces(places).toFixed(places);
			const separator = decimalOutput === ',' ? '$1.' : '$1,';

			return stringValue
			.replace('.', decimalOutput)
			.replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
		}
		formatNumber(num: number, decimal: TDecimalSeparators = '.'): string {
				const separator = decimal === '.' ? '$1.' : '$1,';
				return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
		}

		numberToString(number: number): string {
				const maxLength = number.toString().length;
				if (maxLength < 3) {
						if (number < 10) {
								return '0' + number;
						} else {
								return number.toString();
						}
				} else if (maxLength < 4) {
						if (number < 10) {
								return '00' + number;
						} else if (number < 100) {
								return '0' + number;
						} else {
								return number.toString();
						}
				} else if (maxLength < 5) {
						if (number < 10) {
								return '000' + number;
						} else if (number < 100) {
								return '00' + number;
						} else if (number < 1000) {
								return '0' + number;
						} else {
								return number.toString();
						}
				} else if (maxLength < 6) {
						if (number < 10) {
								return '0000' + number;
						} else if (number < 100) {
								return '000' + number;
						} else if (number < 1000) {
								return '00' + number;
						} else if (number < 10000) {
								return '0' + number;
						} else {
								return number.toString();
						}
				} else {
						return number.toString();
				}
		}

		stringToBoolean(value: string): boolean {
				switch (value) {
						case 'true':
								return true;
						case 'false':
								return false;
						case 'null':
						case null:
								return false;
						default:
								return true;
				}
		}

		stringUnicode(string: string): string {
				try {
						return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
				} catch (e) {
						return UrlDecode.decodeHtmlText(string);
				}
		}

		titleCase(string: string): string {
				const splitStr = string.toLowerCase().split(' ');
				for (let i = 0; i < splitStr.length; i++) {
						splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
				}
				return splitStr.join(' ');
		}
}

// tslint:disable-next-line:variable-name
export const StringConverter = new Converter();
