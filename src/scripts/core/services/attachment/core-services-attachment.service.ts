
/**
 * Convert
 **/
export const textFileToUrlImage = (file: File): PromiseLike<string> => {
  return new Promise(resolve => {
	const fileReader = new FileReader();
	fileReader.addEventListener('load', (e: any) => {
	  resolve(e.target.result);
	});

	fileReader.readAsDataURL(file);
  });
}

/**
 * Parser
 **/
export const parseAcceptFiles = (accepts: string): string[] => {
  return accepts
	.replace(/image\//g, '')
	.replace(/x-/g, '')
	.replace(/\+xml/g, '')
	.replace(/ /g, '')
	.split(',');
}

/**
 * Validate
**/
export const validateFile = (input: HTMLInputElement, accepts: string[]): boolean => {
  const fileName = input.value;
  const idxDot = fileName.lastIndexOf('.') + 1;
  const extFile = fileName.substr(idxDot, fileName.length).toLowerCase();

  if (accepts.length === 1 && accepts[0] === '*') { return true; }

  for (const extension of accepts) { if (extFile === extension) { return true; }}
  return false;
}
export const validateFileSize = (input: HTMLInputElement): boolean => {
  if (input != null && input.files != null) {
	const fileSize = input.files[0].size / 1024;
	const maxSize = fileMaxSize(input);

	return fileSize <= maxSize;
  } else {
    console.error('Input is null.');
 	return false;
  }
}
/**
 * The user must include the attribute 'data-maxsize' in mb(megabyte);
 * @param input
 */
const fileMaxSize = (input: HTMLInputElement): number => {
  const fileName = (input.attributes as any)['data-maxsize'].nodeValue;
  if (fileName) {
	return  parseInt(fileName, 10);
  } else {
	return 1024 * 45;
  }
}








