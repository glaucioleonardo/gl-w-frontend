import { IDate, IDateLocal, IDayMonthYear, IDaysOfMonth, IWeeksOfMonth } from './core-services-date.interface';
import { unitOfTime } from 'moment';
declare class Get {
    customDate(date: IDate, format?: string): Date;
    customDateString(date: IDate, format?: string, outputFormat?: string): string;
    customDateNoUTC(date: IDate, format?: string): Date;
    customDateNoUTCString(date: IDate, format?: string, outputFormat?: string): string;
    isoDate(date: IDate, format?: string): string;
    isoDateNoUTC(date: IDate, format?: string): string;
    currentDateString(outputFormat?: string): string;
    currentDate(outputFormat?: string): Date;
    currentDateNoUTC(): Date;
    currentDateNoUTCString(outputFormat?: string): string;
    dayMonthYear(date: IDate, format?: string, separator?: string): IDayMonthYear;
    dayMonthYearNoUCT(date: IDate, format?: string, separator?: string): IDayMonthYear;
    localDate(year: number, month: number, day: number, local?: IDateLocal): string;
    dateFromIso(date: IDate, format?: string): string;
    ganttDate(date: IDate): Date;
    isoDateCustom(date: IDate, dateFormat: string, outputFormat: string): string;
    isoDateWithoutTimeString(date: IDate): string;
    dateMilliseconds(date: IDate, dateFormat: string, outputFormat: string): number;
    dateToMillisecondsNoTime(date: IDate): number;
    millisecondsToDateNoUTC(date: IDate, format?: string): Date;
    millisecondsToDateString(date: IDate, outputFormat: string): string;
    daysToMilliseconds(days: number): number;
    durationInDays(start: number, end: number, countFirstDay: boolean): number;
    durationInDaysFromDate(start: Date, end: Date, dateFormat?: string, countFirstDay?: boolean): number;
    durationInMilliseconds(start: number, end: number): number;
    monthName(month: number, language?: string): string;
    weeksOfMonth(year: number, month: number): IWeeksOfMonth[];
    daysOfMonth(weeksRange: IWeeksOfMonth[]): IDaysOfMonth[][];
    weekOfYear(date: string, format: string): number;
}
export declare const DateGet: Get;
declare class Comparable {
    isDateBefore(startDate: Date, endDate: Date, type?: unitOfTime.StartOf): boolean;
    isDateBeforeString(startDate: string, endDate: string, type?: unitOfTime.StartOf): boolean;
}
export declare const DateComparable: Comparable;
declare class Validation {
    date(date: IDate, format?: string): boolean;
}
export declare const DateValidation: Validation;
declare class Picker {
    dateFromDatePicker(date: IDate, format?: string, outputFormat?: string): string;
    localDateForDatePicker(date: IDate, outputFormat?: string): string;
    currentDateForDatePicker(dateFormat?: string, outputFormat?: string): string;
    dateForDatePicker(month: number, day: number, year: number): string;
}
export declare const DatePicker: Picker;
export {};
