import { Client } from "./Client";
import { AbstractFileManagerAPI } from "./AbstractFileManagerAPI ";
export declare class FileManagerAPI extends AbstractFileManagerAPI {
    client: Client;
    constructor(client: Client);
    /**
     * api disk
     */
    initialize: () => Promise<import("axios").AxiosResponse<any, any>>;
    content: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    tree: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    selectDisk: (disk: string) => Promise<import("axios").AxiosResponse<any, any>>;
    upload: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    delete: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    paste: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    rename: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    download: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    thumbnails: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    preview: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    url: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    info: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    listshare: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    share: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    unshare: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    checkExist: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    createDirectory: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    createFile: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    updateFile: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    streamFile: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    zip: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    unzip: (data: any) => Promise<import("axios").AxiosResponse<any, any>>;
    ckeditor: () => Promise<import("axios").AxiosResponse<any, any>>;
    tinymce: () => Promise<import("axios").AxiosResponse<any, any>>;
    tinymce5: () => Promise<import("axios").AxiosResponse<any, any>>;
    summernote: () => Promise<import("axios").AxiosResponse<any, any>>;
    fmButton: () => Promise<import("axios").AxiosResponse<any, any>>;
}
export default FileManagerAPI;
