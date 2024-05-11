import { Subject } from 'rxjs';
import { DateGet } from '../../../../core/services/date/src';

import { IArrayMatrixToExcel, TExcelFileName, IExcelResult, TExcelExport, IExcelExportSingleArray, IExcelExportMultipleArray, IExcelJsonToFileProps } from './services-export-excel.interface';
import { DataConverter } from '../../../../core/services/data/src';
import { read, writeFile, write, utils } from 'xlsx'

class Core {
  /**
   * Read the excel file and export it to json
   * @param file File uploaded by user.
   * @param sheet Sheet index: Default 0.
   */
  excelFileToJson(file: File, sheet: number = 0): Promise<object> {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    return  new Promise(async resolve => {
      const fileArray = await file.arrayBuffer();

      const reader = new FileReader();
      reader.onload = () => {
        const data = new Uint8Array(fileArray);
        const workbook = read(data, {
          type: 'array',
          sheets: sheet
        });

        const workbookName = workbook.SheetNames[sheet];
        const json = utils.sheet_to_json(workbook.Sheets[workbookName]);

        resolve(json);
      };

      reader.readAsArrayBuffer(file);
    });
  }
  jsonToFile(userData: any[], sheetName: string, fileName: string, properties: IExcelJsonToFileProps): Promise<File> {
    return new Promise(resolve => {
      const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
      const internalFileName = fileName == null ? `Export ${currentDate}` : `${fileName}`;
      const fileNameWidthDate = `${internalFileName} ${currentDate}.xlsx`;

      const ws = utils.json_to_sheet(userData);

      // Add to workbook
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, 'Base');

      // Generate a XLSX file
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const file = write(wb, {
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      const content = new Blob([DataConverter.binaryStringToArrayBuffer(file)], { type });

      const excelFile = new File([content], fileNameWidthDate, {
        lastModified: new Date().getMilliseconds(),
        type
      });

      resolve(excelFile);
    })
  }
}

export const ExcelConverter = new Core();

class Export {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
  status$: Subject<string> = new Subject();

  private static async saveFile(content: any[], sheetName: string, _fileName: TExcelFileName = null): Promise<IExcelResult> {
    const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
    const fileName = _fileName == null ? `Export ${currentDate}` : `${_fileName}`;
    const fileNameWidthDate = `${fileName} ${currentDate}.xlsx`;

    const ws = utils.json_to_sheet(content);

    // Add to workbook
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, sheetName);

    // Generate a XLSX file
    await writeFile(wb, fileNameWidthDate, { cellStyles: true });
    ExportExcel.clearSubject()
    return { code: 200, message: 'File saved successfully' };
  }
  private static async saveFileFromMultiple(data: IArrayMatrixToExcel[], fileName: TExcelFileName = null): Promise<IExcelResult> {
    const currentDate = DateGet.currentDateString('YYYYMMDD_HHmmss');
    const currentFileName = fileName == null ? `Export ${currentDate}` : `${fileName}`;
    const fileNameWidthDate = `${currentFileName} ${currentDate}.xlsx`;

    const wb: any = utils.book_new();

    for (const sheet of data) {
      const ws = utils.json_to_sheet(sheet.content);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      utils.book_append_sheet(wb, ws, sheet.sheetName);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await writeFile(wb, fileNameWidthDate, { cellStyles: true });
    ExportExcel.clearSubject()

    return { code: 200, message: 'File saved successfully' };
  }

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

  private async exportExcel(type: TExcelExport, singleData: IExcelExportSingleArray, multipleData: IExcelExportMultipleArray): Promise<string> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
    this.status$.next('Creating Excel workbook...');

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    return new Promise(async (resolve) => {
      let result: IExcelResult;

      if (type === 'Single') {
        result = await Export.saveFile(singleData.userData, singleData.sheetName, singleData.fileName);
      } else {
        result = await Export.saveFileFromMultiple(multipleData.data, multipleData.fileName);
      }

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
      this.status$.next(result.message);

      if (result.code === 200) {
        resolve(result.message);
      } else {
        throw new Error(result.message);
      }
    });
  }

  private clearSubject() {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return
    this.status$.observers.map(x => x.complete());
  }
}

export const ExportExcel = new Export();
