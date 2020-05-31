/**
 * Remove items
 */
export const removeArrayDuplicateLegacy = (array: any[]): any[] => {
  const unique = array.filter((item, index) => {
	return array.indexOf(item) === index;
  });

  return unique.sort();
};


/**
 * Sort Arrays
 */
export const sortByKey = (array: any[], key: string, asc: boolean): PromiseLike<any[]> => {
  return new Promise(resolve => {
	const _asc = asc ? 1 : -1;
	const sorted: any[] = array.sort((a: any, b: any): number => {
	  const x = a[key];
	  const y = b[key];
	  return (x === y) ? 0 : ((x > y) ? _asc : -1 * _asc);
	});

	resolve(sorted);
  });
};
