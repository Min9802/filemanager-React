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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "@iconify/react";
import { Button, Col, Flex, Grid } from "@min98/ui";
import { useTranslation } from "react-i18next";
import { ButtonGroup } from "@min98/ui";
const Header = (_a) => {
    var { clipboard, selected, setView } = _a, props = __rest(_a, ["clipboard", "selected", "setView"]);
    const { t } = useTranslation();
    const { toggleReload, toggleNewFile, toggleNewFolder, toggleUpload, handleCopy, handleCut, handlePaste, } = props;
    /**
     * handle SetView
     * @param view
     */
    const handleSetView = (view) => {
        setView(view);
    };
    return (_jsxs(Grid, { col: "4", align: "center", justify: "center", className: "lg:!grid-cols-4 sm:grid-cols-1", children: [_jsx(Col, { col: "3", className: "", children: _jsxs(Flex, { justify: "start", align: "start", children: [_jsx(ButtonGroup, { children: _jsx(Button, { color: "secondary", onClick: toggleReload, tooltip: t("label.reload"), children: _jsx(Icon, { icon: "mdi:reload" }) }) }), _jsxs(ButtonGroup, { children: [_jsx(Button, { color: "secondary", onClick: toggleNewFile, tooltip: t("label.newfile"), children: _jsx(Icon, { icon: "mdi:file" }) }), _jsx(Button, { color: "secondary", onClick: toggleNewFolder, tooltip: t("label.newfolder"), children: _jsx(Icon, { icon: "mdi:folder-plus-outline" }) }), _jsx(Button, { color: "secondary", onClick: toggleUpload, tooltip: t("label.upload"), children: _jsx(Icon, { icon: "mdi:cloud-upload" }) })] }), _jsxs(ButtonGroup, { children: [_jsx(Button, { color: "secondary", onClick: () => handleCopy(null), disabled: !selected ? true : false, tooltip: t("label.copy"), children: _jsx(Icon, { icon: "mdi:content-copy" }) }), _jsx(Button, { color: "secondary", onClick: () => handleCut(null), disabled: !selected ? true : false, tooltip: t("label.cut"), children: _jsx(Icon, { icon: "mdi:content-cut" }) }), _jsx(Button, { color: "secondary", onClick: handlePaste, disabled: !clipboard ? true : false, tooltip: t("label.paste"), children: _jsx(Icon, { icon: "mdi:content-paste" }) })] })] }) }), _jsx(Col, { col: "1", className: "", children: _jsx(Flex, { justify: "end", align: "end", children: _jsxs(ButtonGroup, { children: [_jsx(Button, { color: "secondary", onClick: () => handleSetView("list"), tooltip: t("label.tableView"), children: _jsx(Icon, { icon: "mdi:list-box" }) }), _jsx(Button, { color: "secondary", onClick: () => handleSetView("grid"), tooltip: t("label.gridView"), children: _jsx(Icon, { icon: "mdi:grid" }) })] }) }) })] }));
};
export default Header;
