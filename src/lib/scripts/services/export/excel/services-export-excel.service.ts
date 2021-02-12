import { Subject } from 'rxjs';
import * as Excel from 'xlsx';
import { DateGet } from '../../../core/services/date/core-services-date.service';

import { IArrayMatrixToExcel, TExcelFileName, IExcelResult, TExcelExport, IExcelExportSingleArray, IExcelExportMultipleArray, IExcelJsonToFileProps } from './services-export-excel.interface';
import { WorkBook } from 'xlsx';
import { DataConversor } from '../../../core/services/data/core-services-data.service';

class Core {
  /**
   * Read the excel file and export it to json
   * @param file File uploaded by user.
   * @param sheet Sheet index: Default 0.
   */
  excelFileToJson(file: File, sheet: number = 0): Promise<object> {
    return  new Promise(async resolve => {
      const fileArray = await file.arrayBuffer();

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
    });
  }
  jsonToFile(userData: any[], sheetName: string, fileName: string, properties: IExcelJsonToFileProps): Promise<File> {
    return new Promise(resolve => {
      const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
      const _fileName = fileName == null ? `Export ${currentDate}` : `${fileName}`;
      const fileNameWidthDate = `${_fileName} ${currentDate}.xlsx`;

      const ws = Excel.utils.json_to_sheet(userData);

      // Add to workbook
      const wb = Excel.utils.book_new();
      Excel.utils.book_append_sheet(wb, ws, 'Base');

      // Generate a XLSX file
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
    })
  }
}
export const ExcelConversor = new Core();

class Export {
  status$: Subject<string> = new Subject();

  /**
   * Export simple array data to excel
   * @param userData The format could be simple array, 2D array or array or object.
   * @param sheetName Inform the sheet name.
   * @param fileName (optional)
   */
  exportDatabase(userData: any[], sheetName: string, fileName: string): Promise<string> {
    const single: IExcelExportSingleArray = { userData, fileName, sheetName }
    const multiple: IExcelExportMultipleArray = {
      data: [],
      fileName: ''
    };

    return this.exportExcel('Single', single, multiple);
  }
  /**
   * Export multi dimensional array data to excel
   * @param data The format could be simple array, 2D array or array or object.
   * @param fileName (optional)
   */
  exportMultipleDatabase(data: IArrayMatrixToExcel[], fileName: TExcelFileName = null): Promise<string> {
    const single: IExcelExportSingleArray = {
      userData: [],
      fileName: '',
      sheetName: ''
    }
    const multiple: IExcelExportMultipleArray = { data, fileName };
    return this.exportExcel('Multiple', single, multiple);
  }

  private static async saveFile(content: any[], sheetName: string, _fileName: TExcelFileName = null): Promise<IExcelResult> {
    const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
    const fileName = _fileName == null ? `Export ${currentDate}` : `${_fileName}`;
    const fileNameWidthDate = `${fileName} ${currentDate}.xlsx`;

    const ws = Excel.utils.json_to_sheet(content);

    // Add to workbook
    const wb = Excel.utils.book_new();
    Excel.utils.book_append_sheet(wb, ws, sheetName);

    // Generate a XLSX file
    await Excel.writeFile(wb, fileNameWidthDate, { cellStyles: true });
    ExportExcel.clearSubject()
    return { code: 200, message: 'File saved successfully' };
  }
  private static async saveFileFromMultiple(data: IArrayMatrixToExcel[], fileName: TExcelFileName = null): Promise<IExcelResult> {
    const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
    const currentFileName = fileName == null ? `Export ${currentDate}` : `${fileName}`;
    const fileNameWidthDate = `${currentFileName} ${currentDate}.xlsx`;

    const wb: WorkBook = Excel.utils.book_new();

    for (const sheet of data) {
      const ws = Excel.utils.json_to_sheet(sheet.content);
      Excel.utils.book_append_sheet(wb, ws, sheet.sheetName);
    }

    await Excel.writeFile(wb, fileNameWidthDate, { cellStyles: true });
    ExportExcel.clearSubject()

    return { code: 200, message: 'File saved successfully' };
  }
  private async exportExcel(type: TExcelExport, singleData: IExcelExportSingleArray, multipleData: IExcelExportMultipleArray): Promise<string> {
    this.status$.next('Creating Excel workbook...');

    return new Promise(async (resolve) => {
      let result: IExcelResult;

      if (type === 'Single') {
        result = await Export.saveFile(singleData.userData, singleData.sheetName, singleData.fileName);
      } else {
        result = await Export.saveFileFromMultiple(multipleData.data, multipleData.fileName);
      }

      this.status$.next(result.message);

      if (result.code === 200) {
        resolve(result.message);
      } else {
        throw new Error(result.message);
      }
    });
  }

  private clearSubject() {
    this.status$.observers.map(x => x.complete());
  }
}
// tslint:disable-next-line:variable-name
export const ExportExcel = new Export();
