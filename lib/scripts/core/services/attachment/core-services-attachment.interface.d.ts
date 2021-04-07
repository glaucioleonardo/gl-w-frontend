export interface IAttachmentData {
    id: number;
    new: boolean;
    remove: boolean;
    name: string;
    file?: File;
    url?: string;
    icon?: string;
}
export interface IAttachmentFileInfo {
    name: string;
    content: string | Blob | ArrayBuffer;
}
