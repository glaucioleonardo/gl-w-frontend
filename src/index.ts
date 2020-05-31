/* tslint:disable:variable-name */
import { validateFile, validateFileSize, textFileToUrlImage, parseAcceptFiles } from './scripts/core/services/attachment/core-services-attachment.service';
import { removeArrayDuplicateLegacy, sortByKey } from './scripts/core/services/array/core-services-array.service';
import { isBeforeIE11, isIE, disableFullscreenListener, fullscreenListener, toggleFullScreen, hasFullscreen } from './scripts/core/services/browser/core-services-browser.service';
import { initialize, loadData, dataByValue, disableInput } from './scripts/core/services/combobox/core-services-combobox.service';
import { removeChildElements } from './scripts/core/services/elements/core-services-elements.service';


// region Array
const Array = { removeArrayDuplicateLegacy, sortByKey };
const ArraySort = { sortByKey };
const ArrayRemove = { removeArrayDuplicateLegacy };
// endregion

// region Attachment
const Attachment = { validateFile, validateFileSize, textFileToUrlImage, parseAcceptFiles };
const AttachmentConvert = { textFileToUrlImage };
const AttachmentParse = { parseAcceptFiles };
// endregion

// region Browser
const Browser = { isIE, isBeforeIE11, disableFullscreenListener, fullscreenListener, toggleFullScreen, hasFullscreen };
const BrowserVersion = { isIE, isBeforeIE11 };
const BrowserFullscreen = { disableFullscreenListener, fullscreenListener, toggleFullScreen, hasFullscreen };
// endregion

// region ComboBox
const ComboBox = { initialize, loadData, dataByValue, disableInput };
const ComboBoxCore = { initialize, loadData };
const ComboBoxData = { dataByValue };
const ComboBoxDom = { disableInput };
// endregion

// region Elements
const Elements = { removeChildElements };
// endregion

export {
  Array, ArraySort, ArrayRemove,
  Attachment, AttachmentConvert, AttachmentParse,
  Browser, BrowserVersion, BrowserFullscreen,
  ComboBox, ComboBoxCore, ComboBoxData, ComboBoxDom,
  Elements
};
