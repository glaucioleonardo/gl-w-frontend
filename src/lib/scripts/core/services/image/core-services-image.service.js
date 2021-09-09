"use strict";
exports.__esModule = true;
exports.ImageResize = void 0;
var Resize = (function () {
    function Resize() {
    }
    Resize.prototype.base64 = function (data) {
        var base64 = data.image;
        var quality = data.quality == null ? 1.0 : data.quality;
        var maxWidth = data.maxWidth;
        var maxHeight = data.maxHeight;
        if (typeof (maxWidth) === 'undefined')
            maxWidth = 1024;
        if (typeof (maxHeight) === 'undefined')
            maxHeight = 1024;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var canvasCopy = document.createElement('canvas');
        var copyContext = canvasCopy.getContext('2d');
        var img = new Image();
        img.src = base64;
        var ratio = 1;
        if (img.width > maxWidth) {
            ratio = maxWidth / img.width;
        }
        else if (img.height > maxHeight) {
            ratio = maxHeight / img.height;
        }
        canvasCopy.width = img.width;
        canvasCopy.height = img.height;
        copyContext === null || copyContext === void 0 ? void 0 : copyContext.drawImage(img, 0, 0);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL('image/jpeg', quality);
    };
    return Resize;
}());
exports.ImageResize = new Resize();
//# sourceMappingURL=core-services-image.service.js.map