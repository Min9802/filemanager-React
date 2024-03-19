var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { parseError } from "../Utils/systemUtil";
import { toast } from "@min98/ui";
import { checkExtension } from "./FileUtils";
export const upload = (_a) => __awaiter(void 0, [_a], void 0, function* ({ API, data }) {
    try {
        const response = yield API.upload(data);
        const message = response.data.result.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
    }
    catch (err) {
        parseError(err);
    }
});
export const newFile = (_b) => __awaiter(void 0, [_b], void 0, function* ({ API, disk, name, path }) {
    try {
        const dataSubmit = {
            disk: disk,
            name: name,
            path: path,
        };
        const response = yield API.createFile(dataSubmit);
        const message = response.data.result.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
    }
    catch (err) {
        parseError(err);
    }
});
/**
 * new Folder
 * @param disk string
 * @param name string
 * @param path string
 */
export const newFolder = (_c) => __awaiter(void 0, [_c], void 0, function* ({ API, disk, name, path }) {
    try {
        const dataSubmit = {
            disk: disk,
            name: name,
            path: path,
        };
        const response = yield API.createDirectory(dataSubmit);
        const message = response.data.result.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
    }
    catch (err) {
        parseError(err);
    }
});
/**
 * download
 * @param API API
 * @param disk string
 * @param data FileProps
 * @returns Promise<AxiosResponse>
 */
export const download = (API, disk, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dataSubmit = {
            disk: disk,
            path: data.path,
        };
        const response = yield API.download(dataSubmit);
        return response;
    }
    catch (err) {
        parseError(err);
        return err;
    }
});
export const Clipboard = (disk, data, type) => __awaiter(void 0, void 0, void 0, function* () {
    const files = data.filter((value) => value.type === 'file').map((value) => value.path);
    const directories = data.filter((value) => value.type === 'dir').map((value) => value.path);
    const clipboard = {
        type: type,
        disk: disk,
        directories: directories,
        files: files,
    };
    return clipboard;
});
export const paste = (_d) => __awaiter(void 0, [_d], void 0, function* ({ API, disk, data, path }) {
    try {
        const dataSubmit = {
            disk: disk,
            path: path,
            clipboard: data,
        };
        const response = yield API.paste(dataSubmit);
        const message = response.data.result.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
        return true;
    }
    catch (err) {
        parseError(err);
        return false;
    }
});
export const deleting = (_e) => __awaiter(void 0, [_e], void 0, function* ({ API, disk, items }) {
    try {
        const dataSubmit = {
            disk: disk,
            items: items
        };
        const response = yield API.delete(dataSubmit);
        const message = response.data.result.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
        return true;
    }
    catch (err) {
        parseError(err);
        return false;
    }
});
export const rename = (_f) => __awaiter(void 0, [_f], void 0, function* ({ API, disk, data }) {
    try {
        const dataSubmit = Object.assign({ disk: disk }, data);
        const response = yield API.rename(dataSubmit);
        const message = response.data.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
        return true;
    }
    catch (err) {
        parseError(err);
        return false;
    }
});
/**
 * file to data uri
 * @param blob Blob
 * @returns
 */
export const fileToDataUri = (blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve(reader.result);
        };
        reader.onerror = () => {
            reject(reader.error);
        };
        reader.readAsDataURL(blob);
    });
};
export const thumbnail = (_g) => __awaiter(void 0, [_g], void 0, function* ({ API, disk, item }) {
    try {
        const dataSubmit = {
            disk: disk,
            path: item === null || item === void 0 ? void 0 : item.path,
            v: item === null || item === void 0 ? void 0 : item.timestamp
        };
        const response = yield API.thumbnails(dataSubmit);
        const mimeType = response.headers["content-type"].toLowerCase();
        const blob = new Blob([response.data], { type: mimeType });
        const blobUrl = yield fileToDataUri(blob);
        return blobUrl;
    }
    catch (err) {
        parseError(err);
        return "";
    }
});
export const streamFile = (_h) => __awaiter(void 0, [_h], void 0, function* ({ API, data }) {
    try {
        const response = yield API.streamFile(data);
        const mimeType = response.headers["content-type"].toLowerCase();
        const blob = new Blob([response.data], { type: mimeType });
        const blobUrl = fileToDataUri(blob);
        return blobUrl;
    }
    catch (err) {
        return "";
    }
});
export const previewData = (_j) => __awaiter(void 0, [_j], void 0, function* ({ API, disk, data }) {
    let DataPreview = {};
    const dataSubmit = {
        disk: disk,
        path: data.path,
    };
    try {
        const type = checkExtension(data.extension);
        switch (type) {
            case "image":
                const imageBase64 = yield streamFile({ API, data: Object.assign({}, dataSubmit) });
                DataPreview = {
                    type: type,
                    data: {
                        title: data.basename,
                        type: `image/${data.extension}`,
                        src: imageBase64,
                    },
                };
                break;
            case "video":
                const videoUrl = yield streamFile({ API, data: Object.assign({}, dataSubmit) });
                DataPreview = {
                    type: type,
                    data: {
                        title: data.basename,
                        src: videoUrl,
                        type: `video/${data.extension}`,
                    },
                };
                break;
            case "audio":
                const audioUrl = yield streamFile({ API, data: Object.assign({}, dataSubmit) });
                DataPreview = {
                    type: type,
                    data: {
                        title: data.basename,
                        src: audioUrl,
                        type: `audio/${data.extension}`,
                    },
                };
                break;
            default:
                break;
        }
        return DataPreview;
    }
    catch (err) {
        parseError(err);
        return DataPreview;
    }
});
export const edit = (_k) => __awaiter(void 0, [_k], void 0, function* ({ API, data }) {
    try {
        const response = yield API.updateFile(data);
        const message = response.data.result.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
        return true;
    }
    catch (err) {
        parseError(err);
        return false;
    }
});
export const info = (_l) => __awaiter(void 0, [_l], void 0, function* ({ API, data }) {
    try {
        const response = yield API.info({ disk: data.disk, path: data.path });
        const info = response.data.content;
        return info;
    }
    catch (err) {
        parseError(err);
        return false;
    }
});
export const listShare = (_m) => __awaiter(void 0, [_m], void 0, function* ({ API, data }) {
    try {
        const dataSubmit = {
            path: data.path,
        };
        const response = yield API.listshare(dataSubmit);
        const file = response.data.content;
        const shares = file.shares;
        return shares;
    }
    catch (err) {
        parseError(err);
    }
});
export const createShare = (_o) => __awaiter(void 0, [_o], void 0, function* ({ API, disk, data }) {
    try {
        const dataSubmit = {
            disk: disk,
            path: data.path,
        };
        const response = yield API.share(dataSubmit);
        const url = response.data.content;
        const message = response.data.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
        return url;
    }
    catch (err) {
        parseError(err);
    }
});
export const unShare = (_p) => __awaiter(void 0, [_p], void 0, function* ({ API, id }) {
    try {
        const response = yield API.unshare({ id });
        const message = response.data.message;
        const notify = {
            title: message,
            description: message,
            status: "success",
        };
        toast(notify);
    }
    catch (err) {
        parseError(err);
    }
});
