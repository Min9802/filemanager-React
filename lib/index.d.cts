import React from 'react';
import * as axios from 'axios';
import { AxiosResponse } from 'axios';

interface InterfaceFileManagerAPI {
    initialize(): Promise<AxiosResponse>;
    content(data: any): Promise<AxiosResponse>;
    tree(data: any): Promise<AxiosResponse>;
    selectDisk(data: any): Promise<AxiosResponse>;
    upload(data: any): Promise<AxiosResponse>;
    delete(data: any): Promise<AxiosResponse>;
    paste(data: any): Promise<AxiosResponse>;
    rename(data: any): Promise<AxiosResponse>;
    download(data: any): Promise<AxiosResponse>;
    thumbnails(data: any): Promise<AxiosResponse>;
    preview(data: any): Promise<AxiosResponse>;
    url(data: any): Promise<AxiosResponse>;
    info(data: any): Promise<AxiosResponse>;
    listshare(data: any): Promise<AxiosResponse>;
    share(data: any): Promise<AxiosResponse>;
    unshare(data: any): Promise<AxiosResponse>;
    checkExist(data: any): Promise<AxiosResponse>;
    createDirectory(data: any): Promise<AxiosResponse>;
    createFile(data: any): Promise<AxiosResponse>;
    updateFile(data: any): Promise<AxiosResponse>;
    streamFile(data: any): Promise<AxiosResponse>;
    zip(data: any): Promise<AxiosResponse>;
    unzip(data: any): Promise<AxiosResponse>;
    ckeditor(): Promise<AxiosResponse>;
    tinymce(): Promise<AxiosResponse>;
    tinymce5(): Promise<AxiosResponse>;
    summernote(): Promise<AxiosResponse>;
    fmButton(): Promise<AxiosResponse>;
}

/**
 * upload file
 * @param disk string
 * @param path string
 * @param overwrite boolean
 * @param files File[]
 */
type API = InterfaceFileManagerAPI;
type uploadProps = {
    API: API;
    data: FormData;
};
declare const upload: ({ API, data }: uploadProps) => Promise<void>;
/**
 * new file
 * @param disk string
 * @param name string
 * @param path string
 */
type newFileOrFolderProps = {
    API: API;
    disk: string;
    name: string;
    path: string | null;
};
declare const newFile: ({ API, disk, name, path }: newFileOrFolderProps) => Promise<void>;
/**
 * new Folder
 * @param disk string
 * @param name string
 * @param path string
 */
declare const newFolder: ({ API, disk, name, path }: newFileOrFolderProps) => Promise<void>;
/**
 * download
 * @param API API
 * @param disk string
 * @param data FileProps
 * @returns Promise<AxiosResponse>
 */
declare const download: (API: InterfaceFileManagerAPI, disk: string, data: FileProps) => Promise<AxiosResponse>;
/**
 * copy
 * @param disk string
 * @param data Item[]
 * @param type string
 * @returns
 */
type ClipboardProps = {
    type: string;
    disk: string;
    directories: string[];
    files: string[];
};
declare const Clipboard: (disk: string, data: Item[], type: string) => Promise<ClipboardProps>;
/**
 * paste
 * @param disk string
 * @param data any
 * @param path string
 * @returns
 */
type PasteProps = {
    API: API;
    disk: string;
    data: ClipboardProps;
    path: string;
};
declare const paste: ({ API, disk, data, path }: PasteProps) => Promise<boolean>;
/**
 * delete
 * @param disk: string
 * @param items: any
 * @returns
 */
type DeletingProps = {
    API: API;
    disk: string;
    items: {
        type: string;
        path: string;
    }[];
};
declare const deleting: ({ API, disk, items }: DeletingProps) => Promise<boolean>;
/**
 * rename
 * @param disk string
 * @param data data
 * @returns
 */
