"use strict";
exports.__esModule = true;
exports.InputMask = void 0;
var Inputmask = require('inputmask/dist/inputmask.min');
var Mask = (function () {
    function Mask() {
    }
    Mask.prototype.currency = function (field, type, currencySymbol) {
        if (type === void 0) { type = 'currency'; }
        if (currencySymbol === void 0) { currencySymbol = 'R$'; }
        var options;
        var mask;
        if (type === 'million-currency') {
            mask = currencySymbol + " 0,00mn";
            options = { prefix: currencySymbol + " ", suffix: 'mn', allowMinus: true };
        }
        else {
            mask = currencySymbol + " 0,00";
            options = { prefix: currencySymbol + " ", numericInput: true, allowMinus: true, rightAlign: false, radixPoint: ',', groupSeparator: '.' };
        }
        var im = new Inputmask('currency', options);
        im.mask(field);
        return mask;
    };
    Mask.prototype.percentage = function (field, allowMinus, decimalSeparator, rightAlign, step) {
        if (allowMinus === void 0) { allowMinus = true; }
        if (decimalSeparator === void 0) { decimalSeparator = ','; }
        if (rightAlign === void 0) { rightAlign = true; }
        if (step === void 0) { step = 5; }
        var symbol = '%';
        var mask = "0,00" + symbol;
        var groupSeparator = decimalSeparator === ',' ? '.' : ',';
        Inputmask({
            alias: 'numeric',
            suffix: symbol + " ",
            numericInput: true,
            allowMinus: allowMinus,
            rightAlign: rightAlign,
            radixPoint: decimalSeparator,
            groupSeparator: groupSeparator,
            step: step,
            placeholder: mask
        }).mask(field);
        return mask;
    };
    Mask.prototype.numeric = function (field, allowMinus, decimalSeparator, rightAlign, step) {
        if (allowMinus === void 0) { allowMinus = true; }
        if (decimalSeparator === void 0) { decimalSeparator = ','; }
        if (rightAlign === void 0) { rightAlign = true; }
        if (step === void 0) { step = 1; }
        var mask = "0,00";
        var groupSeparator = decimalSeparator === ',' ? '.' : ',';
        Inputmask({
            alias: 'numeric',
            numericInput: true,
            allowMinus: allowMinus,
            rightAlign: rightAlign,
            radixPoint: decimalSeparator,
            groupSeparator: groupSeparator,
            step: step,
            placeholder: mask
        }).mask(field);
        return mask;
    };
    Mask.prototype.integer = function (field, allowMinus, rightAlign, step) {
        if (allowMinus === void 0) { allowMinus = true; }
        if (rightAlign === void 0) { rightAlign = false; }
        if (step === void 0) { step = 1; }
        var mask = "0";
        Inputmask({
            alias: 'integer',
            numericInput: true,
            inputmode: 'numeric',
            allowMinus: allowMinus,
            rightAlign: rightAlign,
            step: step,
            placeholder: mask
        }).mask(field);
        return mask;
    };
    Mask.prototype.customNumberPhone = function (mask, field, rightAlign) {
        if (rightAlign === void 0) { rightAlign = false; }
        Inputmask({
            mask: mask,
            rightAlign: rightAlign,
            placeholder: mask
        }).mask(field);
        return mask;
    };
    Mask.prototype.remove = function (field) {
        Inputmask.remove(field);
    };
    return Mask;
}());
exports.InputMask = new Mask();
//# sourceMappingURL=core-services-input.service.js.map