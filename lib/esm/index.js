/* tslint:disable:variable-name */
import { validateFile, validateFileSize, textFileToUrlImage, parseAcceptFiles } from './scripts/core/services/attachment/core-services-attachment.service';
import { removeArrayDuplicateLegacy, sortByKey } from './scripts/core/services/array/core-services-array.service';
import { isBeforeIE11, isIE, disableFullscreenListener, fullscreenListener, toggleFullScreen, hasFullscreen } from './scripts/core/services/browser/core-services-browser.service';
import { initialize, loadData, dataByValue, disableInput } from './scripts/core/services/combobox/core-services-combobox.service';
import { removeChildElements } from './scripts/core/services/elements/core-services-elements.service';
// region Array
var Array = { removeArrayDuplicateLegacy: removeArrayDuplicateLegacy, sortByKey: sortByKey };
var ArraySort = { sortByKey: sortByKey };
var ArrayRemove = { removeArrayDuplicateLegacy: removeArrayDuplicateLegacy };
// endregion
// region Attachment
var Attachment = { validateFile: validateFile, validateFileSize: validateFileSize, textFileToUrlImage: textFileToUrlImage, parseAcceptFiles: parseAcceptFiles };
var AttachmentConvert = { textFileToUrlImage: textFileToUrlImage };
var AttachmentParse = { parseAcceptFiles: parseAcceptFiles };
// endregion
// region Browser
var Browser = { isIE: isIE, isBeforeIE11: isBeforeIE11, disableFullscreenListener: disableFullscreenListener, fullscreenListener: fullscreenListener, toggleFullScreen: toggleFullScreen, hasFullscreen: hasFullscreen };
var BrowserVersion = { isIE: isIE, isBeforeIE11: isBeforeIE11 };
var BrowserFullscreen = { disableFullscreenListener: disableFullscreenListener, fullscreenListener: fullscreenListener, toggleFullScreen: toggleFullScreen, hasFullscreen: hasFullscreen };
// endregion
// region ComboBox
var ComboBox = { initialize: initialize, loadData: loadData, dataByValue: dataByValue, disableInput: disableInput };
var ComboBoxCore = { initialize: initialize, loadData: loadData };
var ComboBoxData = { dataByValue: dataByValue };
var ComboBoxDom = { disableInput: disableInput };
// endregion
// region Elements
var Elements = { removeChildElements: removeChildElements };
// endregion
export { Array, ArraySort, ArrayRemove, Attachment, AttachmentConvert, AttachmentParse, Browser, BrowserVersion, BrowserFullscreen, ComboBox, ComboBoxCore, ComboBoxData, ComboBoxDom, Elements };
//# sourceMappingURL=index.js.map