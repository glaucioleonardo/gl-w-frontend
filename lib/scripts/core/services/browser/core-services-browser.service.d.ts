import { IFullScreenAlt, IFullScreenSrc, IMenuButton } from '../menu/core-services-menu.interfaces';
import { IFullscreenResult } from './core-services-browser.interfaces';
/**
 * Ffullscreen
 */
export declare const fullscreenListener: (menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog?: boolean) => void;
export declare const disableFullscreenListener: () => void;
export declare const toggleFullScreen: (menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog?: boolean) => PromiseLike<IFullscreenResult>;
export declare const hasFullscreen: () => boolean;
/**
 * Version
 */
export declare const isIE: () => boolean;
export declare const isBeforeIE11: () => boolean;
