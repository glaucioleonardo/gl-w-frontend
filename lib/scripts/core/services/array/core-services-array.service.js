var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Remove {
    duplicateLegacy(array) {
        const unique = array.filter((item, index) => {
            return array.indexOf(item) === index;
        });
        return unique.sort();
    }
    duplicate(array, identification, sortIdentification, asc = true) {
        return __awaiter(this, void 0, void 0, function* () {
            let uniqueArray = array.filter((identification, index) => {
                const _thing = JSON.stringify(identification);
                return index === array.findIndex(obj => {
                    return JSON.stringify(obj) === _thing;
                });
            });
            if (sortIdentification != null && sortIdentification.length > 0) {
                uniqueArray = yield ArraySort.byKey(uniqueArray, sortIdentification, asc);
            }
            return uniqueArray;
        });
    }
}
export const ArrayRemove = new Remove();
class Sort {
    get(array, asc) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const _asc = asc ? 1 : -1;
                const sorted = array.sort((a, b) => {
                    const x = a;
                    const y = b;
                    return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
                });
                resolve(sorted);
            });
        });
    }
    byKey(array, key, asc) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                const _asc = asc ? 1 : -1;
                const sorted = array.sort((a, b) => {
                    const x = a[key];
                    const y = b[key];
                    return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
                });
                resolve(sorted);
            });
        });
    }
}
export const ArraySort = new Sort();
//# sourceMappingURL=core-services-array.service.js.map