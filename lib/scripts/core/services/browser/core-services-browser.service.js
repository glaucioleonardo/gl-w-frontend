"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var screenfull = require("screenfull");
/**
 * Ffullscreen
 */
exports.fullscreenListener = function (menuButton, alt, src, showLog) {
    if (showLog === void 0) { showLog = false; }
    if (screenfull.isEnabled) {
        // @ts-ignore
        screenfull.on('change', function () {
            // @ts-ignore
            if (screenfull.isFullscreen) {
                menuButton.src = src.exit;
                menuButton.alt = alt.exit;
            }
            else {
                menuButton.src = src.enter;
                menuButton.alt = alt.enter;
            }
            if (showLog) {
                // @ts-ignore
                var label = screenfull.isFullscreen ? 'enabled' : 'disabled';
                console.log("Fullscreen " + label);
            }
        });
    }
    else {
        console.log('This browser does not support fullscreen api');
    }
};
exports.disableFullscreenListener = function () {
    // @ts-ignore
    screenfull.off('change', function () {
        console.log('Fullscreen listener has been disabled');
    });
};
exports.toggleFullScreen = function (menuButton, alt, src, showLog) {
    if (showLog === void 0) { showLog = false; }
    return new Promise(function (resolve, reject) {
        if (screenfull.isEnabled) {
            if (screenfull.isFullscreen) {
                screenfull.exit().then(function () {
                    menuButton.src = src.enter;
                    menuButton.alt = alt.enter;
                }).catch(function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            else {
                screenfull.request().then(function () {
                    menuButton.src = src.exit;
                    menuButton.alt = alt.exit;
                }).catch(function (error) {
                    console.log(error);
                    reject(error);
                });
            }
            if (showLog) {
                // @ts-ignore
                var label = screenfull.isFullscreen ? 'enabled' : 'disabled';
                console.log("Fullscreen " + label);
            }
            resolve({ src: menuButton.src, alt: menuButton.alt });
        }
        else {
            resolve({ src: null, alt: null });
        }
    });
};
exports.hasFullscreen = function () {
    return screenfull.isEnabled;
};
/**
 * Version
 */
exports.isIE = function () {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    return msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./);
};
exports.isBeforeIE11 = function () {
    return navigator.appVersion.indexOf('MSIE 10') !== -1;
};
//# sourceMappingURL=core-services-browser.service.js.map