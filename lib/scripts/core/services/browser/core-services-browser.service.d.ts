import { IFullScreenAlt, IFullScreenSrc, IMenuButton } from '../menu/core-services-menu.interfaces';
import { IFullscreenResult } from './core-services-browser.interface';
declare class FullScreen {
    listener(menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog?: boolean): void;
    disableListener(): void;
    toggle(menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog?: boolean): PromiseLike<IFullscreenResult>;
    available(): boolean;
}
export declare const BrowserFullScreen: FullScreen;
declare class Version {
    isIE(): boolean;
    isBeforeIE11(): boolean;
}
export declare const BrowserVersion: Version;
declare class ViewPort {
    setFullHeight(): void;
    setFullHeightListener(): void;
    setFullWidth(): void;
    setFullWidthListener(): void;
}
export declare const BrowserViewPort: ViewPort;
export {};
