import {IAttachmentData, IAttachmentFileInfo} from './core-services-attachment.interface';

class Convert {
  textFileToUrlImage(file: File): Promise<string> {
    return new Promise(resolve => {
      const fileReader = new FileReader();
      fileReader.addEventListener('load', (e: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
        resolve(e.target.result);
      });

      fileReader.readAsDataURL(file);
    });
  }

  fileToBase64Image(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  }
}

export const AttachmentConvert = new Convert();

class Clean {
  cleanAttachmentText(string: string): string {
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
  }
}

export const AttachmentClean = new Clean();

class Icon {
  /**
   *
   * @param fileName File name including extensions.
   * @param url Where the images must be found. Default: 'assets/img/icon/attachment-icons/'
   */
  get(fileName: string, url?: string): string {
    if (url == null) {
      url = '../assets/img/icon/attachment-icons/';
    }

    const extension = this.extension(fileName);

    let fileIcon: string;

    switch (extension.toLowerCase()) {
      case 'pdf': fileIcon = url + 'adobe-pdf.svg'; break;
      case 'txt': fileIcon = url + 'txt.svg'; break;
      case 'ooxml': fileIcon = url + 'ms-office-365.svg'; break;

      case 'jpeg': case 'jpg': case 'png': case 'gif': case 'tiff': case 'raw': case 'svg':
      case 'bmp': case 'emf': case 'svgz': fileIcon = url + 'image-icon.svg'; break;

      case 'avi': case 'flv': case 'wmv': case 'mov': case 'mp4': case 'mpeg': case '3gp':
      case 'ogg': case 'webm': case 'hdv': case 'vob': case 'wav': fileIcon = url + 'video-icon.svg'; break;

      case 'doc': case 'dot': case 'wbk': case 'docx': case 'docm': case 'dotx': case 'dotm':
      case 'docb': fileIcon = url + 'ms-word.svg'; break;

      case 'xls': case 'xlt': case 'xlm': case 'xlsx': case 'xlsm': case 'xltx': case 'xltm': case 'xlsb':
      case 'xla': case 'xlam': case 'xll': case 'xlw': fileIcon = url + 'ms-excel.svg'; break;

      case 'ppt': case 'pot': case 'pps': case 'pptx': case 'pptm': case 'potx': case 'potm': case 'ppam':
      case 'ppsx': case 'ppsm': case 'sldx': case 'sldm': fileIcon = url + 'ms-powerpoint.svg'; break;

      case 'accdb': case 'accde': case 'accdt': case 'accdr': fileIcon = url + 'ms-access.svg'; break;

      case 'mpp': case 'mpt': fileIcon = url + 'ms-project.svg'; break;
      case 'pst': case 'ost': case 'eml': fileIcon = url + 'ms-outlook.svg'; break;

      case 'idea': case 'ai': case 'ait': case 'draw': case 'line': case 'sket': case 'dwg':
      case 'dxf': case 'cgm': case 'cdr': case 'eps': case 'epsf': case 'ps': case 'psd':
      case 'pdd': case 'pxr': fileIcon = url + 'adobe-cc.svg'; break;

      case 'rar': case 'zip': case '7z': case 'arj': case 'bz2': case 'cab': case 'gz':
      case 'lz': case 'lzh': case 'tar': case 'uue': case 'xz': case 'z': case 'zipx': case '001':
        fileIcon = url + 'zip.svg'; break;

      case 'htm': case 'html': case 'shtml': case 'xht': case 'xhtml': case 'webp': case 'mht':
      case 'mhtml': case 'url': case 'website': fileIcon = url + 'browser.svg'; break;

      case 'exe': case 'bat': case 'bin': case 'cmd': case 'com': case 'cpl': case 'gadget':
      case 'lnk': case 'msc': case 'smi': case 'mst': case 'ps1': case 'reg': case 'vb': case 'vbs':
      case 'vbe': case 'vbscript': case 'ws': fileIcon = url + 'executable.svg'; break;

      case 'ttf': case 'otf': case 'woff': case 'woff2': case 'eot': fileIcon = url + 'fonts.svg'; break;

      case 'pbix': fileIcon = url + 'power-bi.svg'; break;

      default: fileIcon = url + 'file.svg'; break;
    }

    return fileIcon;
  }

  extension(fileName: string): string {
    return fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
  }
}

export const AttachmentIcon = new Icon();

class Parser {
  parseAcceptFiles(accepts: string): string[] {
    return accepts
      .replace(/image\//g, '')
      .replace(/x-/g, '')
      .replace(/\+xml/g, '')
      .replace(/ /g, '')
      .split(',');
  }

  populateFiles(attachmentsData: IAttachmentData[]): IAttachmentFileInfo[] {
    const attachments: IAttachmentFileInfo[] = [];
    const userAttachments: IAttachmentData[] = attachmentsData.filter(x => x.new);

    for (const attachment of userAttachments) {
      if (attachment.file != null) {
        const name = AttachmentClean.cleanAttachmentText(attachment.file.name);
        const content = new Blob([attachment.file], {type: attachment.file.type});
        attachments.push({name, content});
      }
    }

    return attachments;
  }
}

export const AttachmentParser = new Parser();

class Validate {
  /** The user must include the attribute 'data-maxsize' in mb(megabyte); */
  maxSize = (input: HTMLInputElement): number => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
    const fileName = (input.attributes as any)['data-maxsize'].nodeValue;

    if (fileName) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      return parseInt(fileName, 10);
    } else {
      return 1024 * 45;
    }
  };

  file(input: HTMLInputElement, accepts: string[]): boolean {
    return this.fileArray(input.value, accepts);
  }

  fileArray(fileName: string, accepts: string[]): boolean {
    const idxDot = fileName.lastIndexOf('.') + 1;
    const extFile = fileName.substring(idxDot, fileName.length).toLowerCase();

    if (accepts.length === 1 && accepts[0] === '*') {
      return true;
    }

    for (const extension of accepts) {
      const parsedExtension = extension.replace('.', '');

      if (extFile === extension || extFile === parsedExtension) {
        return true;
      }
    }
    return false;
  }

  fileSize(input: HTMLInputElement): boolean {
    if (input != null && input.files != null) {
      const fileSize = input.files[0].size / 1024;
      const max = this.maxSize(input);

      return fileSize <= max;
    } else {
      console.error('Input is null.');
      return false;
    }
  }

  fileSizeFromArray(input: HTMLInputElement, file: File): boolean {
    if (file != null) {
      const fileSize = file.size / 1024;
      const max = this.maxSize(input);

      return fileSize <= max;
    } else {
      console.error('Input is null.');
      return false;
    }
  }

  /**
   * Check if Attachment Data contains duplicated files
   * @param fileName The file must include the extension.
   * @param attachmentList Inform the list of attachments to be compared.
   */
  duplicated(fileName: string, attachmentList: IAttachmentData[]): boolean {
    if (attachmentList == null) {
      console.error('You need informing the list of attachments to be compared.');
      return false;
    } else {
      for (const file of attachmentList) {
        if (file.name.toLowerCase() === fileName.toLowerCase()) {
          return true;
        }
      }
    }

    return false;
  }
}

export const AttachmentValidate = new Validate();
