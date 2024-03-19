import React from "react";
interface HeaderProps {
    clipboard?: boolean;
    selected?: boolean;
    setView: (view: string) => void;
    props?: any;
    toggleReload: () => void;
    toggleNewFile: () => void;
    toggleNewFolder: () => void;
    toggleUpload: () => void;
    handleCopy: (data: any) => void;
    handleCut: (data: any) => void;
    handlePaste: () => void;
}
declare const Header: React.FC<HeaderProps>;
export default Header;
