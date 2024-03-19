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
import { Col, Flex, ScrollArea } from "@min98/ui";
import MenuContext from "./MenuContext";
const GridView = (_a) => {
    var { disk, view, clipboard, current, currents, directories, files } = _a, props = __rest(_a, ["disk", "view", "clipboard", "current", "currents", "directories", "files"]);
    const [dataContent, setDataContent] = React.useState([]);
    /**
     * init data
     */
    React.useEffect(() => {
        setDataContent([...directories, ...files]);
    }, [files, directories]);
    return (_jsx(Col, { col: "1", children: _jsx(ScrollArea, { className: "min-h-[400px] max-h-[600px] overflow-scroll", children: _jsx(Flex, { align: "center", justify: "center", wrap: "wrap", gap: "1", className: "mt-2 overflow-scroll", children: dataContent &&
                    dataContent.length > 0 &&
                    dataContent.map((item, k) => {
                        return (_jsx(MenuContext, Object.assign({ view: view, disk: disk, data: item, clipboard: clipboard, current: current, currents: currents }, props), k));
                    }) }) }) }));
};
export default GridView;
