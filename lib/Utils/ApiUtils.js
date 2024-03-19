var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * init
 * @returns
 */
export const initialize = (API) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield API.initialize();
    const config = response.data.config;
    return config;
});
/**
 * get content
 * @param disk string
 * @param path string
 * @returns
 */
export const getContent = (API, disk, path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield API.content({ disk, path });
    const directories = response.data.directories;
    const files = response.data.files;
    return {
        directories,
        files,
    };
});
/**
 * get tree
 * @param disk string
 * @param path string
 * @returns
 */
export const getTree = (API, disk, path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield API.tree({ disk, path });
    const directories = response.data.directories;
    return directories;
});
