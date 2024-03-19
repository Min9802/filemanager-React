import React from "react";
import { ClipboardProps } from "./Utils/ActionUtils";
import { InterfaceFileManagerAPI } from "./apis/InterfaceFileManagerAPI";
export interface ViewProps {
    API: InterfaceFileManagerAPI;
    disk: string;
    view: string;
    clipboard?: ClipboardProps;
    current?: Item;
    currents?: Item[];
    directories: FolderProps[];
    files: FileProps[];
    setSelectDisk: (disk: string) => void;
    handleMultipleClick: (data: Item[]) => void;
    handleOneClick: (data: Item) => void;
    handleDoubleClick: (data: Item) => void;
    handleDownload: (data: Item) => void;
    handleCopy: (data: any) => void;
    handleCut: (data: any) => void;
    handlePaste: () => void;
    toggleModalDetail: (data: Item) => void;
    togglePreview: (data: FileProps) => void;
    toggleRename: (data: Item) => void;
    toggleEdit: (data: Item) => void;
    toggleDelete: (data: Item) => void;
}
export type Item = {
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
export type FolderProps = {
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
export type FileProps = {
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
export type PreviewProps = {
    type?: string;
    data?: {
        title?: string;
        src?: string;
        type?: string;
    };
};
export interface FileManagerProps {
    API: InterfaceFileManagerAPI;
    lang: string;
    callback?: (data: any) => void;
}
export declare const FileManager: React.FC<FileManagerProps>;
export default FileManager;
