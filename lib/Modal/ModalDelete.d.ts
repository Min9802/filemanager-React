import React from "react";
interface ModalDeleteProps {
    open: boolean;
    onClose: () => void;
    actions?: () => void;
}
declare const ModalDelete: React.FC<ModalDeleteProps>;
export default ModalDelete;
