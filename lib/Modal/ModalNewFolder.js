import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InputForm, Modal } from "@min98/ui";
import { Icon } from "@iconify/react";
import { Button, Form } from "@min98/ui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const ModalNewFolder = ({ open, onClose, actions, }) => {
    const { t } = useTranslation();
    const formFields = [
        {
            name: "name",
            label: t("label.name"),
            type: "text",
            iconStart: _jsx(Icon, { icon: "mdi:label" }),
            placeholder: t("placeholder.name"),
            description: t("label.name"),
        },
        // Add more fields as needed
    ];
    const formSchema = z.object(Object.assign({}, Object.fromEntries(formFields.map((field) => [
        field.name,
        z.string().nonempty(`${field.label} ${t("label.required")}`),
    ]))));
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: Object.assign({}, Object.fromEntries(formFields.map((field) => [field.name, ""]))),
    });
    const Submit = (values) => {
        actions(values);
        onClose();
        form.reset();
    };
    return (_jsx(Modal, { open: open, cancel: onClose, title: t("label.newfile"), children: _jsx(Form, Object.assign({}, form, { children: _jsxs("form", { onSubmit: form.handleSubmit(Submit), className: "space-y-3", children: [formFields.map((field, key) => (_jsx(InputForm, { label: field === null || field === void 0 ? void 0 : field.label, name: field === null || field === void 0 ? void 0 : field.name, iconStart: field === null || field === void 0 ? void 0 : field.iconStart, iconEnd: field === null || field === void 0 ? void 0 : field.iconEnd, type: field === null || field === void 0 ? void 0 : field.type, description: field === null || field === void 0 ? void 0 : field.description, control: form.control }, key))), _jsx(Button, { type: "submit", color: "success", children: t("common.save") })] }) })) }));
};
export default ModalNewFolder;