type RenameProps = {
    API: API;
    disk: string;
    data: FileProps | FolderProps;
};
declare const rename: ({ API, disk, data }: RenameProps) => Promise<boolean>;
/**
 * file to data uri
 * @param blob Blob
 * @returns
 */
declare const fileToDataUri: (blob: Blob) => Promise<string | ArrayBuffer | null>;
/**
 * thumbnail
 * @param disk string
 * @param item any
 * @returns
 */
type thumbnailProps = {
    API: API;
    disk: string;
    item: FileProps;
};
declare const thumbnail: ({ API, disk, item }: thumbnailProps) => Promise<any>;
/**
 * stream file
 * @param data FormData
 * @returns
 */
type StreamProps = {
    API: API;
    data: {
        disk: string;
        path: string;
    };
};
declare const streamFile: ({ API, data }: StreamProps) => Promise<any>;
/**
 * preview data
 * @param disk string
 * @param data FileProps
 * @returns
 */
type PreviewDataProps = {
    API: API;
    disk: string;
    data: FileProps;
};
declare const previewData: ({ API, disk, data }: PreviewDataProps) => Promise<PreviewProps>;
/**
 * edit file
 * @param formData FormData
 * @returns
 */
type EditProps = {
    API: API;
    data: any;
};
declare const edit: ({ API, data }: EditProps) => Promise<boolean>;
/**
 * get info file
 * @param disk
 * @param path
 * @returns
 */
type InfoProps = {
    API: API;
    data: {
        disk: string;
        path: string;
    };
};
declare const info: ({ API, data }: InfoProps) => Promise<AxiosResponse | any>;
/**
 * list share
 * @param disk string
 * @param data any
 * @returns
 */
type listShareProps = {
    API: API;
    data: FileProps | FolderProps;
};
declare const listShare: ({ API, data }: listShareProps) => Promise<void | any>;
/**
 * create share
 * @param disk string
 * @param data any
 * @returns
 */
type createShareProps = {
    API: API;
    disk: string;
    data: FileProps | FolderProps;
};
declare const createShare: ({ API, disk, data }: createShareProps) => Promise<void>;
/**
 * unshare
 * @param id string
 */
type unShareProps = {
    API: API;
    id: number;
};
interface UnShareInterface {
    (props: unShareProps): Promise<void>;
}
declare const unShare: UnShareInterface;

type Item = {
    basename: string;
    dirname: string;
    path: string;
    timestamp: number;
    type: string;
    visibility: string;
    extension: string;
    filename: string;
    size: number;
    disk: string;
};
type FolderProps = {
    type: string;
    path: string;
    open: boolean;
    basename: string;
    dirname: string;
    timestamp: number;
    visibility: string;
    acl: number;
    props: {
        hasSubdirectories: boolean;
    };
};
type FileProps = {
    type: string;
    path: string;
    basename: string;
    dirname: string;
    extension: string;
    filename: string;
    size: number;
    timestamp: number;
    visibility: string;
};
type PreviewProps = {
    type?: string;
    data?: {
        title?: string;
        src?: string;
        type?: string;
    };
};
interface FileManagerProps {
    API: InterfaceFileManagerAPI;
    lang: string;
    callback?: (data: any) => void;
}
declare const FileManager: React.FC<FileManagerProps>;

declare class Client {
    private API_SERVER;
    private Authorize;
    private token;
    private lang;
    constructor(API_SERVER: string, Authorize: boolean, token: string, lang: string);
    createRequest(method: string, path: string, data?: any, config?: any): Promise<AxiosResponse>;
}

