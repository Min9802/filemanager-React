import React from "react";
import { Item } from "../FileManager";
import { InterfaceFileManagerAPI } from "../apis/InterfaceFileManagerAPI";
interface ModalDetailProps {
    API: InterfaceFileManagerAPI;
    open: boolean;
    onClose: () => void;
    disk: string;
    item?: Item;
    actions?: (data: any) => void;
}
declare const ModalDetail: React.FC<ModalDetailProps>;
export default ModalDetail;
