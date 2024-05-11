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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
  toDecimal(value: number, errorValue: Decimal = new Decimal(0).toDecimalPlaces(0)): Decimal {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const invalid = value == null || Number.isNaN(value) || new Decimal(value).isNaN();

    if (!invalid) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      return new Decimal(value);
    } else {
      return errorValue;
    }
  }
  toPercentage(num: number, includeSymbol: boolean = true, decimalSeparator: TDecimalSeparators = ',', decimalPlaces: number = 2): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
    const parsedNumber: Decimal = new Decimal(num).times(100);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
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

  currencyToNumber(num: number, currency?: TCurrencySymbolTypes, decimalPlaces: number = 2): number {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const parsedNumber = new Decimal(num).toDecimalPlaces(decimalPlaces).toString();

    if (currency != null) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
      return new Decimal(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        parsedNumber
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace(/\./g, '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace(',', '.')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace(' ', '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace(currency, '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ).toDecimalPlaces(decimalPlaces).toNumber();
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
      return new Decimal(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        parsedNumber
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace(/\./g, '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace(',', '.')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace('Ar$ ', '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace('R$ ', '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace('€ ', '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          .replace('US$ ', '')
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      ).toDecimalPlaces(decimalPlaces).toNumber();
    }
  }
  decimalToString(num: number, decimalOutput: TDecimalSeparators = '.', decimalPlaces: number = 2): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
    const value = new Decimal(num);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    const stringValue = value.toDecimalPlaces(decimalPlaces).toFixed(decimalPlaces);
    const separator = decimalOutput === ',' ? '$1.' : '$1,';

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    return stringValue
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .replace('.', decimalOutput)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    return new Decimal(parsedNumber)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .dividedBy(100)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .toDecimalPlaces(decimalPlaces)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      .toNumber();
  }
  stringCurrencyToNumber(num: string, currency: TCurrencySymbolTypes, decimalPlaces: number = 2): number {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    return new Decimal(num
      .replace(/\./g, '')
      .replace(',', '.')
      .replace(' ', '')
      .replace(currency, '')
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    ).toDecimalPlaces(decimalPlaces).toNumber();
  }

  formatDecimalSeparator(num: number, decimal: TDecimalSeparators = '.'): string {
    const separator = decimal === '.' ? '$1.' : '$1,';
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
  }
}

export const NumberParse = new Core();
