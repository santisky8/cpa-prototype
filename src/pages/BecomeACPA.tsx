import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import ImgSlot from "../components/ImgSlot";
import Wizard from "../components/Wizard";
import HeroCarousel from "../components/HeroCarousel";
import { cpaHeroImages } from "../data/heroImages";

const cards = [
  { img: "bc1img", h: "bc1h", p: "bc1p" },
  { img: "bc2img", h: "bc2h", p: "bc2p" },
  { img: "bc3img", h: "bc3h", p: "bc3p" }
];

export default function BecomeACPA() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero cpa-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link> / <span>{t("nav1")}</span>
          </nav>
          <h1>{t("bh1")}</h1>
          <p>{t("blede")}</p>
        </div>
        <HeroCarousel className="pagehero-media" images={cpaHeroImages} />
      </div>
      <section>
        <div className="wrap">
          <Wizard />
          <p style={{ fontSize: ".8rem", color: "var(--text-muted)", marginTop: 12 }}>{t("bnote")}</p>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head"><h2>{t("bmoreh")}</h2></div>
          <div className="cards pathwaycards">
            {cards.map((c) => (
              <article className="card" key={c.h}>
                <ImgSlot label={t(c.img)} />
                <div className="body">
                  <h3>{t(c.h)}</h3>
                  <p>{t(c.p)}</p>
                  <a className="golink" href="#">
                    <span>{t("learn")}</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="notice">
            <span>{t("portalTeaser")}</span>
            <Link className="golink" to="/knotia"><span>{t("learn")}</span><span className="arr" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
