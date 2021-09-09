"use strict";
exports.__esModule = true;
exports.BrowserViewPort = exports.BrowserVersion = exports.BrowserFullScreen = void 0;
var screenfull = require("screenfull");
var FullScreen = (function () {
    function FullScreen() {
    }
    FullScreen.prototype.listener = function (menuButton, alt, src, showLog) {
        if (showLog === void 0) { showLog = false; }
        if (screenfull.isEnabled) {
            screenfull.on('change', function () {
                if (screenfull.isFullscreen) {
                    menuButton.src = src.exit;
                    menuButton.alt = alt.exit;
                }
                else {
                    menuButton.src = src.enter;
                    menuButton.alt = alt.enter;
                }
                if (showLog) {
                    var label = screenfull.isFullscreen ? 'enabled' : 'disabled';
                    console.log("Fullscreen " + label);
                }
            });
        }
        else {
            console.log('This browser does not support fullscreen api');
        }
    };
    FullScreen.prototype.disableListener = function () {
        screenfull.off('change', function () {
            console.log('Fullscreen listener has been disabled');
        });
    };
    FullScreen.prototype.toggle = function (menuButton, alt, src, showLog) {
        if (showLog === void 0) { showLog = false; }
        return new Promise(function (resolve, reject) {
            if (screenfull.isEnabled) {
                if (screenfull.isFullscreen) {
                    screenfull.exit().then(function () {
                        menuButton.src = src.enter;
                        menuButton.alt = alt.enter;
                    })["catch"](function (error) {
                        console.log(error);
                        reject(error);
                    });
                }
                else {
                    screenfull.request().then(function () {
                        menuButton.src = src.exit;
                        menuButton.alt = alt.exit;
                    })["catch"](function (error) {
                        console.log(error);
                        reject(error);
                    });
                }
                if (showLog) {
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
    FullScreen.prototype.available = function () {
        return screenfull.isEnabled;
    };
    return FullScreen;
}());
exports.BrowserFullScreen = new FullScreen();
var Version = (function () {
    function Version() {
    }
    Version.prototype.isIE = function () {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        return msie > 0 || !!navigator.userAgent.match(/Trident.*rv:11\./);
    };
    Version.prototype.isBeforeIE11 = function () {
        return navigator.appVersion.indexOf('MSIE 10') !== -1;
    };
    return Version;
}());
exports.BrowserVersion = new Version();
var ViewPort = (function () {
    function ViewPort() {
    }
    ViewPort.prototype.setFullHeight = function () {
        var vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + "px");
    };
    ViewPort.prototype.setFullHeightListener = function () {
        var _this = this;
        this.setFullHeight();
        window.addEventListener('resize', function () {
            _this.setFullHeight();
        });
        window.addEventListener('orientationchange', function () {
            _this.setFullHeight();
        });
    };
    ViewPort.prototype.setFullWidth = function () {
        var vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', vw + "px");
    };
    ViewPort.prototype.setFullWidthListener = function () {
        var _this = this;
        this.setFullWidth();
        window.addEventListener('resize', function () {
            _this.setFullWidth();
        });
        window.addEventListener('orientationchange', function () {
            _this.setFullWidth();
        });
    };
    return ViewPort;
}());
exports.BrowserViewPort = new ViewPort();
//# sourceMappingURL=core-services-browser.service.js.map