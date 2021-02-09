import { Subject } from 'rxjs';
declare class Core {
    excelFileToJson(file: File, sheet?: number): Promise<object>;
}
export declare const ExcelCore: Core;
declare class Export {
    status$: Subject<string>;
    private static saveFile;
    exportDatabase(userData: any[], sheetName: string, fileName: string, firstSheet?: boolean): Promise<string>;
    private clearSubject;
}
export declare const ExportExcel: Export;
export {};
