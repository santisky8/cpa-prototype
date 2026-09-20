import { useI18n } from "../i18n/I18nContext";
import { useTheme } from "../theme/ThemeContext";

export default function UtilBar() {
  const { t, lang, toggleLang } = useI18n();
  const { dark, toggleDark } = useTheme();

  return (
    <div className="utilbar">
      <div className="wrap">
        <a className="ubtn" href="#">{t("login")}</a>
        <a className="ubtn" href="#">{t("register")}</a>
        <button
          className="ubtn text"
          onClick={toggleLang}
          aria-label={lang === "en" ? "Passer au français" : "Switch to English"}
        >
          {lang === "en" ? "FR" : "EN"}
        </button>
        <button className="ubtn text" onClick={toggleDark} aria-pressed={dark}>
          <span aria-hidden="true">◐</span>&nbsp;<span>{dark ? t("light") : t("dark")}</span>
        </button>
        <form className="usearch" role="search" onSubmit={(e) => e.preventDefault()}>
          <label className="skip-link" htmlFor="q">{t("searchlabel")}</label>
          <input id="q" type="search" placeholder={t("searchph")} />
          <button type="submit" aria-label="Search" />
        </form>
      </div>
    </div>
  );
}
