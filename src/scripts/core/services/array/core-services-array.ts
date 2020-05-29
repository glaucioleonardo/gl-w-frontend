
export class CoreServicesArray {
    constructor() { }

    removeArrayDuplicateLegacy(array) {
        const unique = array.filter((item, index) => {
            return array.indexOf(item) === index;
        });

        return unique.sort();
    }

    sortByKey(array, key, asc) {
        return new Promise(resolve => {
            asc = asc ? 1 : -1;
            const sorted = array.sort((a, b) => {
                const x = a[key];
                const y = b[key];
                return (x === y) ? 0 : ((x > y) ? asc : -1 * asc);
            });

            resolve(sorted);
        });
    }
}
