var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Subject } from 'rxjs';
import * as Excel from 'xlsx';
import { DateGet } from '../../../core/services/date/core-services-date.service';
import { DataConversor } from '../../../core/services/data/core-services-data.service';
class Core {
    excelFileToJson(file, sheet = 0) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const fileArray = yield file.arrayBuffer();
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(fileArray);
                const workbook = Excel.read(data, {
                    type: 'array',
                    sheets: sheet
                });
                const workbookName = workbook.SheetNames[sheet];
                const json = Excel.utils.sheet_to_json(workbook.Sheets[workbookName]);
                resolve(json);
            };
            reader.readAsArrayBuffer(file);
        }));
    }
    jsonToFile(userData, sheetName, fileName, properties) {
        return new Promise(resolve => {
            const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
            const _fileName = fileName == null ? `Export ${currentDate}` : `${fileName}`;
            const fileNameWidthDate = `${_fileName} ${currentDate}.xlsx`;
            const ws = Excel.utils.json_to_sheet(userData);
            const wb = Excel.utils.book_new();
            Excel.utils.book_append_sheet(wb, ws, 'Base');
            const file = Excel.write(wb, {
                Props: {
                    Title: properties.Title,
                    Author: properties.Author,
                    Company: properties.Company,
                    Category: properties.Category
                },
                bookType: 'xlsx',
                type: 'binary'
            });
            const type = 'application/octet-stream';
            const content = new Blob([DataConversor.binaryStringToArrayBuffer(file)], { type });
            const excelFile = new File([content], fileNameWidthDate, {
                lastModified: new Date().getMilliseconds(),
                type
            });
            resolve(excelFile);
        });
    }
}
export const ExcelConversor = new Core();
class Export {
    constructor() {
        this.status$ = new Subject();
    }
    exportDatabase(userData, sheetName, fileName) {
        const single = { userData, fileName, sheetName };
        const multiple = {
            data: [],
            fileName: ''
        };
        return this.exportExcel('Single', single, multiple);
    }
    exportMultipleDatabase(data, fileName = null) {
        const single = {
            userData: [],
            fileName: '',
            sheetName: ''
        };
        const multiple = { data, fileName };
        return this.exportExcel('Multiple', single, multiple);
    }
    static saveFile(content, sheetName, _fileName = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
            const fileName = _fileName == null ? `Export ${currentDate}` : `${_fileName}`;
            const fileNameWidthDate = `${fileName} ${currentDate}.xlsx`;
            const ws = Excel.utils.json_to_sheet(content);
            const wb = Excel.utils.book_new();
            Excel.utils.book_append_sheet(wb, ws, sheetName);
            yield Excel.writeFile(wb, fileNameWidthDate, { cellStyles: true });
            ExportExcel.clearSubject();
            return { code: 200, message: 'File saved successfully' };
        });
    }
    static saveFileFromMultiple(data, fileName = null) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
            const currentFileName = fileName == null ? `Export ${currentDate}` : `${fileName}`;
            const fileNameWidthDate = `${currentFileName} ${currentDate}.xlsx`;
            const wb = Excel.utils.book_new();
            for (const sheet of data) {
                const ws = Excel.utils.json_to_sheet(sheet.content);
                Excel.utils.book_append_sheet(wb, ws, sheet.sheetName);
            }
            yield Excel.writeFile(wb, fileNameWidthDate, { cellStyles: true });
            ExportExcel.clearSubject();
            return { code: 200, message: 'File saved successfully' };
        });
    }
    exportExcel(type, singleData, multipleData) {
        return __awaiter(this, void 0, void 0, function* () {
            this.status$.next('Creating Excel workbook...');
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let result;
                if (type === 'Single') {
                    result = yield Export.saveFile(singleData.userData, singleData.sheetName, singleData.fileName);
                }
                else {
                    result = yield Export.saveFileFromMultiple(multipleData.data, multipleData.fileName);
                }
                this.status$.next(result.message);
                if (result.code === 200) {
                    resolve(result.message);
                }
                else {
                    throw new Error(result.message);
                }
            }));
        });
    }
    clearSubject() {
        this.status$.observers.map(x => x.complete());
    }
}
export const ExportExcel = new Export();
//# sourceMappingURL=services-export-excel.service.js.map