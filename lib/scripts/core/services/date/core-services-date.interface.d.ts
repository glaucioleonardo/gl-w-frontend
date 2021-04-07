import { MomentInput, unitOfTime } from 'moment/moment';
export interface IWeeksOfMonth {
    week: number;
    start: string;
    startDay: string;
    startMonth: string;
    startYear: string;
    end: string;
    endDay: string;
    endMonth: string;
    endYear: string;
}
export interface IDaysOfMonth {
    week: number;
    day: string;
    month: string;
    year: string;
    dayMonth: string;
    date: string;
    monthYear: string;
}
export interface IDayMonthYear {
    day: number;
    month: number;
    year: number;
}
export declare type IDate = MomentInput;
export declare type IUnityOfTime = unitOfTime.StartOf;
export declare type IDateLocal = string | string[];
