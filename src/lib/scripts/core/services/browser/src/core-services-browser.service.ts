import * as screenfull from 'screenfull';

import { IFullScreenAlt, IFullScreenSrc, IMenuButton } from '../../menu/src/core-services-menu.interfaces';
import { IFullscreenResult } from './core-services-browser.interface';

class FullScreen {
  listener(menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog: boolean = false): void {
    if (screenfull.isEnabled) {
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
  disableListener(): void {
    // @ts-ignore
    screenfull.off('change', () => {
      console.log('Fullscreen listener has been disabled');
    });
  }
  toggle(menuButton: IMenuButton, alt: IFullScreenAlt, src: IFullScreenSrc, showLog: boolean = false): PromiseLike<IFullscreenResult> {
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
          const label: string = screenfull.isFullscreen ? 'enabled' : 'disabled';
          console.log(`Fullscreen ${label}`);
        }

        resolve({ src: menuButton.src, alt: menuButton.alt });
      } else {
        resolve({ src: null, alt: null });
      }
    });
  }
  available(): boolean {
    return screenfull.isEnabled;
  }
}
// tslint:disable-next-line:variable-name
export const BrowserFullScreen = new FullScreen();

class Version {
  isIE(): boolean {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf('MSIE ');

    return msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./);
  }
  isBeforeIE11(): boolean {
    return navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
}
// tslint:disable-next-line:variable-name
export const BrowserVersion = new Version();

class ViewPort {
  setFullHeight(): void {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setFullHeightListener(): void {
    this.setFullHeight();
    window.addEventListener('resize', () => {
      this.setFullHeight();
    });

    window.addEventListener('orientationchange', () => {
      this.setFullHeight();
    });
  }

  setFullWidth(): void {
    // First we get the viewport width and we multiple it by 1% to get a value for a vw unit
    const vw = window.innerWidth * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
  setFullWidthListener(): void {
    this.setFullWidth();
    window.addEventListener('resize', () => {
      this.setFullWidth();
    });

    window.addEventListener('orientationchange', () => {
      this.setFullWidth();
    });
  }
}
// tslint:disable-next-line:variable-name
export const BrowserViewPort = new ViewPort();
