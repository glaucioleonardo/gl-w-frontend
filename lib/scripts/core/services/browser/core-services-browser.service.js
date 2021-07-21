import * as screenfull from 'screenfull';
class FullScreen {
    listener(menuButton, alt, src, showLog = false) {
        if (screenfull.isEnabled) {
            screenfull.on('change', () => {
                if (screenfull.isFullscreen) {
                    menuButton.src = src.exit;
                    menuButton.alt = alt.exit;
                }
                else {
                    menuButton.src = src.enter;
                    menuButton.alt = alt.enter;
                }
                if (showLog) {
                    const label = screenfull.isFullscreen ? 'enabled' : 'disabled';
                    console.log(`Fullscreen ${label}`);
                }
            });
        }
        else {
            console.log('This browser does not support fullscreen api');
        }
    }
    disableListener() {
        screenfull.off('change', () => {
            console.log('Fullscreen listener has been disabled');
        });
    }
    toggle(menuButton, alt, src, showLog = false) {
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
                }
                else {
                    screenfull.request().then(() => {
                        menuButton.src = src.exit;
                        menuButton.alt = alt.exit;
                    }).catch(error => {
                        console.log(error);
                        reject(error);
                    });
                }
                if (showLog) {
                    const label = screenfull.isFullscreen ? 'enabled' : 'disabled';
                    console.log(`Fullscreen ${label}`);
                }
                resolve({ src: menuButton.src, alt: menuButton.alt });
            }
            else {
                resolve({ src: null, alt: null });
            }
        });
    }
    available() {
        return screenfull.isEnabled;
    }
}
export const BrowserFullScreen = new FullScreen();
class Version {
    isIE() {
        const ua = window.navigator.userAgent;
        const msie = ua.indexOf('MSIE ');
        return msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./);
    }
    isBeforeIE11() {
        return navigator.appVersion.indexOf('MSIE 10') !== -1;
    }
}
export const BrowserVersion = new Version();
class ViewPort {
    setFullHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setFullHeightListener() {
        this.setFullHeight();
        window.addEventListener('resize', () => {
            this.setFullHeight();
        });
        window.addEventListener('orientationchange', () => {
            this.setFullHeight();
        });
    }
    setFullWidth() {
        const vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }
    setFullWidthListener() {
        this.setFullWidth();
        window.addEventListener('resize', () => {
            this.setFullWidth();
        });
        window.addEventListener('orientationchange', () => {
            this.setFullWidth();
        });
    }
}
export const BrowserViewPort = new ViewPort();
//# sourceMappingURL=core-services-browser.service.js.map