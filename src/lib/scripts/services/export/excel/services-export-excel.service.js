"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
exports.__esModule = true;
exports.ExportExcel = exports.ExcelConversor = void 0;
var rxjs_1 = require("rxjs");
var core_services_date_service_1 = require("../../../core/services/date/core-services-date.service");
var core_services_data_service_1 = require("../../../core/services/data/core-services-data.service");
var Excel = require('xlsx/dist/xlsx.mini.min');
var Core = (function () {
    function Core() {
    }
    Core.prototype.excelFileToJson = function (file, sheet) {
        var _this = this;
        if (sheet === void 0) { sheet = 0; }
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var fileArray, reader;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, file.arrayBuffer()];
                    case 1:
                        fileArray = _a.sent();
                        reader = new FileReader();
                        reader.onload = function (e) {
                            var data = new Uint8Array(fileArray);
                            var workbook = Excel.read(data, {
                                type: 'array',
                                sheets: sheet
                            });
                            var workbookName = workbook.SheetNames[sheet];
                            var json = Excel.utils.sheet_to_json(workbook.Sheets[workbookName]);
                            resolve(json);
                        };
                        reader.readAsArrayBuffer(file);
                        return [2];
                }
            });
        }); });
    };
    Core.prototype.jsonToFile = function (userData, sheetName, fileName, properties) {
        return new Promise(function (resolve) {
            var currentDate = core_services_date_service_1.DateGet.currentDateString('YYYYMMDD_HHmmss');
            var _fileName = fileName == null ? "Export " + currentDate : "" + fileName;
            var fileNameWidthDate = _fileName + " " + currentDate + ".xlsx";
            var ws = Excel.utils.json_to_sheet(userData);
            var wb = Excel.utils.book_new();
            Excel.utils.book_append_sheet(wb, ws, 'Base');
            var file = Excel.write(wb, {
                Props: {
                    Title: properties.Title,
                    Author: properties.Author,
                    Company: properties.Company,
                    Category: properties.Category
                },
                bookType: 'xlsx',
                type: 'binary'
            });
            var type = 'application/octet-stream';
            var content = new Blob([core_services_data_service_1.DataConversor.binaryStringToArrayBuffer(file)], { type: type });
            var excelFile = new File([content], fileNameWidthDate, {
                lastModified: new Date().getMilliseconds(),
                type: type
            });
            resolve(excelFile);
        });
    };
    return Core;
}());
exports.ExcelConversor = new Core();
var Export = (function () {
    function Export() {
        this.status$ = new rxjs_1.Subject();
    }
    Export.saveFile = function (content, sheetName, _fileName) {
        if (_fileName === void 0) { _fileName = null; }
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, fileName, fileNameWidthDate, ws, wb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentDate = core_services_date_service_1.DateGet.currentDateString('YYYYMMDD_HHmmss');
                        fileName = _fileName == null ? "Export " + currentDate : "" + _fileName;
                        fileNameWidthDate = fileName + " " + currentDate + ".xlsx";
                        ws = Excel.utils.json_to_sheet(content);
                        wb = Excel.utils.book_new();
                        Excel.utils.book_append_sheet(wb, ws, sheetName);
                        return [4, Excel.writeFile(wb, fileNameWidthDate, { cellStyles: true })];
                    case 1:
                        _a.sent();
                        exports.ExportExcel.clearSubject();
                        return [2, { code: 200, message: 'File saved successfully' }];
                }
            });
        });
    };
    Export.saveFileFromMultiple = function (data, fileName) {
        if (fileName === void 0) { fileName = null; }
        return __awaiter(this, void 0, void 0, function () {
            var currentDate, currentFileName, fileNameWidthDate, wb, data_1, data_1_1, sheet, ws;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentDate = core_services_date_service_1.DateGet.currentDateString('YYYYMMDD_HHmmss');
                        currentFileName = fileName == null ? "Export " + currentDate : "" + fileName;
                        fileNameWidthDate = currentFileName + " " + currentDate + ".xlsx";
                        wb = Excel.utils.book_new();
                        try {
                            for (data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                                sheet = data_1_1.value;
                                ws = Excel.utils.json_to_sheet(sheet.content);
                                Excel.utils.book_append_sheet(wb, ws, sheet.sheetName);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (data_1_1 && !data_1_1.done && (_a = data_1["return"])) _a.call(data_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4, Excel.writeFile(wb, fileNameWidthDate, { cellStyles: true })];
                    case 1:
                        _b.sent();
                        exports.ExportExcel.clearSubject();
                        return [2, { code: 200, message: 'File saved successfully' }];
                }
            });
        });
    };
    Export.prototype.exportDatabase = function (userData, sheetName, fileName) {
        var single = { userData: userData, fileName: fileName, sheetName: sheetName };
        var multiple = {
            data: [],
            fileName: ''
        };
        return this.exportExcel('Single', single, multiple);
    };
    Export.prototype.exportMultipleDatabase = function (data, fileName) {
        if (fileName === void 0) { fileName = null; }
        var single = {
            userData: [],
            fileName: '',
            sheetName: ''
        };
        var multiple = { data: data, fileName: fileName };
        return this.exportExcel('Multiple', single, multiple);
    };
    Export.prototype.exportExcel = function (type, singleData, multipleData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.status$.next('Creating Excel workbook...');
                return [2, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(type === 'Single')) return [3, 2];
                                    return [4, Export.saveFile(singleData.userData, singleData.sheetName, singleData.fileName)];
                                case 1:
                                    result = _a.sent();
                                    return [3, 4];
                                case 2: return [4, Export.saveFileFromMultiple(multipleData.data, multipleData.fileName)];
                                case 3:
                                    result = _a.sent();
                                    _a.label = 4;
                                case 4:
                                    this.status$.next(result.message);
                                    if (result.code === 200) {
                                        resolve(result.message);
                                    }
                                    else {
                                        throw new Error(result.message);
                                    }
                                    return [2];
                            }
                        });
                    }); })];
            });
        });
    };
    Export.prototype.clearSubject = function () {
        this.status$.observers.map(function (x) { return x.complete(); });
    };
    return Export;
}());
exports.ExportExcel = new Export();
//# sourceMappingURL=services-export-excel.service.js.map