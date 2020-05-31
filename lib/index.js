"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:variable-name */
var core_services_attachment_service_1 = require("./scripts/core/services/attachment/core-services-attachment.service");
var core_services_array_service_1 = require("./scripts/core/services/array/core-services-array.service");
var core_services_browser_service_1 = require("./scripts/core/services/browser/core-services-browser.service");
var core_services_combobox_service_1 = require("./scripts/core/services/combobox/core-services-combobox.service");
var core_services_elements_service_1 = require("./scripts/core/services/elements/core-services-elements.service");
// region Array
var Array = { removeArrayDuplicateLegacy: core_services_array_service_1.removeArrayDuplicateLegacy, sortByKey: core_services_array_service_1.sortByKey };
exports.Array = Array;
var ArraySort = { sortByKey: core_services_array_service_1.sortByKey };
exports.ArraySort = ArraySort;
var ArrayRemove = { removeArrayDuplicateLegacy: core_services_array_service_1.removeArrayDuplicateLegacy };
exports.ArrayRemove = ArrayRemove;
// endregion
// region Attachment
var Attachment = { validateFile: core_services_attachment_service_1.validateFile, validateFileSize: core_services_attachment_service_1.validateFileSize, textFileToUrlImage: core_services_attachment_service_1.textFileToUrlImage, parseAcceptFiles: core_services_attachment_service_1.parseAcceptFiles };
exports.Attachment = Attachment;
var AttachmentConvert = { textFileToUrlImage: core_services_attachment_service_1.textFileToUrlImage };
exports.AttachmentConvert = AttachmentConvert;
var AttachmentParse = { parseAcceptFiles: core_services_attachment_service_1.parseAcceptFiles };
exports.AttachmentParse = AttachmentParse;
// endregion
// region Browser
var Browser = { isIE: core_services_browser_service_1.isIE, isBeforeIE11: core_services_browser_service_1.isBeforeIE11, disableFullscreenListener: core_services_browser_service_1.disableFullscreenListener, fullscreenListener: core_services_browser_service_1.fullscreenListener, toggleFullScreen: core_services_browser_service_1.toggleFullScreen, hasFullscreen: core_services_browser_service_1.hasFullscreen };
exports.Browser = Browser;
var BrowserVersion = { isIE: core_services_browser_service_1.isIE, isBeforeIE11: core_services_browser_service_1.isBeforeIE11 };
exports.BrowserVersion = BrowserVersion;
var BrowserFullscreen = { disableFullscreenListener: core_services_browser_service_1.disableFullscreenListener, fullscreenListener: core_services_browser_service_1.fullscreenListener, toggleFullScreen: core_services_browser_service_1.toggleFullScreen, hasFullscreen: core_services_browser_service_1.hasFullscreen };
exports.BrowserFullscreen = BrowserFullscreen;
// endregion
// region ComboBox
var ComboBox = { initialize: core_services_combobox_service_1.initialize, loadData: core_services_combobox_service_1.loadData, dataByValue: core_services_combobox_service_1.dataByValue, disableInput: core_services_combobox_service_1.disableInput };
exports.ComboBox = ComboBox;
var ComboBoxCore = { initialize: core_services_combobox_service_1.initialize, loadData: core_services_combobox_service_1.loadData };
exports.ComboBoxCore = ComboBoxCore;
var ComboBoxData = { dataByValue: core_services_combobox_service_1.dataByValue };
exports.ComboBoxData = ComboBoxData;
var ComboBoxDom = { disableInput: core_services_combobox_service_1.disableInput };
exports.ComboBoxDom = ComboBoxDom;
// endregion
// region Elements
var Elements = { removeChildElements: core_services_elements_service_1.removeChildElements };
exports.Elements = Elements;
//# sourceMappingURL=index.js.map