"use strict";
exports.__esModule = true;
exports.NumberParse = void 0;
var decimal_js_1 = require("decimal.js");
var core_services_internationalization_service_1 = require("../internationalization/core-services-internationalization.service");
var Core = (function () {
    function Core() {
    }
    Core.prototype.toCurrency = function (currencyCode, value, decimalPlaces) {
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        var list = core_services_internationalization_service_1.InternationalCore.retrieveList(undefined, undefined, undefined, currencyCode)[0];
        return new Intl.NumberFormat(list.countryLanguage, {
            style: 'currency',
            currency: list.currencyCode,
            maximumFractionDigits: decimalPlaces
        }).format(value);
    };
    Core.prototype.toDecimal = function (value, errorValue) {
        if (errorValue === void 0) { errorValue = new decimal_js_1.Decimal(0).toDecimalPlaces(0); }
        var invalid = value == null || Number.isNaN(value) || new decimal_js_1.Decimal(value).isNaN();
        if (!invalid) {
            return new decimal_js_1.Decimal(value);
        }
        else {
            return errorValue;
        }
    };
    Core.prototype.toPercentage = function (num, includeSymbol, decimalSeparator, decimalPlaces) {
        if (includeSymbol === void 0) { includeSymbol = true; }
        if (decimalSeparator === void 0) { decimalSeparator = ','; }
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        var parsedNumber = new decimal_js_1.Decimal(num).times(100);
        var parsedString = parsedNumber.toDecimalPlaces(decimalPlaces).toString().replace('.', decimalSeparator);
        var symbol = includeSymbol ? '%' : '';
        return "" + parsedString + symbol;
    };
    Core.prototype.toString = function (number) {
        var maxLength = number.toString().length;
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
    };
    Core.prototype.currencyToNumber = function (num, decimal, currency, decimalPlaces) {
        if (decimal === void 0) { decimal = ','; }
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        var parsedNumber = new decimal_js_1.Decimal(num).toDecimalPlaces(decimalPlaces).toString();
        if (currency != null) {
            return new decimal_js_1.Decimal(parsedNumber
                .replace(/\./g, '')
                .replace(',', '.')
                .replace(' ', '')
                .replace(currency, '')).toDecimalPlaces(decimalPlaces).toNumber();
        }
        else {
            return new decimal_js_1.Decimal(parsedNumber
                .replace(/\./g, '')
                .replace(',', '.')
                .replace('Ar$ ', '')
                .replace('R$ ', '')
                .replace('€ ', '')
                .replace('US$ ', '')).toDecimalPlaces(decimalPlaces).toNumber();
        }
    };
    Core.prototype.decimalToString = function (num, decimalOutput, decimalPlaces) {
        if (decimalOutput === void 0) { decimalOutput = '.'; }
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        var value = new decimal_js_1.Decimal(num);
        var stringValue = value.toDecimalPlaces(decimalPlaces).toFixed(decimalPlaces);
        var separator = decimalOutput === ',' ? '$1.' : '$1,';
        return stringValue
            .replace('.', decimalOutput)
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
    };
    Core.prototype.percentageToNumber = function (num, decimal, decimalPlaces) {
        var _a;
        if (decimal === void 0) { decimal = ','; }
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        var parsedNumber = (_a = num
            .replace(/\./g, '')
            .replace(',', '.')
            .replace(decimal, '.')
            .replace('% ', '')
            .replace('%', '')) === null || _a === void 0 ? void 0 : _a.trim();
        return new decimal_js_1.Decimal(parsedNumber)
            .dividedBy(100)
            .toDecimalPlaces(decimalPlaces)
            .toNumber();
    };
    Core.prototype.stringCurrencyToNumber = function (num, decimal, currency, decimalPlaces) {
        if (decimal === void 0) { decimal = ','; }
        if (decimalPlaces === void 0) { decimalPlaces = 2; }
        return new decimal_js_1.Decimal(num
            .replace(/\./g, '')
            .replace(',', '.')
            .replace(' ', '')
            .replace(currency, '')).toDecimalPlaces(decimalPlaces).toNumber();
    };
    Core.prototype.formatDecimalSeparator = function (num, decimal) {
        if (decimal === void 0) { decimal = '.'; }
        var separator = decimal === '.' ? '$1.' : '$1,';
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, separator);
    };
    return Core;
}());
exports.NumberParse = new Core();
//# sourceMappingURL=core-services-number.service.js.map