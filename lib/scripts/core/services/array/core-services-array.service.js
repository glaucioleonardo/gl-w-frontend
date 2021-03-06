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
    duplicate(array, sort = false, asc = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayWithoutDuplicates = [...new Set(array)];
            if (sort) {
                return yield ArraySort.get(arrayWithoutDuplicates, asc);
            }
            else {
                return arrayWithoutDuplicates;
            }
        });
    }
    duplicatedByKey(data, identification, sortIdentification, asc = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const array = [];
            for (const item of data) {
                array.push(item[identification]);
            }
            const singleArrayWithoutDuplicates = [...new Set(array)];
            const arrayWithoutDuplicates = [];
            singleArrayWithoutDuplicates.forEach((item) => {
                const i = data.filter(x => x[identification] === item)[0];
                arrayWithoutDuplicates.push(i);
            });
            if (sortIdentification != null) {
                return yield ArraySort.byKey(arrayWithoutDuplicates, sortIdentification, asc);
            }
            else {
                return arrayWithoutDuplicates;
            }
        });
    }
    notDuplicated(array, asc = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const arrayWithoutDuplicates = [...new Set(array)];
            let duplicates = [...array];
            arrayWithoutDuplicates.forEach((item) => {
                const i = duplicates.indexOf(item);
                duplicates = duplicates
                    .slice(0, i)
                    .concat(duplicates.slice(i + 1, duplicates.length));
            });
            return yield ArraySort.get(duplicates, asc);
        });
    }
    notDuplicatedByKey(data, identification, sortIdentification, asc = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const array = [];
            for (const item of data) {
                array.push(item[identification]);
            }
            const arrayWithoutDuplicates = [...new Set(array)];
            let duplicates = [...array];
            arrayWithoutDuplicates.forEach((item) => {
                const i = duplicates.indexOf(item);
                duplicates = duplicates
                    .slice(0, i)
                    .concat(duplicates.slice(i + 1, duplicates.length));
            });
            if (sortIdentification != null) {
                return yield ArraySort.byKey(duplicates, sortIdentification, asc);
            }
            else {
                return duplicates;
            }
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
    moveArray(array, from, to) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = array[from];
            const newArray = [...array];
            newArray[from] = array[to];
            newArray[to] = item;
            for (const [i, arrayItem] of newArray.entries()) {
                arrayItem.id = i;
            }
            return newArray;
        });
    }
}
export const ArraySort = new Sort();
//# sourceMappingURL=core-services-array.service.js.map