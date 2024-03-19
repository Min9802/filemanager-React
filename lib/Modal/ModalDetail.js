var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "@min98/ui";
import { Icon } from "@iconify/react";
import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Col, Grid, toast } from "@min98/ui";
import { timestampToDate } from "../Utils/FileUtils";
import { createShare, listShare, unShare } from "../Utils/ActionUtils";
const ModalDetail = ({ API, open, disk, item, onClose, }) => {
    const { t } = useTranslation();
    const [data, setData] = React.useState({});
    const [shares, setShares] = React.useState([]);
    React.useEffect(() => {
        setData(item);
        if (disk == "nextcloud" && item && open) {
            getShare(item);
        }
    }, [item]);
    /**
     * handle copy to clipboard
     * @param data any
     */
    const handleCopy = (data) => {
        navigator.clipboard.writeText(data);
        const notify = {
            title: t("label.clipboard"),
            description: t("label.clipboard"),
            status: "success",
        };
        toast(notify);
    };
    /**
     * get share link
     * @param disk string
     * @param data any
     */
    const getShare = (data) => __awaiter(void 0, void 0, void 0, function* () {
        const list = yield listShare({ API, data });
        setShares(list);
    });
    /**
     * handle share
     * @param disk string
     * @param data any
     */
    const handleShare = (disk, data) => __awaiter(void 0, void 0, void 0, function* () {
        yield createShare({ API, disk, data });
        yield getShare(data);
    });
    /**
     * handle unshare
     * @param id number
     */
    const handleUnShare = (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield unShare({ API, id });
        yield getShare(data);
    });
    return (_jsx(Modal, { open: open, cancel: onClose, title: t("label.detail"), children: data && (_jsxs(Col, { col: "2", children: [_jsxs(Col, { col: "1", children: [_jsxs(Grid, { col: "3", children: [_jsxs("h4", { className: "capitalize font-bold", children: [t("label.basename"), ":"] }), _jsx("span", { className: "break-all", children: data.basename }), _jsx("div", { className: "justify-end", children: _jsx(Button, { size: "sm", tooltip: t("label.copy"), onClick: () => handleCopy(data.basename), children: _jsx(Icon, { icon: "mdi:content-copy" }) }) })] }), _jsxs(Grid, { col: "3", children: [_jsxs("h4", { className: "capitalize font-bold", children: [t("label.dirname"), ":"] }), _jsx("span", { className: "break-all", children: data.dirname }), _jsx("div", { className: "justify-end", children: _jsx(Button, { size: "sm", tooltip: t("label.copy"), onClick: () => handleCopy(data.dirname), children: _jsx(Icon, { icon: "mdi:content-copy" }) }) })] }), _jsxs(Grid, { col: "3", children: [_jsxs("h4", { className: "capitalize font-bold", children: [t("label.path"), ":"] }), _jsx("span", { className: "break-all", children: data.path }), _jsx("div", { className: "justify-end", children: _jsx(Button, { size: "sm", tooltip: t("label.copy"), onClick: () => handleCopy(data.path), children: _jsx(Icon, { icon: "mdi:content-copy" }) }) })] }), _jsxs(Grid, { col: "3", children: [_jsxs("h4", { className: "capitalize font-bold", children: [t("label.time"), ":"] }), _jsx("span", { className: "break-all", children: timestampToDate(data.timestamp) })] }), _jsxs(Grid, { col: "3", children: [_jsxs("h4", { className: "capitalize font-bold", children: [t("label.path"), ":"] }), _jsx("span", { children: data.type })] }), _jsxs(Grid, { col: "3", children: [_jsxs("h4", { className: "capitalize font-bold", children: [t("label.visibility"), ":"] }), _jsx("span", { children: data.visibility })] })] }), _jsx(Col, { col: "1", children: disk == "nextcloud" && (_jsxs(React.Fragment, { children: [_jsx(Button, { onClick: () => handleShare(disk, data), color: "success", tooltip: t("label.create_share"), children: _jsx(Icon, { icon: "mdi:plus-box-multiple" }) }), _jsxs(Grid, { col: "1", children: [_jsx("h4", { className: "capitalize font-bold", children: t("label.share") }), _jsx("table", { children: _jsx("tbody", { children: open &&
                                                shares.length > 0 &&
                                                shares.map((item, k) => (_jsx("tr", { children: _jsxs("td", { className: "flex flex-row", children: [_jsx("span", { className: "", children: item.url }), _jsx(Button, { size: "sm", tooltip: t("label.copy"), onClick: () => handleCopy(item.url), children: _jsx(Icon, { icon: "mdi:content-copy" }) }), _jsx(Button, { size: "sm", tooltip: t("label.unshare"), onClick: () => handleUnShare(item.id), children: _jsx(Icon, { icon: "mdi:close-thick", color: "red" }) })] }) }, k))) }) })] })] })) })] })) }));
};
export default ModalDetail;
