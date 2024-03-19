import React from "react";
interface ModalNewFileProps {
    open: boolean;
    onClose: () => void;
    actions: (data: any) => void;
}
declare const ModalNewFile: React.FC<ModalNewFileProps>;
export default ModalNewFile;
