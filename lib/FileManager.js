var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Header from "./Header";
import { Card, CardContent, CardHeader, toast, useLocalStorage } from "@min98/ui";
import LeftContent from "./LeftContent";
import TableView from "./TableView";
import { getContent, initialize } from "./Utils/ApiUtils";
import { Clipboard, deleting, download, edit, info, newFile, newFolder, paste, previewData, rename, upload, } from "./Utils/ActionUtils";
import { useTranslation } from "react-i18next";
import ModalRename from "./Modal/ModalRename";
import ModalEdit from "./Modal/ModalEdit";
import ModalDelete from "./Modal/ModalDelete";
import ModalNewFile from "./Modal/ModalNewFile";
import ModalNewFolder from "./Modal/ModalNewFolder";
import ModalUpload from "./Modal/ModalUpload";
import ModalPreview from "./Modal/ModalPreview";
import GridView from "./GridView";
import ListDisk from "./ListDisk";
import ModalDetail from "./Modal/ModalDetail";
import { repeat } from "./Utils/systemUtil";
import LangProvider from "./Utils/LangProvider";
export const FileManager = ({ API, lang = "en", callback, }) => {
    const { t } = useTranslation();
    const [view, setView] = React.useState("list");
    const [config, setConfig] = React.useState(false);
    const [disks, setDisks] = React.useState([]);
    const [selectDisk, setSelectDisk] = React.useState("public");
    const [directories, setDirectories] = React.useState([]);
    const [files, setFiles] = React.useState([]);
    const [selectFolder, setSelectFolder] = React.useState();
    const [currentItem, setCurrentItem] = React.useState();
    const [reload, setReload] = React.useState(false);
    const [selectedList, setSelectedList] = React.useState([]);
    const [clipboard, setClipboard] = React.useState();
    const [filesUpload, setFileUpload] = React.useState([]);
    const [preview, setPreview] = React.useState({});
    const [modalDetail, setModalDetail] = React.useState(false);
    const [modalUpload, setModalUpload] = React.useState(false);
    const [modalPreview, setModalPreview] = React.useState(false);
    const [modalRename, setModalRename] = React.useState(false);
    const [modalEdit, setModalEdit] = React.useState(false);
    const [modalDelete, setModalDelete] = React.useState(false);
    const [modalNewFile, setModalNewFile] = React.useState(false);
    const [modalNewFolder, setModalNewFolder] = React.useState(false);
    const [language, setLanguage] = useLocalStorage("lang", "");
    /**
     * init config
     */
    React.useEffect(() => {
        if (!config) {
            InitConfig();
        }
    }, []);
    React.useEffect(() => {
        if (language) {
            setLanguage(lang);
        }
    }, [lang]);
    /**
     * set disks
     */
    React.useEffect(() => {
        if (config) {
            const disks_config = Object.keys(config.disks);
            setDisks(disks_config);
        }
    }, [config]);
    /**
     * set select disk
     */
    React.useEffect(() => {
        if (disks.length > 0 && !selectDisk) {
            setSelectDisk(disks[0]);
        }
    }, [disks]);
    /**
     * get content when select disk
     */
    React.useEffect(() => {
        GetContent(selectDisk, "/");
        setReload(false);
    }, [selectDisk]);
    /**
     * get content when select folder or reload
     */
    React.useEffect(() => {
        if (selectFolder || reload) {
            if (selectFolder) {
                GetContent(selectDisk, selectFolder === null || selectFolder === void 0 ? void 0 : selectFolder.path);
                setReload(false);
            }
            else {
                GetContent(selectDisk, "/");
                setReload(false);
            }
        }
    }, [selectFolder, reload]);
    /**
     * set timeout for reset selected
     */
    React.useEffect(() => {
        repeat(() => {
            setSelectFolder(undefined);
            setClipboard(undefined);
            setSelectedList([]);
            setCurrentItem(undefined);
        }, 60000);
    }, []);
    /**
     * callbacks for parent
     */
    React.useEffect(() => {
        if (currentItem && currentItem.type == "file") {
            getInfo(currentItem);
        }
        if (selectedList) {
            getInfo(selectedList);
        }
    }, [currentItem]);
    /**
     * info file
     * @param item
     */
    const getInfo = (item) => __awaiter(void 0, void 0, void 0, function* () {
        if (item.length > 0) {
            let infoFiles = [];
            for (let i = 0; i < item.length; i++) {
                const infoFile = yield info({
                    API,
                    data: { disk: selectDisk, path: item[i].path },
                });
                if (infoFile) {
                    infoFiles.push(infoFile);
                }
            }
        }
        else {
            const infoFile = yield info({
                API,
                data: { disk: selectDisk, path: item.path },
            });
            if (infoFile) {
                callback === null || callback === void 0 ? void 0 : callback(infoFile);
            }
        }
    });
    /**
     * toggle reload state
     */
    const toggleReload = () => {
        setReload(!reload);
    };
    /**
     * toggle modal new file
     */
    const toggleNewFile = () => {
        setModalNewFile(!modalNewFile);
    };
    /**
     * toggle modal new folder
     */
    const toggleNewFolder = () => {
        setModalNewFolder(!modalNewFolder);
    };
    /**
     * toggle modal upload
     */
    const toggleUpload = () => {
        setModalUpload(!modalUpload);
    };
    /**
     * toggle modal detail
     * @param data
     */
    const toggleModalDetail = (data) => {
        setModalDetail(!modalDetail);
        setCurrentItem(data);
    };
    /**
     * toggle modal preview
     */
    const togglePreview = (data) => __awaiter(void 0, void 0, void 0, function* () {
        setModalPreview(!modalPreview);
        const dataPreview = yield previewData({ API, disk: selectDisk, data });
        setPreview(dataPreview);
    });
    /**
     * toggle modal edit
     * @param data
     */
    const toggleEdit = (data) => {
        setCurrentItem(data);
        setModalEdit(!modalEdit);
    };
    /**
     * toggle modal rename
     * @param data
     */
    const toggleRename = (data) => {
        setCurrentItem(data);
        setModalRename(!modalRename);
    };
    /**
     * toggle modal delete
     * @param data
     */
    const toggleDelete = (data) => {
        setCurrentItem(data);
        setModalDelete(!modalDelete);
    };
    /**
     * handle one click
     * @param data
     */
    const handleOneClick = (data) => {
        setCurrentItem(data);
    };
    /**
     * handle multile click
     */
    const handleMultileClick = (data) => {
        setSelectedList(data);
    };
    /**
     * handle double click
     * @param data
     */
    const handleDoubleClick = (data) => {
        setCurrentItem(data);
        setSelectFolder(data);
        setSelectedList([]);
    };
    /**
     * handle new file
     * @param data
     */
    const handleNewFile = (data) => __awaiter(void 0, void 0, void 0, function* () {
        yield newFile({
            API,
            disk: selectDisk,
            name: data.name,
            path: selectFolder ? selectFolder.path : null,
        });
        setReload(true);
        setCurrentItem(undefined);
    });
    /**
     * handle new folder
     * @param data
     */
    const handleNewFolder = (data) => __awaiter(void 0, void 0, void 0, function* () {
        yield newFolder({
            API,
            disk: selectDisk,
            name: data.name,
            path: selectFolder ? selectFolder.path : null,
        });
        setReload(true);
        setCurrentItem(undefined);
    });
    /**
     * handle rename
     * @param data
     */
    const handleRename = (data) => __awaiter(void 0, void 0, void 0, function* () {
        yield rename({ API, disk: selectDisk, data });
        setReload(true);
        setCurrentItem(undefined);
    });
    /**
     * handle edit file
     * @param data
     */
    const handleEdit = (data) => __awaiter(void 0, void 0, void 0, function* () {
        const formData = new FormData();
        formData.append("disk", selectDisk);
        formData.append("path", currentItem.dirname);
        formData.append("file", new Blob([data]), currentItem.basename);
        yield edit({ API, data: formData });
        setModalEdit(false);
        setCurrentItem(undefined);
    });
    /**
     * handle upload
     */
    const handleUpload = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const formData = new FormData();
        for (let i = 0; i < filesUpload.length; i++) {
            formData.append("files[]", filesUpload[i]);
        }
        formData.append("disk", selectDisk);
        formData.append("path", (_a = selectFolder === null || selectFolder === void 0 ? void 0 : selectFolder.path) !== null && _a !== void 0 ? _a : "/");
        yield upload({ API, data: formData });
        setReload(true);
        setModalUpload(false);
    });
    /**
     * handle download
     * @param data
     */
    const handleDownload = (data) => __awaiter(void 0, void 0, void 0, function* () {
        const tempLink = document.createElement("a");
        tempLink.style.display = "none";
        tempLink.setAttribute("download", data.basename);
        const response = yield download(API, selectDisk, data);
        if (response && (response === null || response === void 0 ? void 0 : response.status) === 200) {
            const responseData = response === null || response === void 0 ? void 0 : response.data;
            tempLink.href = responseData;
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        }
    });
    /**
     * handle copy
     * @param data
     */
    const handleCopy = (data) => __awaiter(void 0, void 0, void 0, function* () {
        if (data) {
            const dataCopy = yield Clipboard(selectDisk, [data], "copy");
            setClipboard(dataCopy);
        }
        else if (selectedList.length > 0) {
            const dataCopy = yield Clipboard(selectDisk, selectedList, "copy");
            setClipboard(dataCopy);
        }
        else if (currentItem) {
            const dataCopy = yield Clipboard(selectDisk, [currentItem], "copy");
            setClipboard(dataCopy);
        }
        else {
            const notify = {
                title: t("label.error"),
                description: t("label.need_select_item"),
                status: "error",
            };
            toast(notify);
        }
        setSelectedList([]);
        const notify = {
            title: t("label.success"),
            description: t("label.can_paste"),
            status: "success",
        };
        toast(notify);
    });
    /**
     * handle cut
     * @param data
     */
    const handleCut = (data) => __awaiter(void 0, void 0, void 0, function* () {
        if (data) {
            const dataCopy = yield Clipboard(selectDisk, [data], "cut");
            setClipboard(dataCopy);
        }
        else if (selectedList.length > 0) {
            const dataCopy = yield Clipboard(selectDisk, selectedList, "cut");
            setClipboard(dataCopy);
        }
        else if (currentItem) {
            const dataCopy = yield Clipboard(selectDisk, [currentItem], "cut");
            setClipboard(dataCopy);
        }
        else {
            const notify = {
                title: t("label.success"),
                description: t("label.need_select_item"),
                status: "error",
            };
            toast(notify);
        }
        setSelectedList([]);
        const notify = {
            title: t("label.success"),
            description: t("label.can_paste"),
            status: "success",
        };
        toast(notify);
    });
    /**
     * handle paste
     */
    const handlePaste = () => __awaiter(void 0, void 0, void 0, function* () {
        if (clipboard) {
            if (selectFolder) {
                yield paste({
                    API,
                    disk: selectDisk,
                    data: clipboard,
                    path: selectFolder === null || selectFolder === void 0 ? void 0 : selectFolder.path,
                });
            }
            else {
                yield paste({
                    API,
                    disk: selectDisk,
                    data: clipboard,
                    path: "/",
                });
            }
        }
        else {
            const notify = {
                title: t("label.error"),
                description: t("label.need_select_item"),
                status: "error",
            };
            toast(notify);
        }
        setSelectedList([]);
        setClipboard(undefined);
        setReload(true);
    });
    /**
     * handle delete
     */
    const handleDelete = () => __awaiter(void 0, void 0, void 0, function* () {
        if (selectedList.length > 0) {
            const items = selectedList.map((item) => {
                return { path: item.path, type: item.type };
            });
            yield deleting({ API, disk: selectDisk, items });
        }
        else if (currentItem) {
            yield deleting({
                API,
                disk: selectDisk,
                items: [
                    {
                        path: currentItem.path,
                        type: currentItem.type,
                    },
                ],
            });
        }
        else {
            const notify = {
                title: t("label.error"),
                description: t("label.need_select_item"),
                status: "error",
            };
            toast(notify);
        }
        setSelectedList([]);
        setReload(true);
        setModalDelete(false);
        setCurrentItem(undefined);
    });
    /**
     * InitConfig
     */
    const InitConfig = () => __awaiter(void 0, void 0, void 0, function* () {
        const config = yield initialize(API);
        setConfig(config);
    });
    /**
     * get content
     * @param disk
     * @param path
     */
    const GetContent = (disk, path) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield getContent(API, disk, path);
        const { directories, files } = data;
        setDirectories(directories);
        setFiles(files);
    });
    return (_jsx(LangProvider, { lang: lang, children: _jsxs(Card, { children: [_jsx(ModalDetail, { API: API, open: modalDetail, onClose: () => {
                        setModalDetail(false);
                        setCurrentItem(undefined);
                    }, disk: selectDisk, item: currentItem }), _jsx(ModalPreview, { open: modalPreview, onClose: () => {
                        setModalPreview(false);
                        setPreview({});
                    }, item: preview }), _jsx(ModalRename, { open: modalRename, onClose: () => {
                        setModalRename(false);
                        setCurrentItem(undefined);
                    }, item: currentItem, actions: handleRename }), _jsx(ModalEdit, { API: API, disk: selectDisk, open: modalEdit, onClose: () => {
                        setModalEdit(false);
                        setCurrentItem(undefined);
                    }, item: currentItem, actions: handleEdit }), _jsx(ModalNewFile, { open: modalNewFile, onClose: () => {
                        setModalNewFile(false);
                    }, actions: handleNewFile }), _jsx(ModalNewFolder, { open: modalNewFolder, onClose: () => {
                        setModalNewFolder(false);
                    }, actions: handleNewFolder }), _jsx(ModalUpload, { open: modalUpload, onClose: () => {
                        setModalUpload(false);
                        setFileUpload([]);
                    }, onFileChange: setFileUpload, actions: handleUpload, multiple: true }), _jsx(ModalDelete, { open: modalDelete, onClose: () => {
                        setModalDelete(false);
                    }, actions: handleDelete }), _jsx(CardHeader, { className: "border-b-1 border-b-dark", children: _jsx(Header, { selected: selectedList.length > 0 ? true : currentItem ? true : false, clipboard: clipboard ? true : false, setView: setView, toggleReload: toggleReload, toggleNewFile: toggleNewFile, toggleNewFolder: toggleNewFolder, toggleUpload: toggleUpload, handleCopy: handleCopy, handleCut: handleCut, handlePaste: handlePaste }) }), _jsx(CardContent, { children: _jsxs("div", { className: "grid lg:grid-cols-8 sm:grid-cols-6", children: [_jsx("div", { className: "border-r-2 border-dark h-full lg:col-span-2 sm:col-span-6", children: _jsx(LeftContent, { API: API, selectDisk: selectDisk, setSelectFolder: setSelectFolder }) }), _jsxs("div", { className: "col-span-6", children: [_jsx(ListDisk, { disks: disks, selectDisk: selectDisk, selectFolder: selectFolder, setSelectDisk: setSelectDisk, setSelectFolder: setSelectFolder }), view == "list" ? (_jsx(TableView, { API: API, view: view, disk: selectDisk, directories: directories, files: files, clipboard: clipboard, current: currentItem, currents: selectedList, setSelectDisk: setSelectDisk, handleMultipleClick: handleMultileClick, handleOneClick: handleOneClick, handleDoubleClick: handleDoubleClick, handleDownload: handleDownload, handleCopy: handleCopy, handleCut: handleCut, handlePaste: handlePaste, toggleModalDetail: toggleModalDetail, togglePreview: togglePreview, toggleEdit: toggleEdit, toggleRename: toggleRename, toggleDelete: toggleDelete })) : (_jsx(GridView, { API: API, view: view, disk: selectDisk, directories: directories, files: files, clipboard: clipboard, current: currentItem, currents: selectedList, setSelectDisk: setSelectDisk, handleMultipleClick: handleMultileClick, handleOneClick: handleOneClick, handleDoubleClick: handleDoubleClick, handleDownload: handleDownload, handleCopy: handleCopy, handleCut: handleCut, handlePaste: handlePaste, toggleModalDetail: toggleModalDetail, togglePreview: togglePreview, toggleEdit: toggleEdit, toggleRename: toggleRename, toggleDelete: toggleDelete }))] })] }) })] }) }));
};
FileManager.displayName = "FileManager";
export default FileManager;
