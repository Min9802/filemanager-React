import { AbstractFileManagerAPI } from "./AbstractFileManagerAPI ";
export class FileManagerAPI extends AbstractFileManagerAPI {
    constructor(client) {
        super(client);
        /**
         * api disk
         */
        this.initialize = () => {
            return this.client.createRequest("get", "initialize");
        };
        this.content = (data) => {
            return this.client.createRequest("get", "content", {
                params: data
            });
        };
        this.tree = (data) => {
            return this.client.createRequest("get", "tree", {
                params: data
            });
        };
        this.selectDisk = (disk) => {
            return this.client.createRequest("get", "select-disk", {
                params: {
                    disk
                }
            });
        };
        this.upload = (data) => {
            return this.client.createRequest("post", "upload", data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        };
        this.delete = (data) => {
            return this.client.createRequest("post", "delete", data);
        };
        this.paste = (data) => {
            return this.client.createRequest("post", "paste", data);
        };
        this.rename = (data) => {
            return this.client.createRequest("post", "rename", data);
        };
        this.download = (data) => {
            return this.client.createRequest("get", "download", {
                responseType: "arraybuffer",
                params: data,
            });
        };
        this.thumbnails = (data) => {
            return this.client.createRequest("get", "thumbnails", {
                responseType: "arraybuffer",
                params: data,
            });
        };
        this.preview = (data) => {
            return this.client.createRequest("get", "preview", {
                responseType: "arraybuffer",
                params: data,
            });
        };
        this.url = (data) => {
            return this.client.createRequest("get", "url", {
                params: data,
            });
        };
        this.info = (data) => {
            return this.client.createRequest("get", "info", {
                params: data,
            });
        };
        this.listshare = (data) => {
            return this.client.createRequest("post", "listshare", data);
        };
        this.share = (data) => {
            return this.client.createRequest("post", "share", data);
        };
        this.unshare = (data) => {
            return this.client.createRequest("post", "unshare", data);
        };
        this.checkExist = (data) => {
            return this.client.createRequest("post", "check-exist", data);
        };
        this.createDirectory = (data) => {
            return this.client.createRequest("post", "create-directory", data);
        };
        this.createFile = (data) => {
            return this.client.createRequest("post", "create-file", data);
        };
        this.updateFile = (data) => {
            return this.client.createRequest("post", "update-file", data);
        };
        this.streamFile = (data) => {
            return this.client.createRequest("get", "stream-file", {
                responseType: "arraybuffer",
                params: data,
            });
        };
        this.zip = (data) => {
            return this.client.createRequest("post", "zip", data);
        };
        this.unzip = (data) => {
            return this.client.createRequest("post", "unzip", data);
        };
        this.ckeditor = () => {
            return this.client.createRequest("get", "ckeditor");
        };
        this.tinymce = () => {
            return this.client.createRequest("get", "tinymce");
        };
        this.tinymce5 = () => {
            return this.client.createRequest("get", "tinymce5");
        };
        this.summernote = () => {
            return this.client.createRequest("get", "summernote");
        };
        this.fmButton = () => {
            return this.client.createRequest("get", "fm-button");
        };
        this.client = client;
    }
}
export default FileManagerAPI;
