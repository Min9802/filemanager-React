import React from "react";
import { FolderProps } from "./FileManager";
interface ListDiskProps {
    disks: string[];
    selectDisk: string;
    selectFolder?: FolderProps;
    setSelectDisk: (disk: string) => void;
    setSelectFolder: (data: FolderProps) => void;
}
declare const ListDisk: React.FC<ListDiskProps>;
export default ListDisk;
