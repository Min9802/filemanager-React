import React from "react";
import { InterfaceFileManagerAPI } from "./apis/InterfaceFileManagerAPI";
interface FolderTreeProps {
    API: InterfaceFileManagerAPI;
    disk: string;
    setSelectFolder: (data: any) => void;
}
declare const FolderTree: React.FC<FolderTreeProps>;
export default FolderTree;
