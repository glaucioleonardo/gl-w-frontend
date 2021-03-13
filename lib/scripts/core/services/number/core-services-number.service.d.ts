import { Decimal } from 'decimal.js';
declare class Core {
    numberToDecimal(value: number, errorValue?: Decimal): Decimal;
}
export declare const NumberParse: Core;
export {};
