class Remove {
    duplicateLegacy(array: any[]): any[] {
        const unique = array.filter((item, index) => {
            return array.indexOf(item) === index;
        });

        return unique.sort();
    }

    async duplicate(array: any[], identification: any, sortIdentification?: string, asc: boolean = true): Promise<any[]> {
        let uniqueArray = array.filter((identification, index) => {
            const _thing = JSON.stringify(identification);
            return index === array.findIndex(obj => {
                    return JSON.stringify(obj) === _thing;
            });
        });

        if (sortIdentification != null && sortIdentification.length > 0) {
            uniqueArray = await ArraySort.byKey(uniqueArray, sortIdentification, asc)
        }

        return uniqueArray;
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
}
// tslint:disable-next-line:variable-name
export const ArraySort = new Sort();
