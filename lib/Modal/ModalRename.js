import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, InputForm } from "@min98/ui";
import { Icon } from "@iconify/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Form } from "@min98/ui";
const ModalRename = ({ open, item, actions, onClose, }) => {
    const { t } = useTranslation();
    const formFields = [
        {
            name: "newName",
            label: t("label.newName"),
            type: "text",
            iconStart: _jsx(Icon, { icon: "mdi:label" }),
            iconEnd: (item === null || item === void 0 ? void 0 : item.hasOwnProperty("extension")) && item.type == "file" ? (_jsx("span", { className: "py-2", children: item === null || item === void 0 ? void 0 : item.extension })) : (""),
            placeholder: t("placeholder.newName"),
            description: t("label.newName"),
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
        const DirName = item.dirname;
        const newName = DirName
            ? `${DirName}/${values.newName}${(item === null || item === void 0 ? void 0 : item.hasOwnProperty("extension")) && item.type == "file"
                ? `.${item.extension}`
                : ""}`
            : `${values.newName}${(item === null || item === void 0 ? void 0 : item.hasOwnProperty("extension")) && item.type == "file"
                ? `.${item.extension}`
                : ""}`;
        const data = {
            oldName: item.path,
            newName: newName,
            type: item.type.toLocaleLowerCase(),
        };
        actions(data);
        onClose();
        form.reset();
    };
    React.useEffect(() => {
        if (item) {
            if (item.hasOwnProperty("extension")) {
                form.setValue("newName", item === null || item === void 0 ? void 0 : item.filename);
            }
            else {
                form.setValue("newName", item === null || item === void 0 ? void 0 : item.basename);
            }
        }
    }, [item]);
    return (_jsx(Modal, { open: open, cancel: onClose, title: t("label.rename"), children: _jsx(Form, Object.assign({}, form, { children: _jsxs("form", { onSubmit: form.handleSubmit(Submit), className: "space-y-3", children: [formFields.map((field, key) => (_jsx(InputForm, { label: field === null || field === void 0 ? void 0 : field.label, name: field === null || field === void 0 ? void 0 : field.name, iconStart: field === null || field === void 0 ? void 0 : field.iconStart, iconEnd: field === null || field === void 0 ? void 0 : field.iconEnd, type: field === null || field === void 0 ? void 0 : field.type, description: field === null || field === void 0 ? void 0 : field.description, control: form.control }, key))), _jsx(Button, { type: "submit", color: "success", children: t("common.save") })] }) })) }));
};
export default ModalRename;
