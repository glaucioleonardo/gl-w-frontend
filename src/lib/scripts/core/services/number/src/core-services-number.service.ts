import { Decimal } from 'decimal.js';
import { TCurrencyCode } from '../../internationalization/src';
import { InternationalCore } from '../../internationalization/src';
import { TCurrencySymbolTypes, TDecimalSeparators } from './core-services-number-interface';

class Core {
  toCurrency(currencyCode: TCurrencyCode, value: number, decimalPlaces: number = 2): string {
    const list = InternationalCore.retrieveList(undefined, undefined, undefined, currencyCode)[0];
    return new Intl.NumberFormat(list.countryLanguage, {
      style: 'currency',
      currency: list.currencyCode,
      maximumFractionDigits: decimalPlaces
    }).format(value);
  }
  toDecimal(value: number, errorValue: Decimal = new Decimal(0).toDecimalPlaces(0)): Decimal {
    const invalid = value == null || Number.isNaN(value) || new Decimal(value).isNaN();

    if (!invalid) {
      return new Decimal(value);
    } else {
      return errorValue;
    }
  }
  toPercentage(num: number, includeSymbol: boolean = true, decimalSeparator: TDecimalSeparators = ',', decimalPlaces: number = 2): string {
    const parsedNumber: Decimal = new Decimal(num).times(100);
    const parsedString: string = parsedNumber.toDecimalPlaces(decimalPlaces).toString().replace('.', decimalSeparator);
    const symbol: string = includeSymbol ? '%' : '';

    return `${parsedString}${symbol}`;
  }
  toString(number: number): string {
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

  currencyToNumber(num: number, decimal: TDecimalSeparators = ',', currency?: TCurrencySymbolTypes, decimalPlaces: number = 2): number {
    const parsedNumber = new Decimal(num).toDecimalPlaces(decimalPlaces).toString();

    if (currency != null) {
      return new Decimal(
        parsedNumber
          .replace(/\./g, '')
          .replace(',', '.')
          .replace(' ', '')
          .replace(currency, '')
      ).toDecimalPlaces(decimalPlaces).toNumber();
    } else {
      return new Decimal(
        parsedNumber
          .replace(/\./g, '')
          .replace(',', '.')
          .replace('Ar$ ', '')
          .replace('R$ ', '')
          .replace('€ ', '')
          .replace('US$ ', '')
      ).toDecimalPlaces(decimalPlaces).toNumber();
    }
  }
  decimalToString(num: number, decimalOutput: TDecimalSeparators = '.', decimalPlaces: number = 2): string {
    const value = new Decimal(num);
    const stringValue = value.toDecimalPlaces(decimalPlaces).toFixed(decimalPlaces);
    const separator = decimalOutput === ',' ? '$1.' : '$1,';

    return stringValue
      .replace('.', decimalOutput)
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
  }
  percentageToNumber(num: string, decimal: TDecimalSeparators = ',', decimalPlaces: number = 2): number {
    const parsedNumber = num
      .replace(/\./g, '')
      .replace(',', '.')
      .replace(decimal, '.')
      .replace('% ', '')
      .replace('%', '')
      ?.trim();

    return new Decimal(parsedNumber)
      .dividedBy(100)
      .toDecimalPlaces(decimalPlaces)
      .toNumber();
  }
  stringCurrencyToNumber(num: string, decimal: TDecimalSeparators = ',', currency: TCurrencySymbolTypes, decimalPlaces: number = 2): number {
    return new Decimal(num
      .replace(/\./g, '')
      .replace(',', '.')
      .replace(' ', '')
      .replace(currency, '')
    ).toDecimalPlaces(decimalPlaces).toNumber();
  }

  formatDecimalSeparator(num: number, decimal: TDecimalSeparators = '.'): string {
    const separator = decimal === '.' ? '$1.' : '$1,';
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
  }
}
// tslint:disable-next-line:variable-name
export const NumberParse = new Core();
