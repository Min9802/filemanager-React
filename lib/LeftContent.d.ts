import React from "react";
import { FolderProps } from "./FileManager";
import { InterfaceFileManagerAPI } from "./apis/InterfaceFileManagerAPI";
interface LeftContentProps {
    API: InterfaceFileManagerAPI;
    selectDisk: string;
    setSelectFolder: (data: FolderProps) => void;
}
declare const LeftContent: React.FC<LeftContentProps>;
export default LeftContent;
