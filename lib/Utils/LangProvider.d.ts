import React from "react";
export interface LangProviderProps {
    lang: string;
    children: React.ReactNode;
}
export declare const LangProvider: React.FC<LangProviderProps>;
export default LangProvider;
