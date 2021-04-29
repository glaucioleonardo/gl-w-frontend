import Decimal from 'decimal.js';
import { UrlDecode } from '../url/core-services-url.service';
class Clean {
    trim(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /^\s*|\s*$/g;
            const middle = /\s\s+/g;
            return text
                .replace(between, '')
                .replace(middle, ' ');
        }
    }
    trimLeft(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /^\s*/g;
            return text.replace(between, '');
        }
    }
    trimRight(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /\s*$/g;
            return text.replace(between, '');
        }
    }
    trimBetween(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /^\s*|\s*$/g;
            return text.replace(between, '');
        }
    }
    trimMiddle(text) {
        if (text == null) {
            return '';
        }
        else {
            const middle = /\s\s+/g;
            return text.replace(middle, ' ');
        }
    }
    cleanText(string) {
        string = this.trim(string);
        return UrlDecode.decodeHtmlText(StringConverter.stringUnicode(string).trim());
    }
}
export const StringClean = new Clean();
class Converter {
    percentageToNumber(num, decimal = ',') {
        return parseFloat(num
            .replace(/\./g, '')
            .replace(decimal, '.')
            .replace('% ', '')) / 100.0;
    }
    numberToPercentage(num, includeSymbol = true, separator = ',') {
        const parsedNumber = num * 100.0;
        const parsedString = parsedNumber.toString().replace('.', separator);
        const symbol = includeSymbol ? '%' : '';
        return `${parsedString}${symbol}`;
    }
    currencyToNumber(num, decimal = ',', currency) {
        if (currency != null) {
            return parseFloat(num.toString()
                .replace(/\./g, '')
                .replace(',', '.')
                .replace(' ', '')
                .replace(currency, ''));
        }
        else {
            return parseFloat(num.toString()
                .replace(/\./g, '')
                .replace(',', '.')
                .replace('Ar$ ', '')
                .replace('R$ ', '')
                .replace('€ ', '')
                .replace('US$ ', ''));
        }
    }
    stringCurrencyToNumber(num, decimal = ',', currency) {
        return parseFloat(num
            .replace(/\./g, '')
            .replace(',', '.')
            .replace(' ', '')
            .replace(currency, ''));
    }
    currencyNameToSymbol(currency) {
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
    decimalNumberToString(num, decimalOutput = '.', places = 2) {
        const value = new Decimal(num);
        const stringValue = value.toDecimalPlaces(places).toFixed(places);
        const separator = decimalOutput === ',' ? '$1.' : '$1,';
        return stringValue
            .replace('.', decimalOutput)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
    }
    formatNumber(num, decimal = '.') {
        const separator = decimal === '.' ? '$1.' : '$1,';
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
    }
    numberToString(number) {
        const maxLength = number.toString().length;
        if (maxLength < 3) {
            if (number < 10) {
                return '0' + number;
            }
            else {
                return number.toString();
            }
        }
        else if (maxLength < 4) {
            if (number < 10) {
                return '00' + number;
            }
            else if (number < 100) {
                return '0' + number;
            }
            else {
                return number.toString();
            }
        }
        else if (maxLength < 5) {
            if (number < 10) {
                return '000' + number;
            }
            else if (number < 100) {
                return '00' + number;
            }
            else if (number < 1000) {
                return '0' + number;
            }
            else {
                return number.toString();
            }
        }
        else if (maxLength < 6) {
            if (number < 10) {
                return '0000' + number;
            }
            else if (number < 100) {
                return '000' + number;
            }
            else if (number < 1000) {
                return '00' + number;
            }
            else if (number < 10000) {
                return '0' + number;
            }
            else {
                return number.toString();
            }
        }
        else {
            return number.toString();
        }
    }
    stringToBoolean(value) {
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
    stringUnicode(string) {
        try {
            return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        catch (e) {
            return UrlDecode.decodeHtmlText(string);
        }
    }
    titleCase(string) {
        const splitStr = string.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
}
export const StringConverter = new Converter();
//# sourceMappingURL=core-services-string.service.js.map