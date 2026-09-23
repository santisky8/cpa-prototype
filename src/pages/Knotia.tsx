import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { knotiaImages } from "../data/topicImages";

const studentNoticeImage = "https://images.unsplash.com/photo-1758874572245-ac3a55a8c159?auto=format&fit=crop&w=900&q=85";

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
            <div className="cta-row">
              <a className="btn primary" href="https://www.knotia.ca" target="_blank" rel="noopener noreferrer">{t("knotiaGoTo")}</a>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="wrap">
          <div className="sec-head"><h2>{t("knotiaCpaH")}</h2></div>
          <div className="focus">
            <div className="tile">
              <div className="tile-img" style={{ backgroundImage: `url('${knotiaImages.handbook}')` }} />
              <h3>{t("c1h")}</h3><p>{t("c1p")}</p>
              <Link className="golink" to="/learn"><span>{t("learn")}</span><span className="arr" aria-hidden="true">→</span></Link>
            </div>
            <div className="tile">
              <div className="tile-img" style={{ backgroundImage: `url('${knotiaImages.purchases}')` }} />
              <h3>{t("knotiaPubH")}</h3><p>{t("knotiaPubP")}</p>
              <Link className="golink" to="/cpastore"><span>{t("learn")}</span><span className="arr" aria-hidden="true">→</span></Link>
            </div>
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="notice notice-card">
            <div className="notice-img" style={{ backgroundImage: `url('${studentNoticeImage}')` }} />
            <span className="badge">{t("portalBadge")}</span>
            <h2>{t("knotiaStudentH")}</h2>
            <p>{t("knotiaStudentP")}</p>
          </div>
        </div>
      </section>
    </>
  );
}