declare abstract class AbstractFileManagerAPI implements InterfaceFileManagerAPI {
    client: Client;
    constructor(client: Client);
    abstract initialize(): Promise<AxiosResponse>;
    abstract content(data: any): Promise<AxiosResponse>;
    abstract tree(data: any): Promise<AxiosResponse>;
    abstract selectDisk(data: any): Promise<AxiosResponse>;
    abstract upload(data: any): Promise<AxiosResponse>;
    abstract delete(data: any): Promise<AxiosResponse>;
    abstract paste(data: any): Promise<AxiosResponse>;
    abstract rename(data: any): Promise<AxiosResponse>;
    abstract download(data: any): Promise<AxiosResponse>;
    abstract thumbnails(data: any): Promise<AxiosResponse>;
    abstract preview(data: any): Promise<AxiosResponse>;
    abstract url(data: any): Promise<AxiosResponse>;
    abstract info(data: any): Promise<AxiosResponse>;
    abstract listshare(data: any): Promise<AxiosResponse>;
    abstract share(data: any): Promise<AxiosResponse>;
    abstract unshare(data: any): Promise<AxiosResponse>;
    abstract checkExist(data: any): Promise<AxiosResponse>;
    abstract createDirectory(data: any): Promise<AxiosResponse>;
    abstract createFile(data: any): Promise<AxiosResponse>;
    abstract updateFile(data: any): Promise<AxiosResponse>;
    abstract streamFile(data: any): Promise<AxiosResponse>;
    abstract zip(data: any): Promise<AxiosResponse>;
    abstract unzip(data: any): Promise<AxiosResponse>;
    abstract ckeditor(): Promise<AxiosResponse>;
    abstract tinymce(): Promise<AxiosResponse>;
    abstract tinymce5(): Promise<AxiosResponse>;
    abstract summernote(): Promise<AxiosResponse>;
    abstract fmButton(): Promise<AxiosResponse>;
}

declare class FileManagerAPI extends AbstractFileManagerAPI {
    client: Client;
    constructor(client: Client);
    /**
     * api disk
     */
    initialize: () => Promise<axios.AxiosResponse<any, any>>;
    content: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    tree: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    selectDisk: (disk: string) => Promise<axios.AxiosResponse<any, any>>;
    upload: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    delete: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    paste: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    rename: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    download: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    thumbnails: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    preview: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    url: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    info: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    listshare: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    share: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    unshare: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    checkExist: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    createDirectory: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    createFile: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    updateFile: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    streamFile: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    zip: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    unzip: (data: any) => Promise<axios.AxiosResponse<any, any>>;
    ckeditor: () => Promise<axios.AxiosResponse<any, any>>;
    tinymce: () => Promise<axios.AxiosResponse<any, any>>;
    tinymce5: () => Promise<axios.AxiosResponse<any, any>>;
    summernote: () => Promise<axios.AxiosResponse<any, any>>;
    fmButton: () => Promise<axios.AxiosResponse<any, any>>;
}

/**
 * convert bytes to human
 * @param bytes number
 * @returns
 */
declare const bytesToHuman: (bytes: number) => string;
/**
 * timestamp to date
 * @param timestamp number
 * @returns
 */
declare const timestampToDate: (timestamp: number) => string;
/**
 * extension to icon
 * @param extension string
 * @returns
 */
declare const extensionToIcon: (extension: string) => string;
/**
 * check extension
 * @param extension string
 * @returns
 */
declare const checkExtension: (extension: string) => false | "image" | "audio" | "video" | "text";
/**
 * get type
 * @param extension string
 * @returns
 */
declare const getType: (extension: string) => string;
/**
 * split file name
 * @param fileName string
 * @returns
 */
declare const splitFileName: (fileName: string) => string;

interface LangProviderProps {
    lang: string;
    children: React.ReactNode;
}
declare const LangProvider: React.FC<LangProviderProps>;

export { Client, Clipboard, FileManager, FileManagerAPI, type FileManagerProps, type FileProps, type FolderProps, type Item, LangProvider, type PreviewProps, bytesToHuman, checkExtension, createShare, deleting, download, edit, extensionToIcon, fileToDataUri, getType, info, listShare, newFile, newFolder, paste, previewData, rename, splitFileName, streamFile, thumbnail, timestampToDate, unShare, upload };
