import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

export default function Knotia() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero store-hero">
        <div className="wrap">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">{t("home")}</Link> / <span>Knotia</span>
            </nav>
            <h1>Knotia</h1>
            <p>{t("knotiaLede")}</p>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="sec-head"><h2>{t("knotiaCpaH")}</h2></div>
          <div className="focus">
            <div className="tile"><h3>{t("c1h")}</h3><p>{t("c1p")}</p><Link className="golink" to="/learn"><span>{t("learn")}</span><span className="arr" aria-hidden="true">→</span></Link></div>
            <div className="tile"><h3>{t("knotiaPubH")}</h3><p>{t("knotiaPubP")}</p><Link className="golink" to="/cpastore"><span>{t("learn")}</span><span className="arr" aria-hidden="true">→</span></Link></div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="notice notice-card">
            <span className="badge">{t("portalBadge")}</span>
            <h2>{t("knotiaStudentH")}</h2>
            <p>{t("knotiaStudentP")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
