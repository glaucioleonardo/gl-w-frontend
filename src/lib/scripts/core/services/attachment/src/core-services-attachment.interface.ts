export interface IAttachmentData {
  id: number;
  new: boolean;
  remove: boolean;
  name: string;
  file?: File;
  url?: string;
  icon?: string;
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  type?: 'image' | 'video' | string;
}

export interface IAttachmentFileInfo {
  name: string;
  content: string | Blob | ArrayBuffer;
}
