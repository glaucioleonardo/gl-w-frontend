"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.AttachmentValidate = exports.AttachmentParser = exports.AttachmentIcon = exports.AttachmentClean = exports.AttachmentConvert = void 0;
var Convert = (function () {
    function Convert() {
    }
    Convert.prototype.textFileToUrlImage = function (file) {
        return new Promise(function (resolve) {
            var fileReader = new FileReader();
            fileReader.addEventListener('load', function (e) {
                resolve(e.target.result);
            });
            fileReader.readAsDataURL(file);
        });
    };
    Convert.prototype.fileToBase64Image = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function () { return resolve(reader.result); };
            reader.onerror = function (error) { return reject(error); };
        });
    };
    return Convert;
}());
exports.AttachmentConvert = new Convert();
var Clean = (function () {
    function Clean() {
    }
    Clean.prototype.cleanAttachmentText = function (string) {
        return string
            .replace(/€/g, '')
            .replace(/`/g, '')
            .replace(/„/g, '')
            .replace(/…/g, '')
            .replace(/†/g, '')
            .replace(/‡/g, '')
            .replace(/ˆ/g, '')
            .replace(/‰/g, '')
            .replace(/Š/g, '')
            .replace(/‹/g, '')
            .replace(/Œ/g, '')
            .replace(//g, '')
            .replace(/Ž/g, '')
            .replace(//g, '')
            .replace(/‘/g, '')
            .replace(/’/g, '')
            .replace(/“/g, '')
            .replace(/”/g, '')
            .replace(/•/g, '')
            .replace(/˜/g, '')
            .replace(/™/g, '')
            .replace(/š/g, '')
            .replace(/›/g, '')
            .replace(/œ/g, '')
            .replace(/ž/g, '')
            .replace(/Ÿ/g, '')
            .replace(/¢/g, '')
            .replace(/£/g, '')
            .replace(/¤/g, '')
            .replace(/¥/g, '')
            .replace(/¦/g, '')
            .replace(/§/g, '')
            .replace(/¨/g, '')
            .replace(/©/g, '')
            .replace(/ª/g, '')
            .replace(/«/g, '')
            .replace(/¬/g, '')
            .replace(/®/g, '')
            .replace(/¯/g, '')
            .replace(/°/g, '')
            .replace(/±/g, '')
            .replace(/²/g, '')
            .replace(/³/g, '')
            .replace(/´/g, '')
            .replace(/µ/g, '')
            .replace(/¶/g, '')
            .replace(/·/g, '')
            .replace(/¹/g, '')
            .replace(/º/g, '')
            .replace(/»/g, '')
            .replace(/¼/g, '')
            .replace(/½/g, '')
            .replace(/¾/g, '')
            .replace(/¿/g, '')
            .replace(/Å/g, 'A')
            .replace(/Æ/g, 'A')
            .replace(/Ð/g, 'D')
            .replace(/Ø/g, 'O')
            .replace(/ß/g, 'B')
            .replace(/æ/g, 'a')
            .replace(/÷/g, '')
            .replace(/ø/g, 'o')
            .replace(/þ/g, 'b')
            .replace(/!/g, '')
            .replace(/"/g, '')
            .replace(/#/g, '')
            .replace(/\$/g, '')
            .replace(/%/g, '')
            .replace(/&/g, '')
            .replace(/'/g, '')
            .replace(/\(/g, '')
            .replace(/\)/g, '')
            .replace(/\*/g, '')
            .replace(/\+/g, '')
            .replace(/\//g, '')
            .replace(/:/g, '')
            .replace(/;/g, '')
            .replace(/</g, '')
            .replace(/=/g, '')
            .replace(/>/g, '')
            .replace(/\?/g, '')
            .replace(/@/g, '')
            .replace(/\[/g, '')
            .replace(/\\/g, '')
            .replace(/]/g, '')
            .replace(/\^/g, '')
            .replace(/_/g, '')
            .replace(/`/g, '')
            .replace(/{/g, '')
            .replace(/\|/g, '')
            .replace(/}/g, '')
            .replace(/~/g, '')
            .replace(/`/g, '')
            .replace(//g, '')
            .replace(/ƒ/g, 'f')
            .replace(/„/g, '')
            .replace(/…/g, '')
            .replace(/†/g, '')
            .replace(/‡/g, '')
            .replace(/ˆ/g, '')
            .replace(/‰/g, '')
            .replace(/Š/g, '')
            .replace(/‹/g, '')
            .replace(/Œ/g, '')
            .replace(//g, '')
            .replace(/Ž/g, 'Z')
            .replace(//g, '')
            .replace(//g, '')
            .replace(/‘/g, '')
            .replace(/’/g, '')
            .replace(/“/g, '')
            .replace(/”/g, '')
            .replace(/•/g, '')
            .replace(/–/g, '')
            .replace(/—/g, '')
            .replace(/˜/g, '')
            .replace(/™/g, '')
            .replace(/š/g, '')
            .replace(/›/g, '')
            .replace(/œ/g, '')
            .replace(//g, '')
            .replace(/ž/g, 'z')
            .replace(/Ÿ/g, 'Y')
            .replace(/¡/g, '')
            .replace(/¢/g, 'c')
            .replace(/£/g, '')
            .replace(/¤/g, '')
            .replace(/¥/g, 'Y')
            .replace(/¦/g, '')
            .replace(/§/g, '')
            .replace(/¨/g, '')
            .replace(/©/g, '')
            .replace(/ª/g, '')
            .replace(/«/g, '')
            .replace(/¬/g, '')
            .replace(/®/g, '')
            .replace(/¯/g, '')
            .replace(/°/g, '')
            .replace(/±/g, '')
            .replace(/²/g, '2')
            .replace(/³/g, '3')
            .replace(/´/g, '')
            .replace(/µ/g, 'u')
            .replace(/¶/g, '')
            .replace(/·/g, '')
            .replace(/¹/g, '1')
            .replace(/º/g, '')
            .replace(/»/g, '')
            .replace(/¼/g, '')
            .replace(/½/g, '')
            .replace(/¾/g, '')
            .replace(/¿/g, '')
            .replace(/Ð/g, 'D')
            .replace(/ß/g, 'B')
            .replace(/æ/g, 'a')
            .replace(/÷/g, '')
            .replace(/ø/g, 'o')
            .replace(/þ/g, 'b')
            .replace(/&/g, '')
            .replace(/</g, '')
            .replace(/>/g, '');
    };
    return Clean;
}());
exports.AttachmentClean = new Clean();
var Icon = (function () {
    function Icon() {
    }
    Icon.prototype.get = function (fileName, url) {
        if (url == null) {
            url = '../assets/img/icon/attachment-icons/';
        }
        var extension = this.extension(fileName);
        var fileIcon;
        switch (extension.toLowerCase()) {
            case 'pdf':
                fileIcon = url + 'adobe-pdf.svg';
                break;
            case 'txt':
                fileIcon = url + 'txt.svg';
                break;
            case 'ooxml':
                fileIcon = url + 'ms-office-365.svg';
                break;
            case 'jpeg':
            case 'jpg':
            case 'png':
            case 'gif':
            case 'tiff':
            case 'raw':
            case 'svg':
            case 'bmp':
            case 'emf':
            case 'svgz':
                fileIcon = url + 'image-icon.svg';
                break;
            case 'avi':
            case 'flv':
            case 'wmv':
            case 'mov':
            case 'mp4':
            case 'mpeg':
            case '3gp':
            case 'ogg':
            case 'webm':
            case 'hdv':
            case 'vob':
            case 'wav':
                fileIcon = url + 'video-icon.svg';
                break;
            case 'doc':
            case 'dot':
            case 'wbk':
            case 'docx':
            case 'docm':
            case 'dotx':
            case 'dotm':
            case 'docb':
                fileIcon = url + 'ms-word.svg';
                break;
            case 'xls':
            case 'xlt':
            case 'xlm':
            case 'xlsx':
            case 'xlsm':
            case 'xltx':
            case 'xltm':
            case 'xlsb':
            case 'xla':
            case 'xlam':
            case 'xll':
            case 'xlw':
                fileIcon = url + 'ms-excel.svg';
                break;
            case 'ppt':
            case 'pot':
            case 'pps':
            case 'pptx':
            case 'pptm':
            case 'potx':
            case 'potm':
            case 'ppam':
            case 'ppsx':
            case 'ppsm':
            case 'sldx':
            case 'sldm':
                fileIcon = url + 'ms-powerpoint.svg';
                break;
            case 'accdb':
            case 'accde':
            case 'accdt':
            case 'accdr':
                fileIcon = url + 'ms-access.svg';
                break;
            case 'mpp':
            case 'mpt':
                fileIcon = url + 'ms-project.svg';
                break;
            case 'pst':
            case 'ost':
            case 'eml':
                fileIcon = url + 'ms-outlook.svg';
                break;
            case 'idea':
            case 'ai':
            case 'ait':
            case 'draw':
            case 'line':
            case 'sket':
            case 'dwg':
            case 'dxf':
            case 'cgm':
            case 'cdr':
            case 'eps':
            case 'epsf':
            case 'ps':
            case 'psd':
            case 'pdd':
            case 'pxr':
                fileIcon = url + 'adobe-cc.svg';
                break;
            case 'rar':
            case 'zip':
            case '7z':
            case 'arj':
            case 'bz2':
            case 'cab':
            case 'gz':
            case 'lz':
            case 'lzh':
            case 'tar':
            case 'uue':
            case 'xz':
            case 'z':
            case 'zipx':
            case '001':
                fileIcon = url + 'zip.svg';
                break;
            case 'htm':
            case 'html':
            case 'shtml':
            case 'xht':
            case 'xhtml':
            case 'webp':
            case 'mht':
            case 'mhtml':
            case 'url':
            case 'website':
                fileIcon = url + 'browser.svg';
                break;
            case 'exe':
            case 'bat':
            case 'bin':
            case 'cmd':
            case 'com':
            case 'cpl':
            case 'gadget':
            case 'lnk':
            case 'msc':
            case 'smi':
            case 'mst':
            case 'ps1':
            case 'reg':
            case 'vb':
            case 'vbs':
            case 'vbe':
            case 'vbscript':
            case 'ws':
                fileIcon = url + 'executable.svg';
                break;
            case 'ttf':
            case 'otf':
            case 'woff':
            case 'woff2':
            case 'eot':
                fileIcon = url + 'fonts.svg';
                break;
            case 'pbix':
                fileIcon = url + 'power-bi.svg';
                break;
            default:
                fileIcon = url + 'file.svg';
                break;
        }
        return fileIcon;
    };
    Icon.prototype.extension = function (fileName) {
        return fileName.substr(fileName.lastIndexOf('.') + 1).toLowerCase();
    };
    return Icon;
}());
exports.AttachmentIcon = new Icon();
var Parser = (function () {
    function Parser() {
    }
    Parser.prototype.parseAcceptFiles = function (accepts) {
        return accepts
            .replace(/image\//g, '')
            .replace(/x-/g, '')
            .replace(/\+xml/g, '')
            .replace(/ /g, '')
            .split(',');
    };
    Parser.prototype.populateFiles = function (attachmentsData) {
        var e_1, _a;
        var attachments = [];
        var userAttachments = attachmentsData.filter(function (x) { return x["new"]; });
        try {
            for (var userAttachments_1 = __values(userAttachments), userAttachments_1_1 = userAttachments_1.next(); !userAttachments_1_1.done; userAttachments_1_1 = userAttachments_1.next()) {
                var attachment = userAttachments_1_1.value;
                if (attachment.file != null) {
                    var name_1 = exports.AttachmentClean.cleanAttachmentText(attachment.file.name);
                    var content = new Blob([attachment.file], { type: attachment.file.type });
                    attachments.push({ name: name_1, content: content });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (userAttachments_1_1 && !userAttachments_1_1.done && (_a = userAttachments_1["return"])) _a.call(userAttachments_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return attachments;
    };
    return Parser;
}());
exports.AttachmentParser = new Parser();
var Validate = (function () {
    function Validate() {
        this.maxSize = function (input) {
            var fileName = input.attributes['data-maxsize'].nodeValue;
            if (fileName) {
                return parseInt(fileName, 10);
            }
            else {
                return 1024 * 45;
            }
        };
    }
    Validate.prototype.file = function (input, accepts) {
        return this.fileArray(input.value, accepts);
    };
    Validate.prototype.fileArray = function (fileName, accepts) {
        var e_2, _a;
        var idxDot = fileName.lastIndexOf('.') + 1;
        var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
        if (accepts.length === 1 && accepts[0] === '*') {
            return true;
        }
        try {
            for (var accepts_1 = __values(accepts), accepts_1_1 = accepts_1.next(); !accepts_1_1.done; accepts_1_1 = accepts_1.next()) {
                var extension = accepts_1_1.value;
                var parsedExtension = extension.replace('.', '');
                if (extFile === extension || extFile === parsedExtension) {
                    return true;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (accepts_1_1 && !accepts_1_1.done && (_a = accepts_1["return"])) _a.call(accepts_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return false;
    };
    Validate.prototype.fileSize = function (input) {
        if (input != null && input.files != null) {
            var fileSize = input.files[0].size / 1024;
            var max = this.maxSize(input);
            return fileSize <= max;
        }
        else {
            console.error('Input is null.');
            return false;
        }
    };
    Validate.prototype.fileSizeFromArray = function (input, file) {
        if (file != null) {
            var fileSize = file.size / 1024;
            var max = this.maxSize(input);
            return fileSize <= max;
        }
        else {
            console.error('Input is null.');
            return false;
        }
    };
    Validate.prototype.duplicated = function (fileName, attachmentList) {
        var e_3, _a;
        if (attachmentList == null) {
            console.error('You need informing the list of attachments to be compared.');
            return false;
        }
        else {
            try {
                for (var attachmentList_1 = __values(attachmentList), attachmentList_1_1 = attachmentList_1.next(); !attachmentList_1_1.done; attachmentList_1_1 = attachmentList_1.next()) {
                    var file = attachmentList_1_1.value;
                    if (file.name.toLowerCase() === fileName.toLowerCase()) {
                        return true;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (attachmentList_1_1 && !attachmentList_1_1.done && (_a = attachmentList_1["return"])) _a.call(attachmentList_1);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return false;
    };
    return Validate;
}());
exports.AttachmentValidate = new Validate();
//# sourceMappingURL=core-services-attachment.service.js.map