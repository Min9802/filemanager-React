import React from "react";
import { FileProps } from "../FileManager";
import { InterfaceFileManagerAPI } from "../apis/InterfaceFileManagerAPI";
interface ModalEditProps {
    API: InterfaceFileManagerAPI;
    open: boolean;
    onClose: () => void;
    actions?: (data: any) => void;
    disk: string;
    item: FileProps;
}
declare const ModalEdit: React.FC<ModalEditProps>;
export default ModalEdit;
