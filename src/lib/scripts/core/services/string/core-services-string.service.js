"use strict";
exports.__esModule = true;
exports.StringConverter = exports.StringClean = void 0;
var core_services_url_service_1 = require("../url/core-services-url.service");
var Clean = (function () {
    function Clean() {
    }
    Clean.prototype.trim = function (text) {
        if (text == null) {
            return '';
        }
        else {
            var between = /^\s*|\s*$/g;
            var middle = /\s\s+/g;
            return text
                .replace(between, '')
                .replace(middle, ' ');
        }
    };
    Clean.prototype.trimLeft = function (text) {
        if (text == null) {
            return '';
        }
        else {
            var between = /^\s*/g;
            return text.replace(between, '');
        }
    };
    Clean.prototype.trimRight = function (text) {
        if (text == null) {
            return '';
        }
        else {
            var between = /\s*$/g;
            return text.replace(between, '');
        }
    };
    Clean.prototype.trimBetween = function (text) {
        if (text == null) {
            return '';
        }
        else {
            var between = /^\s*|\s*$/g;
            return text.replace(between, '');
        }
    };
    Clean.prototype.trimMiddle = function (text) {
        if (text == null) {
            return '';
        }
        else {
            var middle = /\s\s+/g;
            return text.replace(middle, ' ');
        }
    };
    Clean.prototype.cleanText = function (string) {
        string = this.trim(string);
        return core_services_url_service_1.UrlDecode.decodeHtmlText(exports.StringConverter.stringUnicode(string).trim());
    };
    return Clean;
}());
exports.StringClean = new Clean();
var Converter = (function () {
    function Converter() {
    }
    Converter.prototype.currencyNameToSymbol = function (currency) {
        switch (currency) {
            case 'euro': return '€';
            case 'dolar': return 'US$';
            case 'peso': return '$';
            case 'peso-ar': return 'Ar$';
            case 'real': return 'R$';
            case 'pounds-sterling': return '£';
            case 'canadian-dollars': return '$';
            case 'yuan': return '¥';
            case 'rupee': return '₹';
            case 'yen': return '¥';
            default: return 'R$';
        }
    };
    Converter.prototype.stringToBoolean = function (value) {
        switch (value) {
            case 'true':
                return true;
            case 'false':
                return false;
            case 'null':
            case null:
                return false;
            default:
                return true;
        }
    };
    Converter.prototype.stringUnicode = function (string) {
        try {
            return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        catch (e) {
            return core_services_url_service_1.UrlDecode.decodeHtmlText(string);
        }
    };
    Converter.prototype.titleCase = function (string) {
        var splitStr = string.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    };
    return Converter;
}());
exports.StringConverter = new Converter();
//# sourceMappingURL=core-services-string.service.js.map