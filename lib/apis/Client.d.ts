import { AxiosResponse } from "axios";
export declare class Client {
    private API_SERVER;
    private Authorize;
    private token;
    private lang;
    constructor(API_SERVER: string, Authorize: boolean, token: string, lang: string);
    createRequest(method: string, path: string, data?: any, config?: any): Promise<AxiosResponse>;
}
