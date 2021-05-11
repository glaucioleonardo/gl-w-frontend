declare class Remove {
    duplicateLegacy(array: any[]): any[];
    duplicate(array: any[], sort?: boolean, asc?: boolean): Promise<any[]>;
    duplicatedByKey(data: any[], identification: any, sortIdentification?: string, asc?: boolean): Promise<any[]>;
    notDuplicated(array: any[], asc?: boolean): Promise<any[]>;
    notDuplicatedByKey(data: any[], identification: any, sortIdentification?: string, asc?: boolean): Promise<any[]>;
}
export declare const ArrayRemove: Remove;
declare class Sort {
    get(array: object[], asc: boolean): Promise<any[]>;
    byKey(array: any[], key: string, asc: boolean): Promise<any[]>;
}
export declare const ArraySort: Sort;
export {};
