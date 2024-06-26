import { DateRange, extendMoment } from 'moment-range';
import { NumberParse } from '../../number/src';
import { IDate, IDateLocal, IDayMonthYear, IDaysOfMonth, IWeeksOfMonth } from './core-services-date.interface';
import moment, { Moment } from 'moment';
import StartOf = moment.unitOfTime.StartOf;

class Get {
  excelToDate(serialDate: number): Date {
    const unixTimestamp = (serialDate - 25569) * 86400; // Converts Excel date to unix timestamp, assuming Mac/Windows Excel 2011 onwards
    return moment.unix(unixTimestamp).toDate();
  }

  excelToDateNoUTC(serialDate: number): Date {
    const date = this.excelToDate(serialDate);
    const offSet = date.getTimezoneOffset();
    return moment.utc(date).add(offSet, 'minute').toDate();
  }

  customDate(date: IDate, format = 'DD/MM/YYYY'): Date {
    return moment(date, format).local(true).toDate();
  }

  customDateString(date: IDate, format = 'DD/MM/YYYY', outputFormat = 'DD/MM/YYYY'): string {
    const finalDate = this.customDate(date, format);
    return moment(finalDate).local(true).format(outputFormat).toString();
  }

  customDateNoUTC(date: IDate, format = 'DD/MM/YYYY'): Date {
    const dmy = this.dayMonthYear(date, format);
    return new Date(dmy.year, dmy.month, dmy.day, 0, 0, 0);
  }

  customDateNoUTCString(date: IDate, format = 'DD/MM/YYYY', outputFormat = 'DD/MM/YYYY'): string {
    const finalDate = this.customDate(date, format);
    const offSet = finalDate.getTimezoneOffset() * -1;
    return moment.utc(finalDate, format).add(offSet, 'minute').format(outputFormat);
  }

  isoDate(date: IDate, format = 'DD/MM/YYYY'): string {
    return moment(date, format).local(true).toDate().toISOString();
  }

  isoDateNoUTC(date: IDate, format = 'DD/MM/YYYY'): string {
    const finalDate = this.customDate(date, format);
    const offSet = finalDate.getTimezoneOffset() * -1;
    return moment.utc(finalDate, format).add(offSet, 'minute').toISOString();
  }

  currentDateString(outputFormat = 'DD/MM/YYYY'): string {
    return moment.utc(new Date(), outputFormat).local().format(outputFormat);
  }

  currentDate(outputFormat = 'DD/MM/YYYY'): Date {
    return this.customDate(new Date(), outputFormat);
  }

  currentDateNoUTC(): Date {
    return this.customDateNoUTC(new Date());
  }

  currentDateNoUTCString(outputFormat = 'DD/MM/YYYY'): string {
    return this.customDateNoUTCString(new Date(), outputFormat);
  }

  customDateExcelNoUTC(date: IDate, format = 'DD/MM/YYYY'): Date {
    const finalDate = this.customDate(date, format);
    return moment.utc(finalDate, format).add(0.5, 'minute').add(-2, 'seconds').toDate();
  }

  dayMonthYear(date: IDate, format = 'DD/MM/YYYY', separator = '/'): IDayMonthYear {
    const x = moment(date, format, true).format(format);

    const d = parseInt(x.split(separator)[0], 10);
    const m = parseInt(x.split(separator)[1], 10) - 1;
    const y = parseInt(x.split(separator)[2], 10);

    return {day: d, month: m, year: y};
  }

  dayMonthYearNoUCT(date: IDate, format = 'DD/MM/YYYY', separator = '/'): IDayMonthYear {
    const x = this.customDateNoUTCString(date, format, format);

    const d = parseInt(x.split(separator)[0], 10);
    const m = parseInt(x.split(separator)[1], 10) - 1;
    const y = parseInt(x.split(separator)[2], 10);

    return {day: d, month: m, year: y};
  }

