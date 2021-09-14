import { TDecimalSeparators } from '../../number/core-services-number-interface';
import { TCurrencyTypes, IInputMaskOptions } from './core-services-input.interface';

// tslint:disable-next-line:variable-name
const inputMask = require('inputmask/dist/inputmask.min');

class Mask {
  currency(field: HTMLInputElement, type: TCurrencyTypes = 'currency', currencySymbol: string = 'R$') {
    let options: IInputMaskOptions;
    let mask: string;

    if (type === 'million-currency') {
      mask = `${currencySymbol} 0,00mn`;
      options = { prefix: `${currencySymbol} `, suffix : 'mn', allowMinus : true};
    } else {
      mask = `${currencySymbol} 0,00`;
      options = {prefix: `${currencySymbol} `, numericInput: true, allowMinus : true, rightAlign: false, radixPoint: ',', groupSeparator : '.'};
    }

    const im = new inputMask('currency', options);
    im.mask(field);
    return mask;
  }

  percentage(field: HTMLInputElement, allowMinus: boolean = true, decimalSeparator: TDecimalSeparators = ',', rightAlign: boolean = true, step: number = 5) {
    const symbol = '%';
    const mask = `0,00${symbol}`;
    const groupSeparator: TDecimalSeparators = decimalSeparator === ',' ? '.' : ',';

    inputMask({
      alias: 'numeric',
      suffix: `${symbol} `,
      numericInput: true,
      allowMinus,
      rightAlign,
      radixPoint: decimalSeparator,
      groupSeparator,
      step,
      placeholder: mask
    }).mask(field);

    return mask;
  }

  numeric(field: HTMLInputElement, allowMinus: boolean = true, decimalSeparator: TDecimalSeparators = ',', rightAlign: boolean = true, step: number = 1) {
    const mask = `0,00`;
    const groupSeparator: TDecimalSeparators = decimalSeparator === ',' ? '.' : ',';

    inputMask({
      alias: 'numeric',
      numericInput: true,
      allowMinus,
      rightAlign,
      radixPoint: decimalSeparator,
      groupSeparator,
      step,
      placeholder: mask
    }).mask(field);

    return mask;
  }

  integer(field: HTMLInputElement, allowMinus: boolean = true, rightAlign: boolean = false, step: number = 1) {
    const mask = `0`;

    inputMask({
      alias: 'integer',
      numericInput: true,
      inputmode: 'numeric',
      allowMinus,
      rightAlign,
      step,
      placeholder: mask
    }).mask(field);

    return mask;
  }

  customNumberPhone(mask: string, field: HTMLInputElement, rightAlign: boolean = false) {
    inputMask({
      mask,
      rightAlign,
      placeholder: mask
    }).mask(field);

    return mask;
  }

  remove(field: HTMLInputElement) {
    inputMask.remove(field);
  }
}
// tslint:disable-next-line:variable-name
export const InputMask = new Mask();
