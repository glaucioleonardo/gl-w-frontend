import { Subject } from 'rxjs';
import { IArrayMatrixToExcel, TExcelFileName, IExcelJsonToFileProps } from './services-export-excel.interface';
declare class Core {
    excelFileToJson(file: File, sheet?: number): Promise<object>;
    jsonToFile(userData: any[], sheetName: string, fileName: string, properties: IExcelJsonToFileProps): Promise<File>;
}
export declare const ExcelConversor: Core;
declare class Export {
    status$: Subject<string>;
    private static saveFile;
    private static saveFileFromMultiple;
    exportDatabase(userData: any[], sheetName: string, fileName: string): Promise<string>;
    exportMultipleDatabase(data: IArrayMatrixToExcel[], fileName?: TExcelFileName): Promise<string>;
    private exportExcel;
    private clearSubject;
}
export declare const ExportExcel: Export;
export {};
