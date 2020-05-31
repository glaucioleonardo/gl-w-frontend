"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Remove items
 */
exports.removeArrayDuplicateLegacy = function (array) {
    var unique = array.filter(function (item, index) {
        return array.indexOf(item) === index;
    });
    return unique.sort();
};
/**
 * Sort Arrays
 */
exports.sortByKey = function (array, key, asc) {
    return new Promise(function (resolve) {
        var _asc = asc ? 1 : -1;
        var sorted = array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
        });
        resolve(sorted);
    });
};
//# sourceMappingURL=core-services-array.service.js.map