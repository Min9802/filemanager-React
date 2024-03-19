import { FileProps, FolderProps, Item, PreviewProps } from "../FileManager";
import { InterfaceFileManagerAPI } from "../apis/InterfaceFileManagerAPI";
import { AxiosResponse } from "axios";
/**
 * upload file
 * @param disk string
 * @param path string
 * @param overwrite boolean
 * @param files File[]
 */
export type API = InterfaceFileManagerAPI;
export type uploadProps = {
    API: API;
    data: FormData;
};
export declare const upload: ({ API, data }: uploadProps) => Promise<void>;
/**
 * new file
 * @param disk string
 * @param name string
 * @param path string
 */
export type newFileOrFolderProps = {
    API: API;
    disk: string;
    name: string;
    path: string | null;
};
export declare const newFile: ({ API, disk, name, path }: newFileOrFolderProps) => Promise<void>;
/**
 * new Folder
 * @param disk string
 * @param name string
 * @param path string
 */
export declare const newFolder: ({ API, disk, name, path }: newFileOrFolderProps) => Promise<void>;
/**
 * download
 * @param API API
 * @param disk string
 * @param data FileProps
 * @returns Promise<AxiosResponse>
 */
export declare const download: (API: InterfaceFileManagerAPI, disk: string, data: FileProps) => Promise<AxiosResponse>;
/**
 * copy
 * @param disk string
 * @param data Item[]
 * @param type string
 * @returns
 */
export type ClipboardProps = {
    type: string;
    disk: string;
    directories: string[];
    files: string[];
};
export declare const Clipboard: (disk: string, data: Item[], type: string) => Promise<ClipboardProps>;
/**
 * paste
 * @param disk string
 * @param data any
 * @param path string
 * @returns
 */
export type PasteProps = {
    API: API;
    disk: string;
    data: ClipboardProps;
    path: string;
};
export declare const paste: ({ API, disk, data, path }: PasteProps) => Promise<boolean>;
/**
 * delete
 * @param disk: string
 * @param items: any
 * @returns
 */
export type DeletingProps = {
    API: API;
    disk: string;
    items: {
        type: string;
        path: string;
    }[];
};
export declare const deleting: ({ API, disk, items }: DeletingProps) => Promise<boolean>;
/**
 * rename
 * @param disk string
 * @param data data
 * @returns
 */
export type RenameProps = {
    API: API;
    disk: string;
    data: FileProps | FolderProps;
};
export declare const rename: ({ API, disk, data }: RenameProps) => Promise<boolean>;
/**
 * file to data uri
 * @param blob Blob
 * @returns
 */
export declare const fileToDataUri: (blob: Blob) => Promise<string | ArrayBuffer | null>;
/**
 * thumbnail
 * @param disk string
 * @param item any
 * @returns
 */
export type thumbnailProps = {
    API: API;
    disk: string;
    item: FileProps;
};
export declare const thumbnail: ({ API, disk, item }: thumbnailProps) => Promise<any>;
/**
 * stream file
 * @param data FormData
 * @returns
 */
export type StreamProps = {
    API: API;
    data: {
        disk: string;
        path: string;
    };
};
export declare const streamFile: ({ API, data }: StreamProps) => Promise<any>;
/**
 * preview data
 * @param disk string
 * @param data FileProps
 * @returns
 */
export type PreviewDataProps = {
    API: API;
    disk: string;
    data: FileProps;
};
export declare const previewData: ({ API, disk, data }: PreviewDataProps) => Promise<PreviewProps>;
/**
 * edit file
 * @param formData FormData
 * @returns
 */
export type EditProps = {
    API: API;
    data: any;
};
export declare const edit: ({ API, data }: EditProps) => Promise<boolean>;
/**
 * get info file
 * @param disk
 * @param path
 * @returns
 */
export type InfoProps = {
    API: API;
    data: {
        disk: string;
        path: string;
    };
};
export declare const info: ({ API, data }: InfoProps) => Promise<AxiosResponse | any>;
/**
 * list share
 * @param disk string
 * @param data any
 * @returns
 */
export type listShareProps = {
    API: API;
    data: FileProps | FolderProps;
};
export declare const listShare: ({ API, data }: listShareProps) => Promise<void | any>;
/**
 * create share
 * @param disk string
 * @param data any
 * @returns
 */
export type createShareProps = {
    API: API;
    disk: string;
    data: FileProps | FolderProps;
};
export declare const createShare: ({ API, disk, data }: createShareProps) => Promise<void>;
/**
 * unshare
 * @param id string
 */
export type unShareProps = {
    API: API;
    id: number;
};
export interface UnShareInterface {
    (props: unShareProps): Promise<void>;
}
export declare const unShare: UnShareInterface;
