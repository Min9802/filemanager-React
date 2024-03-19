import React from "react";
import { FileProps, FolderProps } from "../FileManager";
interface ModalRenameProps {
    open: boolean;
    onClose: () => void;
    item: FileProps | FolderProps;
    actions: (data: any) => void;
}
declare const ModalRename: React.FC<ModalRenameProps>;
export default ModalRename;
