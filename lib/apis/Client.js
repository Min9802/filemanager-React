import Axios from "axios";
export class Client {
    constructor(API_SERVER, Authorize, token, lang) {
        var _a;
        this.Authorize = false;
        this.lang = 'en';
        this.API_SERVER = API_SERVER;
        this.Authorize = Authorize;
        this.token = token;
        this.lang = lang;
        Axios.create({
            baseURL: `${this.API_SERVER}`,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "X-CSRF-TOKEN": (_a = document.head
                    .querySelector('meta[name="csrf-token"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content"),
            },
        });
        Axios.defaults.headers.common["Language"] = this.lang;
        if (this.Authorize && this.token) {
            Axios.defaults.headers.common["Authorization"] = `Bearer ${this.token}`;
        }
        Axios.interceptors.request.use((config) => {
            return Promise.resolve(config);
        }, (error) => Promise.reject(error));
        Axios.interceptors.response.use((response) => Promise.resolve(response), (error) => {
            return Promise.reject(error);
        });
    }
    createRequest(method, path, data, config) {
        switch (method) {
            case "get":
                return Axios.get(`${this.API_SERVER}/${path}`, data);
            case "post":
                return Axios.post(`${this.API_SERVER}/${path}`, data, config);
            default:
                return Promise.reject(new Error(`Unsupported HTTP method: ${method}`));
        }
    }
}
