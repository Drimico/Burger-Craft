import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
	.use(Backend) // Loads translations from /public/locales
	.use(LanguageDetector) // Detects user browser language
	.use(initReactI18next) // Passes i18n instance to react-i18next
	.init({
		fallbackLng: "en",
		debug: true,
		interpolation: {},
	});

export default i18n;
