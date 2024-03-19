### Package File Manager 
**Frontend Package File Manager for**
- [min98/laravel-filemanager](https://packagist.org/packages/min98/laravel-filemanager)

### Documentation

<!-- @import "[TOC]" {cmd="toc" depthFrom=1 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

  - [Package File Manager](#package-file-manager)
  - [Documentation](#documentation)
- [Use](#use)

<!-- /code_chunk_output -->


## Use
```tsx
import { Client, FileManagerAPI, FileManager } from "@min98/filemanager-react";
const token = LocalStorage.getItem("access_token");
const lang = LocalStorage.getItem("lang");
const client = new Client(
    "http://127.0.0.1:8000/api/v1/fm",
    true,
    token,
    "en"
);
const API = new FileManagerAPI(client);
<FileManager API={API} lang={lang} />
``` 
* can customize the file manager if you not use  API follow interface
- [FileManagerAPIInterface](https://github.com/Min9802/filemanager-React/blob/main/lib/apis/InterfaceFileManagerAPI.d.ts)
* example default file manager for 
-  [min98/FileManager](https://packagist.org/packages/min98/laravel-filemanager)
-  [FileManagerAPI](https://github.com/Min9802/filemanager-React/blob/main/lib/apis/FileManagerAPI.js)
```tsx
import { Client } from "./Client";
import { AbstractFileManagerAPI } from "./AbstractFileManagerAPI ";
export class FileManagerAPI extends AbstractFileManagerAPI {
    public client: Client;
    constructor(client: Client) {
        super(client,);
        this.client = client;
    }
    /**
     * api disk
     */
    initialize = (disk: string, path: string = "") => {
        return this.client.createRequest("get", "initialize", {
            params: {
                disk,
                path
            }
        });
    };
    content = (disk: string, path: string = "") => {
        return this.client.createRequest("get", "content", {
            params: {
                disk,
                path
            }
        });
    };
    // Continue method follow AbstractFileManagerAPI
}
```