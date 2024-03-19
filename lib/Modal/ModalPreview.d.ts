import React from "react";
import { PreviewProps } from "../FileManager";
interface ModalPreviewProps {
    open: boolean;
    onClose: () => void;
    item: PreviewProps;
}
declare const ModalPreview: React.FC<ModalPreviewProps>;
export default ModalPreview;
