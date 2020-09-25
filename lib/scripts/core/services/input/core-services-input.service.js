import Inputmask from 'inputmask';
class Mask {
    currency(field, type = 'currency', currencySymbol = 'R$') {
        let options;
        let mask;
        if (type === 'million-currency') {
            mask = `${currencySymbol} 0,00mn`;
            options = { prefix: `${currencySymbol} `, suffix: 'mn', allowMinus: true };
        }
        else {
            mask = `${currencySymbol} 0,00`;
            options = { prefix: `${currencySymbol} `, numericInput: true, allowMinus: true, rightAlign: false, radixPoint: ',', groupSeparator: '.' };
        }
        const im = new Inputmask('currency', options);
        im.mask(field);
        return mask;
    }
    remove(field) {
        Inputmask.remove(field);
    }
}
export const InputMask = new Mask();
//# sourceMappingURL=core-services-input.service.js.map