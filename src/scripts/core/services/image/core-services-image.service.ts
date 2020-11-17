import { IImageUpdate } from './core-services-image.interface';

class Resize {
  /**
   * @param data:
   * image: string
   * quality: (optional) float number => Default/Max 1.0, min 0.0
   * maxWidth: (optional) integer number => Default 1024px
   * maxHeight: (optional) integer number => Default 1024px
   */
  base64(data: IImageUpdate): string {
    const base64 = data.image;
    const quality = data.quality == null ? 1.0 : data.quality
    let maxWidth = data.maxWidth;
    let maxHeight = data.maxHeight;

    // regionMax size for thumbnail
    if (typeof (maxWidth) === 'undefined') maxWidth = 1024;
    if (typeof (maxHeight) === 'undefined') maxHeight = 1024;
    // endregion

    // region Create and initialize two canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const canvasCopy = document.createElement("canvas");
    const copyContext = canvasCopy.getContext("2d");
    // endregion

    // // region Set context background
    // if (ctx != null) {
    //   console.log('Setting ctx background color');
    //   ctx.fillStyle = '#FFF'
    // }
    // if (copyContext != null) {
    //   console.log('Setting context copy background color');
    //   copyContext.fillStyle = '#FFF'
    // }
    // // endregion

    // region Create original image
    const img = new Image();
    img.src = base64;
    // img.style.backgroundColor = '#FFF'
    // endregion

    // region Determine new ratio based on max size
    let ratio = 1;
    if (img.width > maxWidth) {
      ratio = maxWidth / img.width;
    } else if (img.height > maxHeight) {
      ratio = maxHeight / img.height;
    }
    // endregion

    // region Draw original image in second canvas
    canvasCopy.width = img.width;
    canvasCopy.height = img.height;
    copyContext?.drawImage(img, 0, 0);
    // endregion

    // Copy and resize second canvas to first canvas
    canvas.width = img.width * ratio;
    canvas.height = img.height * ratio;
    ctx?.drawImage(canvasCopy, 0, 0, canvasCopy.width, canvasCopy.height, 0, 0, canvas.width, canvas.height);
    // endregion

    return canvas.toDataURL('image/jpeg', quality);
  }
}
// tslint:disable-next-line:variable-name
export const ImageResize = new Resize();