import Inputmask from 'inputmask';
import { ICurrencyTypes, IInputMaskOptions } from './core-services-input.interface';

class Mask {
  currency(field: HTMLInputElement, type: ICurrencyTypes = 'currency', currencySymbol: string = 'R$') {
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

  remove(field: HTMLInputElement) {
    Inputmask.remove(field);
  }
}
// tslint:disable-next-line:variable-name
export const InputMask = new Mask();
