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
import { getTree } from "./Utils/ApiUtils";
import classNames from "classnames";
const FolderTree = ({ API, disk, setSelectFolder, }) => {
    const [tree, setTree] = React.useState([]);
    /**
     * hook get tree
     */
    React.useEffect(() => {
        getTree(API, disk, "").then((data) => {
            setTree(data);
        });
    }, [disk]);
    React.useEffect(() => { }, [tree]);
    /**
     * handle Click Tree
     * @param disk
     * @param path
     */
    const handleClickTree = (disk, path) => __awaiter(void 0, void 0, void 0, function* () {
        const Tree = tree.find((el) => el.path == path);
        if (Tree.open) {
            Tree.open = false;
            const treeFilter = tree.filter((el) => el.dirname != path);
            setTree(treeFilter);
        }
        else {
            Tree.open = true;
            const newTree = yield getTree(API, disk, path);
            MergeTree(newTree);
        }
    });
    /**
     * merge tree
     * @param dirs
     */
    const MergeTree = (dirs) => {
        const mergedTree = Array.from(new Set([...tree, ...dirs].map((item) => item.path))).map((path) => {
            const item = [...tree, ...dirs].find((dir) => dir.path === path);
            return item;
        });
        setTree(mergedTree);
    };
    /**
     * render item
     * @param items
     * @returns
     */
    const RenderItem = ({ item }) => {
        return (_jsxs("li", { children: [_jsxs("p", { className: "flex items-center rounded-md px-2 py-1 hover:bg-gray-200", children: [_jsx("span", { className: classNames(item.open
                                ? "icon-[line-md--minus-square]"
                                : item.props.hasSubdirectories
                                    ? "icon-[line-md--plus-square-twotone]"
                                    : "icon-[line-md--minus-square]", "mr-1"), onClick: () => handleClickTree(disk, item.path) }), _jsx("span", { className: "cursor-pointer", onClick: () => setSelectFolder(item), children: item.basename })] }), item.props.hasSubdirectories ? _jsx(RenderChild, { item: item }) : null] }));
    };
    /**
     * render tree children
     * @param items
     * @returns
     */
    const RenderChild = ({ item }) => {
        const items = tree.filter((el) => el.dirname == item.path);
        return (_jsx("ul", { className: "pl-2", children: items.length > 0 &&
                items.map((item, k) => {
                    return (_jsx(React.Fragment, { children: _jsx(RenderItem, { item: item }) }, k));
                }) }));
    };
    /**
     * render tree
     * @param items
     * @returns
     */
    const RenderTree = ({ items }) => {
        const itemParent = items.filter((el) => el.dirname == "");
        return (_jsx("ul", { children: itemParent.length > 0 &&
                itemParent.map((item, k) => {
                    return (_jsx(React.Fragment, { children: _jsx(RenderItem, { item: item }) }, k));
                }) }));
    };
    return _jsx(RenderTree, { items: tree });
};
export default FolderTree;
