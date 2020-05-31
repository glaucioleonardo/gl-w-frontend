/**
 * Convert
 **/
export declare const textFileToUrlImage: (file: File) => PromiseLike<string>;
/**
 * Parser
 **/
export declare const parseAcceptFiles: (accepts: string) => string[];
/**
 * Validate
**/
export declare const validateFile: (input: HTMLInputElement, accepts: string[]) => boolean;
export declare const validateFileSize: (input: HTMLInputElement) => boolean;
