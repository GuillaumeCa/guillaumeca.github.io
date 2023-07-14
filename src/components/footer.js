import { format, formatDistance } from "date-fns";
import fr from "date-fns/locale/fr";
import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitchLink from "./LanguageSwitchLink";

export function LanguageSwitcher({ currentLang, locale, children }) {
  return (
    <LanguageSwitchLink
      className={`${
        currentLang === locale
          ? "text-gray-400"
          : "text-gray-400/50 hover:text-gray-400/70"
      } text-xl md:text-base`}
      locale={locale}
    >
      {children}
    </LanguageSwitchLink>
  );
}

const locales = {
  fr,
  en: undefined,
};

export function Footer({ lastUpdate }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="mt-28">
      <div className="mb-3 text-gray-400 text-lg text-center space-x-2">
        <LanguageSwitcher currentLang={currentLang} locale="fr">
          FR
        </LanguageSwitcher>
        <LanguageSwitcher currentLang={currentLang} locale="en">
          EN
        </LanguageSwitcher>
      </div>
      <footer className="p-8 text-gray-400 text-center">
        <span className="font-semibold">
          © {new Date().getFullYear()} Guillaume Carré
        </span>
        {` - `}
        <span>
          {t("footer.built-with")}
          {` `}
          <a className="font-bold hover:underline" href="https://nextjs.org">
            Nextjs
          </a>
        </span>
        {` - `}
        <span>
          {t("footer.updated")}{" "}
          <time title={format(lastUpdate, "PPPppp")}>
            {formatDistance(lastUpdate, new Date(), {
              addSuffix: true,
              locale: locales[currentLang],
            })}
          </time>
        </span>
      </footer>
    </div>
  );
}
