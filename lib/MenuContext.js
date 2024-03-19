var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { checkExtension, extensionToIcon, getType, splitFileName, } from "./Utils/FileUtils";
import classNames from "classnames";
import { thumbnail } from "./Utils/ActionUtils";
import { delay } from "./Utils/systemUtil";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipArrow, TooltipPortal, ContextMenuCustom, } from "@min98/ui";
/**
 * render item list
 * @param param0
 * @returns
 */
const RenderItemList = ({ item, handleClick }) => {
    return (_jsx("span", { className: "inline-flex", onClick: handleClick, children: item.type === "file" ? (_jsxs(_Fragment, { children: [_jsx(Icon, { icon: extensionToIcon(item.extension), className: "mr-1" }), _jsx("p", { children: item.filename })] })) : (_jsxs(_Fragment, { children: [_jsx(Icon, { icon: "mdi:folder-open", className: "mr-1" }), _jsx("p", { children: splitFileName(item.basename) })] })) }));
};
/**
 * render item grid
 * @param param0
 * @returns
 */
const RenderItemGrid = React.forwardRef((_a, ref) => {
    var { API, item, active, disk, handleClick, handleMultipleClick } = _a, props = __rest(_a, ["API", "item", "active", "disk", "handleClick", "handleMultipleClick"]);
    const [dataContent, setDataContent] = React.useState(item);
    React.useEffect(() => {
        setDataContent(item);
    }, [item]);
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { asChild: true, children: _jsx("button", Object.assign({ type: "button" }, props, { ref: ref, className: classNames("group relative p-2 w-[120px] h-[120px] hover:rounded-md hover:shadow-4 justify-center", "active:bg-blue-200 active:rounded-md active:shadow-4", active && "active"), onClick: handleClick, children: dataContent.type === "file" ? (_jsxs(_Fragment, { children: [checkExtension(dataContent.extension) == "image" ? (_jsx(RenderPreView, { API: API, item: dataContent, disk: disk, handleMultipleClick: handleMultipleClick })) : (_jsx(Icon, { icon: extensionToIcon(dataContent.extension), className: "text-5xl mr-auto ml-auto" })), _jsx("p", { className: "break-all", children: splitFileName(dataContent.filename) })] })) : (_jsxs(_Fragment, { children: [_jsx(Icon, { icon: "mdi:folder-open", className: "text-5xl mr-auto ml-auto", color: "#FCD34D" }), _jsx("p", { children: splitFileName(dataContent.basename) })] })) })) }), _jsx(TooltipPortal, { children: _jsxs(TooltipContent, { children: [dataContent.basename, _jsx(TooltipArrow, { className: "TooltipArrow" })] }) })] }) }));
});
/**
 * render preview
 * @param param0
 * @returns
 */
