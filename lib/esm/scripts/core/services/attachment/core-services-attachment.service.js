/**
 * Convert
 **/
export var textFileToUrlImage = function (file) {
    return new Promise(function (resolve) {
        var fileReader = new FileReader();
        fileReader.addEventListener('load', function (e) {
            resolve(e.target.result);
        });
        fileReader.readAsDataURL(file);
    });
};
/**
 * Parser
 **/
export var parseAcceptFiles = function (accepts) {
    return accepts
        .replace(/image\//g, '')
        .replace(/x-/g, '')
        .replace(/\+xml/g, '')
        .replace(/ /g, '')
        .split(',');
};
/**
 * Validate
**/
export var validateFile = function (input, accepts) {
    var fileName = input.value;
    var idxDot = fileName.lastIndexOf('.') + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (accepts.length === 1 && accepts[0] === '*') {
        return true;
    }
    for (var _i = 0, accepts_1 = accepts; _i < accepts_1.length; _i++) {
        var extension = accepts_1[_i];
        if (extFile === extension) {
            return true;
        }
    }
    return false;
};
export var validateFileSize = function (input) {
    if (input != null && input.files != null) {
        var fileSize = input.files[0].size / 1024;
        var maxSize = fileMaxSize(input);
        return fileSize <= maxSize;
    }
    else {
        console.error('Input is null.');
        return false;
    }
};
/**
 * The user must include the attribute 'data-maxsize' in mb(megabyte);
 * @param input
 */
var fileMaxSize = function (input) {
    var fileName = input.attributes['data-maxsize'].nodeValue;
    if (fileName) {
        return parseInt(fileName, 10);
    }
    else {
        return 1024 * 45;
    }
};
//# sourceMappingURL=core-services-attachment.service.js.map