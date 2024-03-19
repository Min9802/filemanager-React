import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { DialogModal } from "@min98/ui";
import { ImageConfig } from "../configs/constant";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "@min98/ui";
import React from "react";
import { useTranslation } from "react-i18next";
import { bytesToHuman } from "../Utils/FileUtils";
const ModalUpload = ({ open, onClose, actions, onFileChange, multiple, }) => {
    const { t } = useTranslation();
    const [files, setFiles] = React.useState([]);
    const AreaRef = React.useRef(null);
    /**
     * handle Submit
     */
    const handleSubmit = () => {
        actions === null || actions === void 0 ? void 0 : actions();
        setFiles([]);
    };
    /**
     * on file Drop
     * @param e
     */
    const handleFileDrop = React.useCallback((e) => {
        e.preventDefault();
        if (e.dataTransfer.files.length > 0) {
            const updatedList = multiple ? [...files] : [];
            const newFiles = Array.from(e.dataTransfer.files);
            for (const file of newFiles) {
                updatedList.push(file);
            }
            setFiles(updatedList);
            onFileChange(updatedList);
        }
    }, [files, multiple, onFileChange]);
    const handleDragOver = React.useCallback((e) => {
        e.preventDefault();
    }, []);
    const onFileDrop = (e) => {
        if (multiple && e.target.files) {
            const updatedList = [...files];
            const newFile = e.target.files;
            for (const file of Object.values(newFile)) {
                updatedList.push(file);
            }
            setFiles(updatedList);
            onFileChange(updatedList);
        }
        else if (e.target.files) {
            const updatedList = [];
            const newFile = e.target.files[0];
            updatedList.push(newFile);
            setFiles(updatedList);
            onFileChange(updatedList);
        }
    };
    /**
     * file remove
     * @param file
     */
    const fileRemove = (file) => {
        const updatedList = [...files];
        updatedList.splice(files.indexOf(file), 1);
        setFiles(updatedList);
        onFileChange(updatedList);
    };
    /**
     * get type file
     * @param fileType
     * @returns
     */
    const getFileType = (fileType) => {
        const type = fileType.split("/")[1];
        return ImageConfig[type] || ImageConfig.default;
    };
    const onCancel = () => {
        onClose();
        setFiles([]);
    };
    return (_jsx(DialogModal, { open: open, cancel: onCancel, title: t("label.uploadfile"), action: handleSubmit, size: "xl", children: _jsx(Card, { children: _jsxs(CardContent, { children: [_jsx("div", { className: "max-w-xl", ref: AreaRef, onDrop: handleFileDrop, onDragOver: handleDragOver, onDragEnter: handleDragOver, children: _jsxs("label", { className: "flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none", children: [_jsxs("span", { className: "flex items-center space-x-2", children: [_jsx(Icon, { icon: "mdi:cloud-arrow-up-outline", color: "green", fontSize: 35 }), _jsxs("span", { className: "font-medium text-gray-600", children: [t("label.drag-drop"), _jsxs("span", { className: "text-blue-600 underline", children: [",", t("label.or"), t("label.browser")] })] })] }), _jsx("input", { type: "file", name: "files", className: "hidden", onChange: onFileDrop, multiple: multiple || false })] }) }), _jsx("div", { className: "p-3 grid grid-cols-2 gap-2", children: files.map((file, k) => {
                            return (_jsxs("div", { className: "flex flex-row items-center", children: [_jsx("img", { className: "max-h-10", src: getFileType(file.type), alt: "" }), _jsxs("div", { className: "text-left", children: [_jsx("p", { className: "text-dark text-sm break-all", children: file.name }), _jsx("p", { className: "text-gray-400 text-sm", children: bytesToHuman(file.size) })] }), _jsx(Icon, { className: "ml-auto cursor-pointer", icon: "tabler:x", color: "red", fontSize: 25, onClick: () => fileRemove(file) })] }, k));
                        }) })] }) }) }));
};
export default ModalUpload;