const RenderPreView = ({ API, item, disk }) => {
    const [dataContent, setDataContent] = React.useState(item);
    const [dataUrl, setUrl] = React.useState(null);
    React.useEffect(() => {
        setDataContent(item);
    }, [item]);
    /**
     * hook set url
     */
    React.useEffect(() => {
        if ((dataUrl && dataUrl.path !== dataContent.path) || dataUrl === null) {
            delay(() => __awaiter(void 0, void 0, void 0, function* () {
                const url = yield thumbnail({ API, disk, item: dataContent });
                setUrl({
                    url,
                    path: dataContent.path,
                });
            }), 700);
        }
    }, [dataContent]);
    return (_jsx(_Fragment, { children: dataUrl && (_jsx("img", { className: "mr-auto ml-auto", src: dataUrl && dataUrl.path === dataContent.path ? dataUrl.url : null, alt: dataContent.filename })) }));
};
const MenuContext = (_a) => {
    var { API, disk, view, clipboard, current, currents = [], data, row, table } = _a, props = __rest(_a, ["API", "disk", "view", "clipboard", "current", "currents", "data", "row", "table"]);
    const { t } = useTranslation();
    const [dataContent, setDataContent] = React.useState(data);
    React.useEffect(() => {
        setDataContent(data);
    }, [data]);
    /**
     * define actions
     */
    const actions = [
        {
            title: t("label.detail"),
            shortcut: _jsx(Icon, { icon: "mdi:information-outline" }),
            action: () => props === null || props === void 0 ? void 0 : props.toggleModalDetail(data),
        },
        {
            title: t("label.preview"),
            shortcut: _jsx(Icon, { icon: "mdi:eye" }),
            action: () => props === null || props === void 0 ? void 0 : props.togglePreview(data),
            disabled: data.type == "file" && checkExtension(data.extension) ? false : true,
        },
        {
            title: t("label.rename"),
            shortcut: _jsx(Icon, { icon: "mdi:rename-box" }),
            action: () => props === null || props === void 0 ? void 0 : props.toggleRename(data),
        },
        {
            title: t("label.edit"),
            shortcut: _jsx(Icon, { icon: "mdi:pencil" }),
            action: () => props === null || props === void 0 ? void 0 : props.toggleEdit(data),
            disabled: data.type == "file" && getType(data.extension) ? false : true,
        },
        {
            title: t("label.copy"),
            shortcut: _jsx(Icon, { icon: "mdi:content-copy" }),
            action: () => {
                const count = table === null || table === void 0 ? void 0 : table.getFilteredSelectedRowModel().rows.length;
                if (count > 0) {
                    props === null || props === void 0 ? void 0 : props.handleCopy(null);
                }
                else {
                    props === null || props === void 0 ? void 0 : props.handleCopy(data);
                }
            },
        },
        {
            title: t("label.cut"),
            shortcut: _jsx(Icon, { icon: "mdi:content-cut" }),
            action: () => {
                const count = table === null || table === void 0 ? void 0 : table.getFilteredSelectedRowModel().rows.length;
                if (count > 0) {
                    props === null || props === void 0 ? void 0 : props.handleCut(null);
                }
                else {
                    props === null || props === void 0 ? void 0 : props.handleCut(data);
                }
            },
        },
        {
            title: t("label.paste"),
            shortcut: _jsx(Icon, { icon: "mdi:content-paste" }),
            action: () => props === null || props === void 0 ? void 0 : props.handlePaste(),
            disabled: clipboard ? false : true,
        },
        {
            title: t("label.download"),
            shortcut: _jsx(Icon, { icon: "mdi:download" }),
            action: () => props === null || props === void 0 ? void 0 : props.handleDownload(data),
        },
        {
            title: t("label.delete"),
            shortcut: _jsx(Icon, { icon: "mdi:delete", color: "red" }),
            action: () => {
                props === null || props === void 0 ? void 0 : props.toggleDelete(data);
                const timeOut = setInterval(() => {
                    table === null || table === void 0 ? void 0 : table.resetRowSelection();
                }, 5000);
                return clearInterval(timeOut);
            },
        },
    ];
    /**
     * handle click
     * @param e
     */
    const handleClick = React.useCallback((e) => {
        // e.preventDefault();
        const count = e.detail;
        const isCtrlPressed = e.ctrlKey;
        if (count === 1) {
            if (view === "list") {
                if (isCtrlPressed) {
                    toggleDataInArray(data);
                }
                else {
                    row.toggleSelected();
                    props === null || props === void 0 ? void 0 : props.handleOneClick(data);
                }
            }
            else if (view === "grid") {
                if (isCtrlPressed) {
                    toggleDataInArray(data);
                }
                else {
                    props === null || props === void 0 ? void 0 : props.handleOneClick(data);
                    props === null || props === void 0 ? void 0 : props.handleMultipleClick([]);
                }
            }
        }
        else if (count === 2 && data.type === "dir") {
            table === null || table === void 0 ? void 0 : table.resetRowSelection();
            props === null || props === void 0 ? void 0 : props.handleDoubleClick(data);
        }
    }, [data, view, row, table, props === null || props === void 0 ? void 0 : props.handleOneClick, props === null || props === void 0 ? void 0 : props.handleDoubleClick]);
    /**
     * toggle data in array
     * @param data
     */
    const toggleDataInArray = (data) => {
        const updatedArray = [...currents];
        const dataIndex = updatedArray.findIndex((item) => item.path === data.path);
        if (dataIndex !== -1) {
            updatedArray.splice(dataIndex, 1);
        }
        else {
            updatedArray.push(data);
        }
        props === null || props === void 0 ? void 0 : props.handleMultipleClick(updatedArray);
    };
    return (_jsx(ContextMenuCustom, { className: classNames("items-center", view == "list" ? "flex" : "flex-col"), asChild: view == "list" ? false : true, title: view == "list" && data ? (_jsx(RenderItemList, { item: data, handleClick: handleClick })) : view == "grid" && data ? (_jsx(RenderItemGrid, { item: dataContent, API: API, disk: disk, active: (current === null || current === void 0 ? void 0 : current.path) === data.path
                ? true
                : currents.includes(data)
                    ? true
                    : false, handleClick: handleClick, handleMultipleClick: props === null || props === void 0 ? void 0 : props.handleMultipleClick })) : null, list: actions }));
};
export default MenuContext;
