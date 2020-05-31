declare const Array: {
    removeArrayDuplicateLegacy: (array: any[]) => any[];
    sortByKey: (array: any[], key: string, asc: boolean) => PromiseLike<any[]>;
};
declare const ArraySort: {
    sortByKey: (array: any[], key: string, asc: boolean) => PromiseLike<any[]>;
};
declare const ArrayRemove: {
    removeArrayDuplicateLegacy: (array: any[]) => any[];
};
declare const Attachment: {
    validateFile: (input: HTMLInputElement, accepts: string[]) => boolean;
    validateFileSize: (input: HTMLInputElement) => boolean;
    textFileToUrlImage: (file: File) => PromiseLike<string>;
    parseAcceptFiles: (accepts: string) => string[];
};
declare const AttachmentConvert: {
    textFileToUrlImage: (file: File) => PromiseLike<string>;
};
declare const AttachmentParse: {
    parseAcceptFiles: (accepts: string) => string[];
};
declare const Browser: {
    isIE: () => boolean;
    isBeforeIE11: () => boolean;
    disableFullscreenListener: () => void;
    fullscreenListener: (menuButton: import("./scripts/core/services/menu/core-services-menu.interfaces").IMenuButton, alt: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenAlt, src: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenSrc, showLog?: boolean) => void;
    toggleFullScreen: (menuButton: import("./scripts/core/services/menu/core-services-menu.interfaces").IMenuButton, alt: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenAlt, src: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenSrc, showLog?: boolean) => PromiseLike<import("./scripts/core/services/browser/core-services-browser.interfaces").IFullscreenResult>;
    hasFullscreen: () => boolean;
};
declare const BrowserVersion: {
    isIE: () => boolean;
    isBeforeIE11: () => boolean;
};
declare const BrowserFullscreen: {
    disableFullscreenListener: () => void;
    fullscreenListener: (menuButton: import("./scripts/core/services/menu/core-services-menu.interfaces").IMenuButton, alt: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenAlt, src: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenSrc, showLog?: boolean) => void;
    toggleFullScreen: (menuButton: import("./scripts/core/services/menu/core-services-menu.interfaces").IMenuButton, alt: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenAlt, src: import("./scripts/core/services/menu/core-services-menu.interfaces").IFullScreenSrc, showLog?: boolean) => PromiseLike<import("./scripts/core/services/browser/core-services-browser.interfaces").IFullscreenResult>;
    hasFullscreen: () => boolean;
};
declare const ComboBox: {
    initialize: (combobox: HTMLSelectElement, callback: any, invalidCallback: any) => void;
    loadData: (combobox: HTMLSelectElement, data: import("./scripts/core/services/combobox/core-services-combobox.interface").IComboBoxData[], keepValue: boolean) => Promise<unknown>;
    dataByValue: (arrayData: import("./scripts/core/services/combobox/core-services-combobox.interface").IComboBoxData[], value: string) => string;
    disableInput: (combobox: HTMLSelectElement, disable: boolean) => void;
};
declare const ComboBoxCore: {
    initialize: (combobox: HTMLSelectElement, callback: any, invalidCallback: any) => void;
    loadData: (combobox: HTMLSelectElement, data: import("./scripts/core/services/combobox/core-services-combobox.interface").IComboBoxData[], keepValue: boolean) => Promise<unknown>;
};
declare const ComboBoxData: {
    dataByValue: (arrayData: import("./scripts/core/services/combobox/core-services-combobox.interface").IComboBoxData[], value: string) => string;
};
declare const ComboBoxDom: {
    disableInput: (combobox: HTMLSelectElement, disable: boolean) => void;
};
declare const Elements: {
    removeChildElements: (elementClassId: string | HTMLElement) => void;
};
export { Array, ArraySort, ArrayRemove, Attachment, AttachmentConvert, AttachmentParse, Browser, BrowserVersion, BrowserFullscreen, ComboBox, ComboBoxCore, ComboBoxData, ComboBoxDom, Elements };
