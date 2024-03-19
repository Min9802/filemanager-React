import React from "react";
interface ModalNewFolderProps {
    open: boolean;
    onClose: () => void;
    actions: (data: any) => void;
}
declare const ModalNewFolder: React.FC<ModalNewFolderProps>;
export default ModalNewFolder;
