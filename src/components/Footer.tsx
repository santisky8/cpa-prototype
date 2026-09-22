import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer>
      <div className="wrap">
        <div className="cols">
          <div>
            <h4>
              CPA Canada <span style={{ fontSize: ".65rem", letterSpacing: ".1em", opacity: 0.8 }}>CONCEPT</span>
            </h4>
            <p style={{ fontSize: ".88rem", maxWidth: "34ch" }}>{t("fabout")}</p>
            <div className="social">
              <span className="social-h">{t("fsocial")}</span>
              <SocialLinks />
            </div>
          </div>
          <div>
            <h4>{t("fnav")}</h4>
            <Link to="/about">{t("navAbout")}</Link><br />
            <Link to="/become-a-cpa">{t("nav1")}</Link><br />
            <Link to="/learn">{t("nav2")}</Link><br />
            <Link to="/cpastore">{t("nav5")}</Link>
          </div>
          <div>
            <h4>{t("fsup")}</h4>
            <a href="#">{t("help")}</a><br />
            <a href="#">{t("fcontact")}</a><br />
            <a href="#">{t("faccess")}</a>
          </div>
          <div>
            <h4>{t("fleg")}</h4>
            <a href="#">{t("fpriv")}</a><br />
            <a href="#">{t("fterms")}</a>
          </div>
        </div>
        <p className="fine">{t("fine")}</p>
      </div>
    </footer>
  );
}
