import { AxiosError } from "axios";
export type ResponseProps = {
    status?: string;
    content?: any;
};
/**
 * parse error
 * @param error
 */
export type ServerError = {
    status: string;
    message: string | {
        [key: string]: string[];
    };
};
export type ServerErrorProps = AxiosError<ServerError>;
export declare const parseError: (error: ServerErrorProps) => void;
export type Callback = () => void;
/**
 * delay callback
 * @param callback
 * @param delay
 */
export declare const delay: (callback: Callback, delay: number) => Promise<void>;
/**
 * repeat callback
 * @param callback
 * @param delay
 */
export declare const repeat: (callback: Callback, delay: number) => Promise<void>;
/**
 * copy to clipboard
 * @param data
 */
export declare const Copy: (data: any) => void;
/**
 * random string
 * @param type
 * @param length
 * @returns
 */
export type RandomType = 1 | 2;
export declare const Random: (type: RandomType, length: number) => string;
/**
 * timestamp to date
 * @param timestamp
 * @returns
 */
export declare const timestampToDate: (timestamp: number) => string;
export declare const dateTime: (time: string) => string;
export declare const toggleDataInArray: (arr1: any, arr2: any, prop: any) => any[];
