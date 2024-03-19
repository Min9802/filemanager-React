import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "@iconify/react";
import { Button, Flex } from "@min98/ui";
import React from "react";
import FolderTree from "./FolderTree";
const LeftContent = ({ selectDisk, API, setSelectFolder, }) => {
    return (_jsxs(React.Fragment, { children: [_jsxs(Button, { variant: "ghost", onClick: () => {
                    setSelectFolder({ path: "/" });
                }, children: [_jsx(Icon, { icon: "clarity:hard-disk-solid", className: "mr-1" }), selectDisk] }), _jsx(Flex, { className: "hidden md:block", children: _jsx(FolderTree, { API: API, disk: selectDisk, setSelectFolder: setSelectFolder }) })] }));
};
export default LeftContent;
