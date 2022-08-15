import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./footer";

export function Header({ siteTitle, author, description, currentWork }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  return (
    <header className="flex items-center justify-center h-screen relative">
      <div className="p-8 lg:p-4 text-gray-400 leading-none">
        <h1 className="text-3xl lg:text-6xl lg:leading-tight font-bold text-transparent mt-1 bg-clip-text bg-gradient-to-l from-teal-300 to-blue-700">
          {t("header.title.l1", { name: author })} <br />
          {t("header.title.l2")}
        </h1>
        <h2 className="text-xl mt-2">
          <span role="img" aria-label="waving hand">
            👋
          </span>{" "}
          {description} - {currentWork}
        </h2>
        <div className="text-center mt-12">
          <a
            href="#projects"
            className="bg-gradient-to-br from-teal-300 to-blue-700 font-medium text-white rounded-full px-5 py-3 shadow-lg shadow-blue-200"
          >
            {t("header.myprojects")} &rarr;
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 mb-5 text-gray-400 text-lg text-center space-x-2">
        <LanguageSwitcher currentLang={currentLang} locale="fr">
          FR
        </LanguageSwitcher>
        <LanguageSwitcher currentLang={currentLang} locale="en">
          EN
        </LanguageSwitcher>
      </div>
    </header>
  );
}
