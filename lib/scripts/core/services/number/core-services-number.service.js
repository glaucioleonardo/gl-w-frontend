import { Decimal } from 'decimal.js';
import { InternationalCore } from '../internationalization/core-services-internationalization.service';
class Core {
    toCurrency(currencyCode, value, decimalPlaces = 2) {
        const list = InternationalCore.retrieveList(undefined, undefined, undefined, currencyCode)[0];
        return new Intl.NumberFormat(list.countryLanguage, {
            style: 'currency',
            currency: list.currencyCode,
            maximumFractionDigits: decimalPlaces
        }).format(value);
    }
    toDecimal(value, errorValue = new Decimal(0).toDecimalPlaces(0)) {
        const invalid = value == null || Number.isNaN(value) || new Decimal(value).isNaN();
        if (!invalid) {
            return new Decimal(value);
        }
        else {
            return errorValue;
        }
    }
    toPercentage(num, includeSymbol = true, decimalSeparator = ',', decimalPlaces = 2) {
        const parsedNumber = new Decimal(num).times(100);
        const parsedString = parsedNumber.toDecimalPlaces(decimalPlaces).toString().replace('.', decimalSeparator);
        const symbol = includeSymbol ? '%' : '';
        return `${parsedString}${symbol}`;
    }
    toString(number) {
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
    currencyToNumber(num, decimal = ',', currency, decimalPlaces = 2) {
        const parsedNumber = new Decimal(num).toDecimalPlaces(decimalPlaces).toString();
        if (currency != null) {
            return new Decimal(parsedNumber
                .replace(/\./g, '')
                .replace(',', '.')
                .replace(' ', '')
                .replace(currency, '')).toDecimalPlaces(decimalPlaces).toNumber();
        }
        else {
            return new Decimal(parsedNumber
                .replace(/\./g, '')
                .replace(',', '.')
                .replace('Ar$ ', '')
                .replace('R$ ', '')
                .replace('€ ', '')
                .replace('US$ ', '')).toDecimalPlaces(decimalPlaces).toNumber();
        }
    }
    decimalToString(num, decimalOutput = '.', decimalPlaces = 2) {
        const value = new Decimal(num);
        const stringValue = value.toDecimalPlaces(decimalPlaces).toFixed(decimalPlaces);
        const separator = decimalOutput === ',' ? '$1.' : '$1,';
        return stringValue
            .replace('.', decimalOutput)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
    }
    percentageToNumber(num, decimal = ',', decimalPlaces = 2) {
        const parsedNumber = num
            .replace(/\./g, '')
            .replace(',', '.')
            .replace(decimal, '.')
            .replace('% ', '');
        return new Decimal(parsedNumber)
            .dividedBy(100)
            .toDecimalPlaces(decimalPlaces)
            .toNumber();
    }
    stringCurrencyToNumber(num, decimal = ',', currency, decimalPlaces = 2) {
        return new Decimal(num
            .replace(/\./g, '')
            .replace(',', '.')
            .replace(' ', '')
            .replace(currency, '')).toDecimalPlaces(decimalPlaces).toNumber();
    }
    formatDecimalSeparator(num, decimal = '.') {
        const separator = decimal === '.' ? '$1.' : '$1,';
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
    }
}
export const NumberParse = new Core();
//# sourceMappingURL=core-services-number.service.js.map