type extensionType = {
    [key: string]: string;
};
export declare const extensionTypes: extensionType;
/**
 * convert bytes to human
 * @param bytes number
 * @returns
 */
export declare const bytesToHuman: (bytes: number) => string;
/**
 * timestamp to date
 * @param timestamp number
 * @returns
 */
export declare const timestampToDate: (timestamp: number) => string;
/**
 * extension to icon
 * @param extension string
 * @returns
 */
export declare const extensionToIcon: (extension: string) => string;
/**
 * check extension
 * @param extension string
 * @returns
 */
export declare const checkExtension: (extension: string) => false | "image" | "audio" | "video" | "text";
/**
 * get type
 * @param extension string
 * @returns
 */
export declare const getType: (extension: string) => string;
/**
 * split file name
 * @param fileName string
 * @returns
 */
export declare const splitFileName: (fileName: string) => string;
export {};
