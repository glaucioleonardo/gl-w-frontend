import { UrlDecode } from '../url/core-services-url.service';
class Clean {
    trim(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /^\s*|\s*$/g;
            const middle = /\s\s+/g;
            return text
                .replace(between, '')
                .replace(middle, ' ');
        }
    }
    trimLeft(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /^\s*/g;
            return text.replace(between, '');
        }
    }
    trimRight(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /\s*$/g;
            return text.replace(between, '');
        }
    }
    trimBetween(text) {
        if (text == null) {
            return '';
        }
        else {
            const between = /^\s*|\s*$/g;
            return text.replace(between, '');
        }
    }
    trimMiddle(text) {
        if (text == null) {
            return '';
        }
        else {
            const middle = /\s\s+/g;
            return text.replace(middle, ' ');
        }
    }
    cleanText(string) {
        string = this.trim(string);
        return UrlDecode.decodeHtmlText(StringConverter.stringUnicode(string).trim());
    }
}
export const StringClean = new Clean();
class Converter {
    currencyNameToSymbol(currency) {
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
    }
    stringToBoolean(value) {
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
    }
    stringUnicode(string) {
        try {
            return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        }
        catch (e) {
            return UrlDecode.decodeHtmlText(string);
        }
    }
    titleCase(string) {
        const splitStr = string.toLowerCase().split(' ');
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return splitStr.join(' ');
    }
}
export const StringConverter = new Converter();
//# sourceMappingURL=core-services-string.service.js.map