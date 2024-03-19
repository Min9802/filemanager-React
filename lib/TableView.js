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
import React from "react";
import { Button } from "@min98/ui";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { DataTable } from "@min98/ui";
import { bytesToHuman, timestampToDate } from "./Utils/FileUtils";
import MenuContext from "./MenuContext";
const TableView = (_a) => {
    var { API, disk, view, directories, files } = _a, props = __rest(_a, ["API", "disk", "view", "directories", "files"]);
    const { t } = useTranslation();
    const { handleMultipleClick } = props;
    const [dataContent, setDataContent] = React.useState([]);
    React.useEffect(() => {
        if (files && directories) {
            setDataContent([...directories, ...files]);
        }
    }, [files, directories]);
    /**
     * define columns
     */
    const columns = [
        {
            accessorKey: "basename",
            header: ({ column }) => {
                return (_jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [t("label.name"), _jsx(Icon, { icon: "mdi:unfold-more-horizontal", className: "ml-2 h-4 w-4" })] }));
            },
            cell: ({ row, table }) => {
                const data = row.original;
                return (_jsx(MenuContext, Object.assign({ API: API, view: view, disk: disk, data: data, row: row, table: table }, props)));
            },
        },
        {
            accessorKey: "size",
            header: ({ column }) => {
                return (_jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [t("label.size"), _jsx(Icon, { icon: "mdi:unfold-more-horizontal", className: "ml-2 h-4 w-4" })] }));
            },
            cell: ({ row }) => {
                const data = row.original;
                return (_jsx("div", { className: "capitalize", children: data.type == "file" && bytesToHuman(row.getValue("size")) }));
            },
        },
        {
            accessorKey: "type",
            header: ({ column }) => {
                return (_jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [t("label.type"), _jsx(Icon, { icon: "mdi:unfold-more-horizontal", className: "ml-2 h-4 w-4" })] }));
            },
            cell: ({ row }) => {
                var _a;
                const data = row.original;
                return (_jsx("div", { className: "capitalize", children: `${row.getValue("type")} ${(_a = data === null || data === void 0 ? void 0 : data.extension) !== null && _a !== void 0 ? _a : ""}` }));
            },
        },
        {
            accessorKey: "timestamp",
            header: ({ column }) => {
                return (_jsxs(Button, { variant: "ghost", onClick: () => column.toggleSorting(column.getIsSorted() === "asc"), children: [t("label.time"), _jsx(Icon, { icon: "mdi:unfold-more-horizontal", className: "ml-2 h-4 w-4" })] }));
            },
            cell: ({ row }) => (_jsx("div", { className: "capitalize", children: timestampToDate(row.getValue("timestamp")) })),
        },
    ];
    return (_jsx(DataTable, { data: dataContent, columns: columns, search: "basename", callBack: handleMultipleClick }));
};
export default TableView;
