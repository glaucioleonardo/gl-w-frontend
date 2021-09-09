"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
exports.__esModule = true;
exports.ArraySort = exports.ArrayRemove = void 0;
var Remove = (function () {
    function Remove() {
    }
    Remove.prototype.duplicateLegacy = function (array) {
        var unique = array.filter(function (item, index) {
            return array.indexOf(item) === index;
        });
        return unique.sort();
    };
    Remove.prototype.duplicate = function (array, sort, asc) {
        if (sort === void 0) { sort = false; }
        if (asc === void 0) { asc = true; }
        return __awaiter(this, void 0, void 0, function () {
            var arrayWithoutDuplicates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrayWithoutDuplicates = __spreadArray([], __read(new Set(array)), false);
                        if (!sort) return [3, 2];
                        return [4, exports.ArraySort.get(arrayWithoutDuplicates, asc)];
                    case 1: return [2, _a.sent()];
                    case 2: return [2, arrayWithoutDuplicates];
                }
            });
        });
    };
    Remove.prototype.duplicatedByKey = function (data, identification, sortIdentification, asc) {
        if (asc === void 0) { asc = true; }
        return __awaiter(this, void 0, void 0, function () {
            var array, data_1, data_1_1, item, singleArrayWithoutDuplicates, arrayWithoutDuplicates;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        array = [];
                        try {
                            for (data_1 = __values(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
                                item = data_1_1.value;
                                array.push(item[identification]);
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (data_1_1 && !data_1_1.done && (_a = data_1["return"])) _a.call(data_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        singleArrayWithoutDuplicates = __spreadArray([], __read(new Set(array)), false);
                        arrayWithoutDuplicates = [];
                        singleArrayWithoutDuplicates.forEach(function (item) {
                            var i = data.filter(function (x) { return x[identification] === item; })[0];
                            arrayWithoutDuplicates.push(i);
                        });
                        if (!(sortIdentification != null)) return [3, 2];
                        return [4, exports.ArraySort.byKey(arrayWithoutDuplicates, sortIdentification, asc)];
                    case 1: return [2, _b.sent()];
                    case 2: return [2, arrayWithoutDuplicates];
                }
            });
        });
    };
    Remove.prototype.notDuplicated = function (array, asc) {
        if (asc === void 0) { asc = true; }
        return __awaiter(this, void 0, void 0, function () {
            var arrayWithoutDuplicates, duplicates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arrayWithoutDuplicates = __spreadArray([], __read(new Set(array)), false);
                        duplicates = __spreadArray([], __read(array), false);
                        arrayWithoutDuplicates.forEach(function (item) {
                            var i = duplicates.indexOf(item);
                            duplicates = duplicates
                                .slice(0, i)
                                .concat(duplicates.slice(i + 1, duplicates.length));
                        });
                        return [4, exports.ArraySort.get(duplicates, asc)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Remove.prototype.notDuplicatedByKey = function (data, identification, sortIdentification, asc) {
        if (asc === void 0) { asc = true; }
        return __awaiter(this, void 0, void 0, function () {
            var array, data_2, data_2_1, item, arrayWithoutDuplicates, duplicates;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        array = [];
                        try {
                            for (data_2 = __values(data), data_2_1 = data_2.next(); !data_2_1.done; data_2_1 = data_2.next()) {
                                item = data_2_1.value;
                                array.push(item[identification]);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (data_2_1 && !data_2_1.done && (_a = data_2["return"])) _a.call(data_2);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        arrayWithoutDuplicates = __spreadArray([], __read(new Set(array)), false);
                        duplicates = __spreadArray([], __read(array), false);
                        arrayWithoutDuplicates.forEach(function (item) {
                            var i = duplicates.indexOf(item);
                            duplicates = duplicates
                                .slice(0, i)
                                .concat(duplicates.slice(i + 1, duplicates.length));
                        });
                        if (!(sortIdentification != null)) return [3, 2];
                        return [4, exports.ArraySort.byKey(duplicates, sortIdentification, asc)];
                    case 1: return [2, _b.sent()];
                    case 2: return [2, duplicates];
                }
            });
        });
    };
    return Remove;
}());
exports.ArrayRemove = new Remove();
var Sort = (function () {
    function Sort() {
    }
    Sort.prototype.get = function (array, asc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        var _asc = asc ? 1 : -1;
                        var sorted = array.sort(function (a, b) {
                            var x = a;
                            var y = b;
                            return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
                        });
                        resolve(sorted);
                    })];
            });
        });
    };
    Sort.prototype.byKey = function (array, key, asc) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2, new Promise(function (resolve) {
                        var _asc = asc ? 1 : -1;
                        var sorted = array.sort(function (a, b) {
                            var x = a[key];
                            var y = b[key];
                            return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
                        });
                        resolve(sorted);
                    })];
            });
        });
    };
    Sort.prototype.moveArray = function (array, from, to) {
        return __awaiter(this, void 0, void 0, function () {
            var item, newArray, _a, _b, _c, i, arrayItem;
            var e_3, _d;
            return __generator(this, function (_e) {
                item = array[from];
                newArray = __spreadArray([], __read(array), false);
                newArray[from] = array[to];
                newArray[to] = item;
                try {
                    for (_a = __values(newArray.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                        _c = __read(_b.value, 2), i = _c[0], arrayItem = _c[1];
                        arrayItem.id = i;
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_d = _a["return"])) _d.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [2, newArray];
            });
        });
    };
    return Sort;
}());
exports.ArraySort = new Sort();
//# sourceMappingURL=core-services-array.service.js.map