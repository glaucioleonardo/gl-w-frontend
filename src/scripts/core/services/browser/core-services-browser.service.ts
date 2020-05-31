import * as screenfull from 'screenfull';

import { IFullScreenAlt, IFullScreenSrc, IMenuButton } from '../menu/core-services-menu.interfaces';
import { IFullscreenResult } from './core-services-browser.interfaces';

/**
 * Ffullscreen
 */
export const fullscreenListener = (menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog: boolean = false): void => {
  if (screenfull.isEnabled) {
    // @ts-ignore
    screenfull.on('change', () => {
      // @ts-ignore
      if (screenfull.isFullscreen) {
        menuButton.src = src.exit;
        menuButton.alt = alt.exit;
      } else {
        menuButton.src = src.enter;
        menuButton.alt = alt.enter;
      }

      if (showLog) {
        // @ts-ignore
        const label: string = screenfull.isFullscreen ? 'enabled' : 'disabled';
        console.log(`Fullscreen ${label}`);
      }
    });
  } else {
    console.log('This browser does not support fullscreen api');
  }
}
export const disableFullscreenListener = (): void => {
  // @ts-ignore
  screenfull.off('change', () => {
    console.log('Fullscreen listener has been disabled');
  })
}
export const toggleFullScreen = (menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog: boolean = false): PromiseLike<IFullscreenResult> => {
  return new Promise((resolve, reject) => {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit().then(() => {
          menuButton.src = src.enter;
          menuButton.alt = alt.enter;
        }).catch(error => {
          console.log(error);
          reject(error);
        });
      } else {
        screenfull.request().then(() => {
          menuButton.src = src.exit;
          menuButton.alt = alt.exit;
        }).catch(error => {
          console.log(error);
          reject(error);
        });
      }

      if (showLog) {
        // @ts-ignore
        const label: string = screenfull.isFullscreen ? 'enabled' : 'disabled';
        console.log(`Fullscreen ${label}`);
      }

      resolve({ src: menuButton.src, alt: menuButton.alt });
    } else {
      resolve({ src: null, alt: null });
    }
  });
}
export const hasFullscreen = (): boolean => {
  return screenfull.isEnabled;
}

/**
 * Version
 */
export const isIE = (): boolean => {
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf('MSIE ');

  return msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./);
}
export const isBeforeIE11 = (): boolean => {
  return navigator.appVersion.indexOf('MSIE 10') !== -1;
}