  localDate(year: number, month: number, day: number, local: IDateLocal = 'pt-BR'): string {
    const options: Partial<Intl.DateTimeFormatOptions> = {year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(year, month, day).toLocaleDateString(local, options);
  }

  dateFromIso(date: IDate, format = 'DD/MM/YYYY'): string {
    return moment.utc(date).format(format);
  }

  ganttDate(date: IDate): Date {
    const splitDate = this.dayMonthYear(date);
    return new Date(splitDate.year, splitDate.month, splitDate.day);
  }

  isoDateCustom(date: IDate): string {
    const splitDate = this.dayMonthYear(date);
    return new Date(splitDate.year, splitDate.month, splitDate.day).toISOString();
  }

  isoDateWithoutTimeString(date: IDate): string {
    const splitDate = this.dayMonthYearNoUCT(date);
    return moment.utc(new Date(splitDate.year, splitDate.month, splitDate.day)).toISOString();
  }

  dateMilliseconds(date: IDate, dateFormat: string): number {
    return +moment(this.isoDateCustom(date), dateFormat).format('x');
  }

  dateToMillisecondsNoTime(date: IDate): number {
    return +moment(this.isoDateWithoutTimeString(date)).format('x');
  }

  millisecondsToDateNoUTC(date: IDate, format = 'DD/MM/YYYY'): Date {
    const finalDate = this.customDateNoUTC(date, 'x');
    // const offSet = finalDate.getTimezoneOffset() * -1;
    // const millisecondsDate = moment.utc(finalDate, 'x').add(offSet, 'minute').milliseconds();

    const stringDate = moment.utc(finalDate, 'x').format(format);
    return this.customDateNoUTC(stringDate, format);
  }

  millisecondsToDateString(date: IDate, outputFormat: string): string {
    return moment.utc(date, 'x').format(outputFormat);
  }

  daysToMilliseconds(days: number): number {
    return days * 24 * 60 * 60 * 1000;
  }

  durationInDays(start: number, end: number, countFirstDay: boolean): number {
    const s = this.dayMonthYear(start);
    const e = this.dayMonthYear(end);

    const startDate = moment([s.year, s.month, s.day]);
    const endDate = moment([e.year, e.month, e.day]);
    const difference = endDate.diff(startDate, 'days');

    const additional = countFirstDay ? 1 : 0;

    return difference + additional;
  }

  durationInDaysFromDate(start: Date, end: Date, dateFormat = 'DD/MM/YYYY', countFirstDay = false): number {
    const s = this.dayMonthYear(start, dateFormat);
    const e = this.dayMonthYear(end, dateFormat);

    const startDate = moment([s.year, s.month, s.day]);
    const endDate = moment([e.year, e.month, e.day]);
    const difference = endDate.diff(startDate, 'days');

    const additional = countFirstDay ? 1 : 0;

    return difference + additional;
  }

  durationInMilliseconds(start: number, end: number): number {
    return this.daysToMilliseconds(this.durationInDays(start, end, false));
  }

  monthName(month: number, language = 'pt-br'): string {
    if (language === 'pt-br' || language === 'pt-pt' || language === 'pt') {
      switch (month) {
        case 0: return 'Janeiro';
        case 1: return 'Fevereiro';
        case 2: return 'Março';
        case 3: return 'Abril';
        case 4: return 'Maio';
        case 5: return 'Junho';
        case 6: return 'Julho';
        case 7: return 'Agosto';
        case 8: return 'Setembro';
        case 9: return 'Outubro';
        case 10: return 'Novembro';
        case 11: return 'Dezembro';
        default: return '';
      }
    } else {
      switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
        default: return '';
      }
    }
  }

