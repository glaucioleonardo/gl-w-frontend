import { IAttachmentData, IAttachmentFileInfo } from './core-services-attachment.interface';
declare class Convert {
    textFileToUrlImage(file: File): PromiseLike<string>;
}
export declare const AttachmentConvert: Convert;
declare class Clean {
    cleanAttachmentText(string: string): string;
}
export declare const AttachmentClean: Clean;
declare class Icon {
    get(fileName: string, url?: string): string;
    extension(fileName: string): string;
}
export declare const AttachmentIcon: Icon;
declare class Parser {
    parseAcceptFiles(accepts: string): string[];
    populateFiles(attachmentsData: IAttachmentData[]): IAttachmentFileInfo[];
}
export declare const AttachmentParser: Parser;
declare class Validate {
    file(input: HTMLInputElement, accepts: string[]): boolean;
    fileArray(fileName: string, accepts: string[]): boolean;
    fileSize(input: HTMLInputElement): boolean;
    fileSizeFromArray(input: HTMLInputElement, file: File): boolean;
    maxSize: (input: HTMLInputElement) => number;
    duplicated(fileName: string, attachmentList: IAttachmentData[]): boolean;
}
export declare const AttachmentValidate: Validate;
export {};
