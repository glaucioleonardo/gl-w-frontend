class Remove {
    duplicateLegacy(array: any[]): any[] {
        const unique = array.filter((item, index) => {
            return array.indexOf(item) === index;
        });

        return unique.sort();
    }

    async duplicate(array: any[], sort: boolean = false, asc: boolean = true): Promise<any[]> {
        const arrayWithoutDuplicates = [...new Set(array)];

        if (sort) {
            return await ArraySort.get(arrayWithoutDuplicates, asc);
        } else {
            return arrayWithoutDuplicates;
        }
    }
    async duplicatedByKey(data: any[], identification: any, sortIdentification?: string, asc: boolean = true): Promise<any[]> {
        const array: any[] = [];
        for (const item of data) {
            array.push(item[identification]);
        }

        const singleArrayWithoutDuplicates: any[] = [...new Set(array)];

        const arrayWithoutDuplicates: any[] = [];
        singleArrayWithoutDuplicates.forEach((item) => {
            const i = data.filter(x => x[identification] === item)[0];
            arrayWithoutDuplicates.push(i);
        });

        if (sortIdentification != null) {
            return await ArraySort.byKey(arrayWithoutDuplicates, sortIdentification, asc);
        } else {
            return arrayWithoutDuplicates;
        }
    }

    async notDuplicated(array: any[], asc: boolean = true): Promise<any[]> {
        const arrayWithoutDuplicates = [...new Set(array)];
        let duplicates = [...array];
        arrayWithoutDuplicates.forEach((item) => {
            const i = duplicates.indexOf(item);
            duplicates = duplicates
              .slice(0, i)
              .concat(duplicates.slice(i + 1, duplicates.length));
        });

        return await ArraySort.get(duplicates, asc);
    }
    async notDuplicatedByKey(data: any[], identification: any, sortIdentification?: string, asc: boolean = true): Promise<any[]> {
        const array: any[] = []
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
            return await ArraySort.byKey(duplicates, sortIdentification, asc);
        } else {
            return duplicates;
        }
    }
}
// tslint:disable-next-line:variable-name
export const ArrayRemove = new Remove();

class Sort {
    async get(array: object[], asc: boolean): Promise<any[]> {
        return new Promise(resolve => {
            const _asc: number = asc ? 1 : -1;
            const sorted: object[] = array.sort((a: any, b: any): number => {
                const x = a;
                const y = b;
                return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
            });

            resolve(sorted);
        });
    }

    async byKey(array: any[], key: string, asc: boolean): Promise<any[]> {
        return new Promise(resolve => {
            const _asc = asc ? 1 : -1;
            const sorted: any[] = array.sort((a: any, b: any): number => {
                const x = a[key];
                const y = b[key];
                return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
            });

            resolve(sorted);
        });
    }

    async moveArray(array: any[], from: number, to: number): Promise<any[]> {
        const item = array[from];
        const newArray = [...array];

        newArray[from] = array[to];
        newArray[to] = item;

        for (const [i, arrayItem] of newArray.entries()) {
            arrayItem.id = i;
        }

        return newArray;
    }
}
// tslint:disable-next-line:variable-name
export const ArraySort = new Sort();
