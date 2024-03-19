import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "@iconify/react";
import { Badge, Button } from "@min98/ui";
import React from "react";
import classNames from "classnames";
const ListDisk = ({ disks, selectDisk, selectFolder, setSelectDisk, setSelectFolder, }) => {
    const [breadcrumb, setBreadcrumb] = React.useState([]);
    /**
     * hook
     */
    React.useEffect(() => {
        if (selectFolder && selectFolder.type) {
            const pathSplit = selectFolder === null || selectFolder === void 0 ? void 0 : selectFolder.path.split("/");
            setBreadcrumb(pathSplit);
        }
    }, [selectFolder]);
    React.useEffect(() => {
        setBreadcrumb([]);
    }, [selectDisk]);
    /**
     * handle click breadcrumb
     * @param path
     */
    const handleClickBreadcrumb = (path) => {
        const index = breadcrumb.indexOf(path);
        if (index !== -1 && index >= 0) {
            const breadcrumbFilter = breadcrumb.slice(0, index + 1);
            const mergedPath = breadcrumbFilter.join("/");
            setSelectFolder({ path: mergedPath });
            setBreadcrumb(breadcrumbFilter);
        }
    };
    return (_jsxs("div", { className: "flex flex-col gap-1 border-b-1 border-b-dark py-2", children: [_jsx("div", { className: "inline-flex p-1 gap-1", children: disks.length > 0 &&
                    disks.map((disk, k) => (_jsxs(Badge, { color: "secondary-light", className: classNames("cursor-pointer", disk === selectDisk && "bg-dark/40"), onClick: () => setSelectDisk(disk), children: [_jsx(Icon, { icon: "clarity:hard-disk-solid", className: "mr-1" }), disk] }, k))) }), _jsxs("div", { className: "inline-flex bg-primary-light p-1 gap-1", children: [_jsx(Button, { color: "secondary-light", size: "sm", onClick: () => {
                            setSelectFolder({
                                path: "/",
                            });
                            setBreadcrumb([]);
                        }, children: _jsx(Icon, { icon: "clarity:hard-disk-solid", className: "mr-1" }) }), breadcrumb.map((item, k) => (_jsxs(React.Fragment, { children: ["/", _jsx(Button, { color: "secondary-light", size: "sm", onClick: () => handleClickBreadcrumb(item), children: item }, k)] }, k)))] })] }));
};
export default ListDisk;
