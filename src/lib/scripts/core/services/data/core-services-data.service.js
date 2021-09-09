"use strict";
exports.__esModule = true;
exports.DataConversor = void 0;
var Converter = (function () {
    function Converter() {
    }
    Converter.prototype.binaryStringToArrayBuffer = function (s) {
        var buffer = new ArrayBuffer(s.length);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buffer;
    };
    return Converter;
}());
exports.DataConversor = new Converter();
//# sourceMappingURL=core-services-data.service.js.map