"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
exports.__esModule = true;
exports.DatePicker = exports.DateValidation = exports.DateComparable = exports.DateGet = void 0;
var moment = require("moment");
var moment_range_1 = require("moment-range");
var core_services_number_service_1 = require("../number/core-services-number.service");
var Get = (function () {
    function Get() {
    }
    Get.prototype.excelToDate = function (serialDate) {
        var unixTimestamp = (serialDate - 25569) * 86400;
        return moment.unix(unixTimestamp).toDate();
    };
    Get.prototype.excelToDateNoUTC = function (serialDate) {
        var date = this.excelToDate(serialDate);
        var offSet = date.getTimezoneOffset();
        return moment.utc(date).add(offSet, 'minute').toDate();
    };
    Get.prototype.customDate = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        return moment(date, format).local(true).toDate();
    };
    Get.prototype.customDateString = function (date, format, outputFormat) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        var finalDate = this.customDate(date, format);
        return moment(finalDate).local(true).format(outputFormat).toString();
    };
    Get.prototype.customDateNoUTC = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        var dmy = this.dayMonthYear(date, format);
        return new Date(dmy.year, dmy.month, dmy.day, 0, 0, 0);
    };
    Get.prototype.customDateNoUTCString = function (date, format, outputFormat) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        var finalDate = this.customDate(date, format);
        var offSet = finalDate.getTimezoneOffset() * -1;
        return moment.utc(finalDate, format).add(offSet, 'minute').format(outputFormat);
    };
    Get.prototype.isoDate = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        return moment(date, format).local(true).toDate().toISOString();
    };
    Get.prototype.isoDateNoUTC = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        var finalDate = this.customDate(date, format);
        var offSet = finalDate.getTimezoneOffset() * -1;
        return moment.utc(finalDate, format).add(offSet, 'minute').toISOString();
    };
    Get.prototype.currentDateString = function (outputFormat) {
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        return moment.utc(new Date(), outputFormat).local().format(outputFormat);
    };
    Get.prototype.currentDate = function (outputFormat) {
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        return this.customDate(new Date(), outputFormat);
    };
    Get.prototype.currentDateNoUTC = function () {
        return this.customDateNoUTC(new Date());
    };
    Get.prototype.currentDateNoUTCString = function (outputFormat) {
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        return this.customDateNoUTCString(new Date(), outputFormat);
    };
    Get.prototype.customDateExcelNoUTC = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        var finalDate = this.customDate(date, format);
        return moment.utc(finalDate, format).add(0.5, 'minute').add(-2, 'seconds').toDate();
    };
    Get.prototype.dayMonthYear = function (date, format, separator) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        if (separator === void 0) { separator = '/'; }
        var x = moment(date, format, true).format(format);
        var d = parseInt(x.split(separator)[0], 10);
        var m = parseInt(x.split(separator)[1], 10) - 1;
        var y = parseInt(x.split(separator)[2], 10);
        return { day: d, month: m, year: y };
    };
    Get.prototype.dayMonthYearNoUCT = function (date, format, separator) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        if (separator === void 0) { separator = '/'; }
        var x = this.customDateNoUTCString(date, format, format);
        var d = parseInt(x.split(separator)[0], 10);
        var m = parseInt(x.split(separator)[1], 10) - 1;
        var y = parseInt(x.split(separator)[2], 10);
        return { day: d, month: m, year: y };
    };
    Get.prototype.localDate = function (year, month, day, local) {
        if (local === void 0) { local = 'pt-BR'; }
        var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(year, month, day).toLocaleDateString(local, options);
    };
    Get.prototype.dateFromIso = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        return moment.utc(date).format(format);
    };
    Get.prototype.ganttDate = function (date) {
        var splitDate = this.dayMonthYear(date);
        return new Date(splitDate.year, splitDate.month, splitDate.day);
    };
    Get.prototype.isoDateCustom = function (date, dateFormat, outputFormat) {
        var splitDate = this.dayMonthYear(date);
        return new Date(splitDate.year, splitDate.month, splitDate.day).toISOString();
    };
    Get.prototype.isoDateWithoutTimeString = function (date) {
        var splitDate = this.dayMonthYearNoUCT(date);
        return moment.utc(new Date(splitDate.year, splitDate.month, splitDate.day)).toISOString();
    };
    Get.prototype.dateMilliseconds = function (date, dateFormat, outputFormat) {
        return +moment(this.isoDateCustom(date, dateFormat, outputFormat), dateFormat).format('x');
    };
    Get.prototype.dateToMillisecondsNoTime = function (date) {
        return +moment(this.isoDateWithoutTimeString(date)).format('x');
    };
    Get.prototype.millisecondsToDateNoUTC = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        var finalDate = this.customDateNoUTC(date, 'x');
        var stringDate = moment.utc(finalDate, 'x').format(format);
        return this.customDateNoUTC(stringDate, format);
    };
    Get.prototype.millisecondsToDateString = function (date, outputFormat) {
        return moment.utc(date, 'x').format(outputFormat);
    };
    Get.prototype.daysToMilliseconds = function (days) {
        return days * 24 * 60 * 60 * 1000;
    };
    Get.prototype.durationInDays = function (start, end, countFirstDay) {
        var s = this.dayMonthYear(start);
        var e = this.dayMonthYear(end);
        var startDate = moment([s.year, s.month, s.day]);
        var endDate = moment([e.year, e.month, e.day]);
        var difference = endDate.diff(startDate, 'days');
        var additional = countFirstDay ? 1 : 0;
        return difference + additional;
    };
    Get.prototype.durationInDaysFromDate = function (start, end, dateFormat, countFirstDay) {
        if (dateFormat === void 0) { dateFormat = 'DD/MM/YYYY'; }
        if (countFirstDay === void 0) { countFirstDay = false; }
        var s = this.dayMonthYear(start, dateFormat);
        var e = this.dayMonthYear(end, dateFormat);
        var startDate = moment([s.year, s.month, s.day]);
        var endDate = moment([e.year, e.month, e.day]);
        var difference = endDate.diff(startDate, 'days');
        var additional = countFirstDay ? 1 : 0;
        return difference + additional;
    };
    Get.prototype.durationInMilliseconds = function (start, end) {
        return this.daysToMilliseconds(this.durationInDays(start, end, false));
    };
    Get.prototype.monthName = function (month, language) {
        if (language === void 0) { language = 'pt-br'; }
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
        }
        else {
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
    };
    Get.prototype.weeksOfMonth = function (year, month) {
        var e_1, _a, e_2, _b;
        var _moment = (0, moment_range_1.extendMoment)(moment);
        var startDate = moment([year, month]);
        var firstDay = moment(startDate).startOf('month');
        var endDay = moment(startDate).endOf('month');
        var monthRange = _moment.range(firstDay, endDay);
        var weeks = [];
        var _loop_1 = function (range) {
            var contain = weeks.filter(function (x) { return x === range.week(); }).length > 0;
            if (!contain) {
                weeks.push(range.week());
            }
        };
        try {
            for (var _c = __values(monthRange.by('days')), _d = _c.next(); !_d.done; _d = _c.next()) {
                var range = _d.value;
                _loop_1(range);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c["return"])) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var calendar = [];
        try {
            for (var weeks_1 = __values(weeks), weeks_1_1 = weeks_1.next(); !weeks_1_1.done; weeks_1_1 = weeks_1.next()) {
                var week = weeks_1_1.value;
                var firstWeekDay = void 0;
                var lastWeekDay = void 0;
                var weekRange = void 0;
                if (month === 11 && week === 1) {
                    firstWeekDay = moment(year + 1, 'YYYY').week(week).day(0).isAfter(firstDay) ? moment(year + 1, 'YYYY').week(week).day(0) : firstDay;
                    lastWeekDay = moment(year + 1, 'YYYY').week(week).day(6).isBefore(endDay) ? moment(year + 1, 'YYYY').week(week).day(6) : endDay;
                    weekRange = _moment.range(firstWeekDay, lastWeekDay);
                }
                else {
                    firstWeekDay = moment().week(week).day(0).isAfter(firstDay) ? moment().week(week).day(0) : firstDay;
                    lastWeekDay = moment().week(week).day(6).isBefore(endDay) ? moment().week(week).day(6) : endDay;
                    weekRange = _moment.range(firstWeekDay, lastWeekDay);
                }
                calendar.push({
                    week: week,
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
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (weeks_1_1 && !weeks_1_1.done && (_b = weeks_1["return"])) _b.call(weeks_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return calendar;
    };
    Get.prototype.daysOfMonth = function (weeksRange) {
        var e_3, _a;
        var range = [];
        try {
            for (var _b = __values(weeksRange.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), i = _d[0], week = _d[1];
                var start = parseInt(weeksRange[i].startDay, 10);
                var end = parseInt(weeksRange[i].endDay, 10);
                var month = weeksRange[i].startMonth;
                var year = weeksRange[i].startYear;
                var weekDays = [];
                for (var j = start; j <= end; j++) {
                    var day = core_services_number_service_1.NumberParse.toString(j);
                    weekDays.push({
                        week: week.week,
                        day: day,
                        month: "" + month,
                        year: "" + year,
                        dayMonth: day + "/" + month,
                        date: day + "/" + month + "/" + year,
                        monthYear: month + "/" + year
                    });
                }
                range.push(weekDays);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b["return"])) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return range;
    };
    Get.prototype.weekOfYear = function (date, format) {
        return moment(date, format).week();
    };
    return Get;
}());
exports.DateGet = new Get();
var Comparable = (function () {
    function Comparable() {
    }
    Comparable.prototype.isDateBefore = function (startDate, endDate, type) {
        if (type === void 0) { type = 'day'; }
        return moment(endDate).isBefore(startDate, type);
    };
    Comparable.prototype.isDateBeforeString = function (startDate, endDate, type) {
        if (type === void 0) { type = 'day'; }
        return moment(endDate).isBefore(startDate, type);
    };
    return Comparable;
}());
exports.DateComparable = new Comparable();
var Validation = (function () {
    function Validation() {
    }
    Validation.prototype.date = function (date, format) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        var aDate = moment(date, format, true);
        return aDate.isValid();
    };
    return Validation;
}());
exports.DateValidation = new Validation();
var Picker = (function () {
    function Picker() {
    }
    Picker.prototype.dateFromDatePicker = function (date, format, outputFormat) {
        if (format === void 0) { format = 'DD/MM/YYYY'; }
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        return moment(date, format).format(outputFormat);
    };
    Picker.prototype.localDateForDatePicker = function (date, outputFormat) {
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        return moment.utc(date, outputFormat).local().format(outputFormat);
    };
    Picker.prototype.currentDateForDatePicker = function (dateFormat, outputFormat) {
        if (dateFormat === void 0) { dateFormat = 'DD/MM/YYYY'; }
        if (outputFormat === void 0) { outputFormat = 'DD/MM/YYYY'; }
        return moment.utc(new Date(), 'DD/MM/YYYY').format(outputFormat);
    };
    Picker.prototype.dateForDatePicker = function (month, day, year) {
        var x = moment(new Date(year, month, day), 'DD/MM/YYYY', true).toISOString().split('T')[0];
        x = x.split('-')[2] + '/' + x.split('-')[1] + '/' + x.split('-')[0];
        return x;
    };
    return Picker;
}());
exports.DatePicker = new Picker();
//# sourceMappingURL=core-services-date.service.js.map