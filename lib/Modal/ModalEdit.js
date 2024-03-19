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
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { useTranslation } from "react-i18next";
import CodeMirror from "@uiw/react-codemirror";
import { loadLanguage, langs, } from "@uiw/codemirror-extensions-langs";
import { DialogModal } from "@min98/ui";
import { getType } from "../Utils/FileUtils";
import { download } from "../Utils/ActionUtils";
import { ScrollArea } from "@min98/ui";
const ModalEdit = (_a) => {
    var { API, open, disk, item, onClose, actions } = _a, props = __rest(_a, ["API", "open", "disk", "item", "onClose", "actions"]);
    const { t } = useTranslation();
    const [language, setLanguage] = React.useState("textile");
    const [data, setData] = React.useState("");
    const [value, setValue] = React.useState("");
    React.useEffect(() => {
        if (item) {
            const ext = getType(item.extension);
            if (ext) {
                const lang = Object.keys(langs).find((lang) => { var _a; return (_a = ext.includes(lang)) !== null && _a !== void 0 ? _a : lang.includes(ext); });
                if (lang) {
                    setLanguage(lang);
                }
                else {
                    setLanguage("textile");
                }
            }
            getContent();
        }
    }, [open]);
    /**
     * get content file
     */
    const getContent = () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield download(API, disk, item);
        if (response) {
            if (response.data.extension === "json") {
                setData(JSON.stringify(response.data, null, 4));
            }
            else {
                const text = new TextDecoder().decode(response.data);
                setData(text);
            }
        }
    });
    /**
     * onchange
     */
    const onChange = React.useCallback((val) => {
        setValue(val);
    }, []);
    /**
     * on submit
     */
    const onSubmit = () => __awaiter(void 0, void 0, void 0, function* () {
        actions === null || actions === void 0 ? void 0 : actions(value);
    });
    return (_jsx(DialogModal, { size: "4xl", open: open, cancel: onClose, title: t("label.edit"), action: onSubmit, children: _jsx(ScrollArea, { children: _jsx(CodeMirror, Object.assign({ className: "max-h-150", value: data, height: "auto", 
                // theme={props.theme}
                extensions: [loadLanguage(language)], onChange: onChange }, props)) }) }));
};
export default ModalEdit;
