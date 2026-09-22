import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

export default function About() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero cpa-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link> / <span>{t("navAbout")}</span>
          </nav>
          <h1>{t("navAbout")}</h1>
          <p>{t("fabout")}</p>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="focus">
            <div className="tile"><h3>{t("aboutMissionH")}</h3><p>{t("aboutMissionP")}</p></div>
            <div className="tile"><h3>{t("aboutGovH")}</h3><p>{t("aboutGovP")}</p></div>
            <div className="tile"><h3>{t("aboutReachH")}</h3><p>{t("aboutReachP")}</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
