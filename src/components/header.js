import React from "react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "./footer";
import { useDarkmode } from "./useDarkmode";

export function Header({ siteTitle, author, description, currentWork }) {
  const { t, i18n } = useTranslation();
  const darkMode = useDarkmode();
  const currentLang = i18n.language;
  return (
    <header className="flex items-center justify-center h-screen relative border-t border-gray-500/30">
      <div className="absolute top-0 right-0 p-5 flex justify-center">
        <button
          disabled={darkMode.mode === "light"}
          onClick={() => darkMode.toggle("light")}
          className="p-1 opacity-50 disabled:opacity-100"
          title={t("header.nightmode.light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
            />
          </svg>
        </button>
        <button
          disabled={darkMode.mode === "dark"}
          onClick={() => darkMode.toggle("dark")}
          className="p-1 opacity-50 disabled:opacity-100"
          title={t("header.nightmode.night")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
        </button>
        <button
          disabled={darkMode.mode === "auto"}
          onClick={() => darkMode.toggle("auto")}
          className="p-1 opacity-50 disabled:opacity-100"
          title={t("header.nightmode.system")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600 dark:text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
            />
          </svg>
        </button>
      </div>
      <div className="p-8 lg:p-4 text-center text-gray-400 leading-none">
        <img
          className="rounded-full pointer-events-none inline-block w-20 lg:w-28 shadow-lg ring-1 ring-gray-500/20"
          src="https://avatars.githubusercontent.com/u/14944450?v=4"
        />
        <h1 className="text-3xl mb-4 lg:text-6xl text-center lg:leading-tight font-bold text-transparent mt-1 bg-clip-text bg-gradient-to-l from-teal-300 to-blue-700">
          {author}
        </h1>
        <h2 className="text-xl mt-2">
          <span role="img" aria-label="waving hand">
            👋
          </span>{" "}
          {description} {currentWork}
        </h2>
        <div className="text-center mt-12">
          <a
            href="#projects"
            className="bg-gradient-to-br from-teal-300 to-blue-700 font-m text-gray-300edium text-white rounded-full px-5 py-3 shadow-lg shadow-blue-200 dark:shadow-blue-700/50"
          >
            {t("header.myprojects")} &darr;
          </a>
        </div>
      </div>

      <div className="absolute left-0 top-0 p-5 text-gray-400 text-md text-center space-x-2">
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
