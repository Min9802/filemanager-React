import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { DialogModal } from "@min98/ui";
import { Label } from "@min98/ui";
const ModalPreview = ({ open, onClose, item }) => {
    var _a, _b, _c, _d, _e;
    const { t } = useTranslation();
    return (_jsx(DialogModal, { open: open, cancel: onClose, title: t("label.preview"), size: "xl", children: item && item.type == "image" ? (_jsxs("div", { className: "items-center justify-center", children: [_jsx(Label, { children: (_a = item === null || item === void 0 ? void 0 : item.data) === null || _a === void 0 ? void 0 : _a.title }), _jsx("img", { className: "object-scale-down h-100 ml-auto mr-auto", src: (_b = item === null || item === void 0 ? void 0 : item.data) === null || _b === void 0 ? void 0 : _b.src })] })) : item.type == "video" || item.type == "audio" ? (_jsxs("div", { className: "ml-auto mr-auto", children: [_jsx(Label, { className: "text-center", children: (_c = item === null || item === void 0 ? void 0 : item.data) === null || _c === void 0 ? void 0 : _c.title }), _jsx(ReactPlayer, { width: "auto", height: "auto", url: [
                        {
                            src: (_d = item === null || item === void 0 ? void 0 : item.data) === null || _d === void 0 ? void 0 : _d.src,
                            type: (_e = item === null || item === void 0 ? void 0 : item.data) === null || _e === void 0 ? void 0 : _e.type,
                        },
                    ], controls: true, muted: true })] })) : // <Plyr
            null }));
};
export default ModalPreview;
