class Resize {
    base64(data) {
        const base64 = data.image;
        const quality = data.quality == null ? 1.0 : data.quality;
        let maxWidth = data.maxWidth;
        let maxHeight = data.maxHeight;
        if (typeof (maxWidth) === 'undefined')
            maxWidth = 1024;
        if (typeof (maxHeight) === 'undefined')
            maxHeight = 1024;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const canvasCopy = document.createElement("canvas");
        const copyContext = canvasCopy.getContext("2d");
        const img = new Image();
        img.src = base64;
        let ratio = 1;
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
    }
}
export const ImageResize = new Resize();
//# sourceMappingURL=core-services-image.service.js.map