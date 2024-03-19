import { InterfaceFileManagerAPI } from "../apis/InterfaceFileManagerAPI";
/**
 * init
 * @returns
 */
export declare const initialize: (API: InterfaceFileManagerAPI) => Promise<any>;
/**
 * get content
 * @param disk string
 * @param path string
 * @returns
 */
export declare const getContent: (API: InterfaceFileManagerAPI, disk: string, path: string) => Promise<{
    directories: any;
    files: any;
}>;
/**
 * get tree
 * @param disk string
 * @param path string
 * @returns
 */
export declare const getTree: (API: InterfaceFileManagerAPI, disk: string, path: string) => Promise<any>;
