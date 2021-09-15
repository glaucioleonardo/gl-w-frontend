import { UrlDecode } from '../../url/src';
import { TCurrencyNames } from './core-services-string-interface';

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
