import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from "@min98/ui";
import { useTranslation } from "react-i18next";
const ModalDelete = ({ open, onClose, actions, }) => {
    const { t } = useTranslation();
    return (_jsx(Modal, { open: open, cancel: onClose, title: t("label.delete"), action: actions, children: _jsx("h4", { className: "text-red-500", children: t("ask.delete") }) }));
};
export default ModalDelete;
