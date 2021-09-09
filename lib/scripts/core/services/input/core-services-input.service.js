const Inputmask = require('inputmask/dist/inputmask.min');
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
    percentage(field, allowMinus = true, decimalSeparator = ',', rightAlign = true, step = 5) {
        const symbol = '%';
        const mask = `0,00${symbol}`;
        const groupSeparator = decimalSeparator === ',' ? '.' : ',';
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
    numeric(field, allowMinus = true, decimalSeparator = ',', rightAlign = true, step = 1) {
        const mask = `0,00`;
        const groupSeparator = decimalSeparator === ',' ? '.' : ',';
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
    integer(field, allowMinus = true, rightAlign = false, step = 1) {
        const mask = `0`;
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
    customNumberPhone(mask, field, rightAlign = false) {
        Inputmask({
            mask,
            rightAlign,
            placeholder: mask
        }).mask(field);
        return mask;
    }
    remove(field) {
        Inputmask.remove(field);
    }
}
export const InputMask = new Mask();
//# sourceMappingURL=core-services-input.service.js.map