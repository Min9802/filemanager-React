import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "../lang/en.json"; // Import your language JSON files
import viTranslation from "../lang/vi.json"; // Import your language JSON files
// Set up i18n
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    resources: {
        en: { translation: enTranslation },
        vi: { translation: viTranslation },
    },
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
export const LangProvider = ({ lang = "en", children, }) => {
    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);
    return _jsx(_Fragment, { children: children });
};
export default LangProvider;
