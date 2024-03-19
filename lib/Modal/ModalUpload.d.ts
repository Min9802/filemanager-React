import React from "react";
interface ModalUploadProps {
    open: boolean;
    onClose: () => void;
    actions: () => void;
    onFileChange: (data: any) => void;
    multiple?: boolean;
}
declare const ModalUpload: React.FC<ModalUploadProps>;
export default ModalUpload;