  weeksOfMonth(year: number, month: number): IWeeksOfMonth[] {
    // @js-ignore
    const internalMoment = extendMoment(moment);

    // Year and month are variables
    const startDate = moment([year, month]);

    // Get the first and last day of the month
    const firstDay = moment(startDate).startOf('month');
    const endDay = moment(startDate).endOf('month');

    // Create a range for the month we can iterate through
    const monthRange = internalMoment.range(firstDay, endDay);

    // Get all the weeks during the current month
    const weeks: number[] = [];
    for (const range of monthRange.by('days')) {
      const contain = weeks.filter(x => x === range.week()).length > 0;
      if (!contain) {
        weeks.push(range.week());
      }
    }

    // Create a range for each week
    const calendar: IWeeksOfMonth[] = [];

    for (const week of weeks) {
      // Create a range for that week between 1st and 7th day
      let firstWeekDay: Date | Moment;
      let lastWeekDay: Date | Moment;
      let weekRange: DateRange;

      if (month === 11 && week === 1) {
        firstWeekDay = moment(year + 1, 'YYYY').week(week).day(0).isAfter(firstDay) ? moment(year + 1, 'YYYY').week(week).day(0) : firstDay;
        lastWeekDay = moment(year + 1, 'YYYY').week(week).day(6).isBefore(endDay) ? moment(year + 1, 'YYYY').week(week).day(6) : endDay;
        weekRange = internalMoment.range(firstWeekDay, lastWeekDay);
      } else {
        firstWeekDay = moment().week(week).day(0).isAfter(firstDay) ? moment().week(week).day(0) : firstDay;
        lastWeekDay = moment().week(week).day(6).isBefore(endDay) ? moment().week(week).day(6) : endDay;
        weekRange = internalMoment.range(firstWeekDay, lastWeekDay);
      }

      // Add to the calendar
      calendar.push({
        week,
        start: moment(weekRange.start.toISOString()).format('DD/MM/YYYY'),
        startDay: moment(weekRange.start.toISOString()).format('DD'),
        startMonth: moment(weekRange.start.toISOString()).format('MM'),
        startYear: moment(weekRange.start.toISOString()).format('YYYY'),
        end: moment(weekRange.end.toISOString()).format('DD/MM/YYYY'),
        endDay: moment(weekRange.end.toISOString()).format('DD'),
        endMonth: moment(weekRange.end.toISOString()).format('MM'),
        endYear: moment(weekRange.end.toISOString()).format('YYYY')
      });
    }

    return calendar;
  }

  daysOfMonth(weeksRange: IWeeksOfMonth[]): IDaysOfMonth[][] {
    const range: IDaysOfMonth[][] = [];

    for (const [i, week] of weeksRange.entries()) {
      const start = parseInt(weeksRange[i].startDay, 10);
      const end = parseInt(weeksRange[i].endDay, 10);
      const month = weeksRange[i].startMonth;
      const year = weeksRange[i].startYear;

      const weekDays: IDaysOfMonth[] = [];
      for (let j = start; j <= end; j++) {
        const day: string = NumberParse.toString(j);

        weekDays.push({
          week: week.week,
          day,
          month: `${month}`,
          year: `${year}`,
          dayMonth: `${day}/${month}`,
          date: `${day}/${month}/${year}`,
          monthYear: `${month}/${year}`,
        });
      }

      range.push(weekDays);
    }

    return range;
  }

  weekOfYear(date: string, format: string): number {
    return moment(date, format).week();
  }
}

export const DateGet = new Get();

class Comparable {
  isDateBefore(startDate: Date, endDate: Date, type: StartOf = 'day') {
    return moment(endDate).isBefore(startDate, type);
  }

  isDateBeforeString(startDate: string, endDate: string, type: StartOf = 'day'): boolean {
    return moment(endDate).isBefore(startDate, type);
  }
}

export const DateComparable = new Comparable();

class Validation {
  date(date: IDate, format = 'DD/MM/YYYY'): boolean {
    const aDate = moment(date, format, true);
    return aDate.isValid();
  }
}

export const DateValidation = new Validation();

class Picker {
  dateFromDatePicker(date: IDate, format = 'DD/MM/YYYY', outputFormat = 'DD/MM/YYYY'): string {
    return moment(date, format).format(outputFormat);
  }

  localDateForDatePicker(date: IDate, outputFormat = 'DD/MM/YYYY') {
    return moment.utc(date, outputFormat).local().format(outputFormat);
  }

  currentDateForDatePicker(outputFormat = 'DD/MM/YYYY') {
    return moment.utc(new Date(), 'DD/MM/YYYY').format(outputFormat);
  }

  dateForDatePicker(month: number, day: number, year: number): string {
    let x = moment(new Date(year, month, day), 'DD/MM/YYYY', true).toISOString().split('T')[0];
    x = x.split('-')[2] + '/' + x.split('-')[1] + '/' + x.split('-')[0];
    return x;
  }
}

export const DatePicker = new Picker();
