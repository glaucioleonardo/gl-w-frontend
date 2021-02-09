import { Subject } from 'rxjs';
import * as Excel from 'xlsx';
import { DateGet } from '../../../core/services/date/core-services-date.service';

import { IExcelFileName, IExcelResult } from './services-export-excel.interface';

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
        const json = Excel.utils.sheet_to_json(workbook.Sheets[workbookName], {
          blankrows: false,
          header: 'A'
        });

        resolve(json);
      };

      reader.readAsArrayBuffer(file);
    });
  }
}
export const ExcelCore = new Core();

class Export {
  status$: Subject<string> = new Subject();

  private static async saveFile(content: any[], sheetName: string, _fileName: IExcelFileName = null): Promise<IExcelResult> {
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

  /**
   * Export simple array data to excel
   * @param userData The format could be simple array, 2D array or array or object.
   * @param sheetName Inform the sheet name.
   * @param fileName (optional)
   * @param firstSheet (optional)
   */
  exportDatabase(userData: any[], sheetName: string, fileName: string, firstSheet: boolean = true): Promise<string> {
    this.status$.next('Criando planilha do Excel...');

    return new Promise(async (resolve) => {
      const result = await Export.saveFile(userData, sheetName, fileName);
      this.status$.next(result.message);

      if (result.code === 200) { resolve(result.message); }
      else { throw new Error(result.message); }
    });
  }

  private clearSubject() {
    this.status$.observers.map(x => x.complete());
  }
}
// tslint:disable-next-line:variable-name
export const ExportExcel = new Export();
