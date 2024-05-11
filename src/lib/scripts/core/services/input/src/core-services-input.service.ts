import { TDecimalSeparators } from '../../number/src';
import { TCurrencyTypes, IInputMaskOptions } from './core-services-input.interface';
import Inputmask from 'inputmask';

class Mask {
  currency(field: HTMLInputElement, type: TCurrencyTypes = 'currency', currencySymbol: string = 'R$') {
    if (this.isValid(field)) {
      return 'Unable to add mask to null field!'
    }

    let options: IInputMaskOptions;
    let mask: string;

    if (type === 'million-currency') {
      mask = `${currencySymbol} 0,00mn`;
      options = { prefix: `${currencySymbol} `, suffix : 'mn', allowMinus : true};
    } else {
      mask = `${currencySymbol} 0,00`;
      options = {prefix: `${currencySymbol} `, numericInput: true, allowMinus : true, rightAlign: false, radixPoint: ',', groupSeparator : '.'};
    }

    const im = new Inputmask('currency', options);
    im.mask(field);
    return mask;
  }

  percentage(field: HTMLInputElement, allowMinus: boolean = true, decimalSeparator: TDecimalSeparators = ',', rightAlign: boolean = true, step: number = 5) {
    if (this.isValid(field)) {
      return 'Unable to add mask to null field!';
    }

    const symbol = '%';
    const mask = `0,00${symbol}`;
    const groupSeparator: TDecimalSeparators = decimalSeparator === ',' ? '.' : ',';

    Inputmask({
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
    if (this.isValid(field)) {
      return 'Unable to add mask to null field!'
    }

    const mask = '0,00';
    const groupSeparator: TDecimalSeparators = decimalSeparator === ',' ? '.' : ',';

    Inputmask({
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
    if (this.isValid(field)) {
      return 'Unable to add mask to null field!'
    }

    const mask = '0';

    Inputmask({
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
    if (this.isValid(field)) {
      return 'Unable to add mask to null field!'
    }

    Inputmask({
      mask,
      rightAlign,
      placeholder: mask
    }).mask(field);

    return mask;
  }

  remove(field: HTMLInputElement) {
    if (this.isValid(field)) {
      return 'Unable to remove mask to null field!'
    }

    Inputmask.remove(field);
  }

  private isValid(field: HTMLInputElement): boolean {
    return field != null;
  }
}

export const InputMask = new Mask();
