import { toast } from "@min98/ui";
import { t } from "i18next";
export const parseError = (error) => {
    console.log(error);
    if (error && error.response) {
        const response = error.response;
        const status = response.data.status;
        const message = response.data.message;
        if (typeof message == 'string') {
            const notify = {
                title: status,
                description: message,
                status: "error",
            };
            toast(notify);
        }
        else {
            Object.keys(message).map((key) => message[key].map((item) => {
                const notify = {
                    title: status,
                    description: item,
                    status: "error",
                };
                toast(notify);
            }));
        }
    }
    else {
        const notify = {
            title: t('label.error'),
            description: t("common.unknown_error"),
            status: "error",
        };
        toast(notify);
    }
};
/**
 * delay callback
 * @param callback
 * @param delay
 */
export const delay = (callback, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            callback();
            resolve();
        }, delay);
    });
};
/**
 * repeat callback
 * @param callback
 * @param delay
 */
export const repeat = (callback, delay) => {
    return new Promise((resolve) => {
        const intervalId = setInterval(() => {
            callback();
            resolve();
        }, delay);
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, 10000); // Resolve after 10 seconds
    });
};
/**
 * copy to clipboard
 * @param data
 */
export const Copy = (data) => {
    try {
        navigator.clipboard.writeText(data);
        const notify = {
            title: t("label.success"),
            description: t("label.clipboard"),
            status: "success",
        };
        toast(notify);
    }
    catch (err) {
        parseError(err);
    }
};
export const Random = (type, length) => {
    var result = "";
    switch (type) {
        case 1:
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
            break;
        case 2:
            var characters = "0123456789";
            break;
        default:
            var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
/**
 * timestamp to date
 * @param timestamp
 * @returns
 */
export const timestampToDate = (timestamp) => {
    const lang = localStorage.getItem('lang');
    if (timestamp === undefined || timestamp === null)
        return "-";
    const date = new Date(timestamp * 1000);
    return date.toLocaleString(lang == "vi" ? "vn" : "en");
};
export const dateTime = (time) => {
    var _a;
    const lang = (_a = localStorage.getItem('lang')) !== null && _a !== void 0 ? _a : "en";
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    };
    return new Date(time).toLocaleDateString(lang, options);
};
export const toggleDataInArray = (arr1, arr2, prop) => {
    const updatedArray = [...arr1];
    const dataIndex = updatedArray.findIndex((item) => item.path === arr2[prop]);
    if (dataIndex !== -1) {
        updatedArray.splice(dataIndex, 1);
    }
    else {
        updatedArray.push(arr2);
    }
    return updatedArray;
};
