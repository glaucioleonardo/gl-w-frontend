export type TExcelFileName = string | null;
export type TExcelExport = 'Single' | 'Multiple';

export interface IExcelResult {
  code: number;
  message: string;
}

export interface IExcelExportSingleArray {
  userData: any[];
  sheetName: string;
  fileName: string;
}

export interface IExcelExportMultipleArray {
  data: IArrayMatrixToExcel[];
  fileName?: TExcelFileName
}

export interface IExcelJsonToFileProps {
  Title: string;
  Author: string;
  Company: string;
  Category: string;
}



export interface IArrayMatrixToExcel {
  content: any[],
  sheetName: string
}
