import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import HeroCarousel from "../components/HeroCarousel";
import ComplimentaryCPD from "../components/ComplimentaryCPD";
import { reportingHeroImages } from "../data/heroImages";
import { resourcesImages } from "../data/topicImages";

const tiles = ["rc1", "rc2", "rc3", "rc4", "rc5", "rc6"];
const guidance = ["rg1", "rg2", "rg3", "rg4", "rg5"];

export default function Resources() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero reporting-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link> / <span>{t("nav3")}</span> / <span>{t("rh1")}</span>
          </nav>
          <h1>{t("rh1")}</h1>
          <p>{t("rlede")}</p>
        </div>
        <HeroCarousel className="pagehero-media" images={reportingHeroImages} />
      </div>
      <section>
        <div className="wrap">
          <div className="sec-head"><h2>{t("cpdH")}</h2></div>
          <p className="membership-intro">{t("cpdIntro")}</p>
          <ComplimentaryCPD />
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head"><h2>{t("standardsH")}</h2></div>
          <div className="focus">
            {tiles.map((k) => (
              <div className="tile" key={k}>
                <div className="tile-img" style={{ backgroundImage: `url('${resourcesImages[k as keyof typeof resourcesImages]}')` }} />
                <h3>{t(`${k}h`)}</h3>
                <p>{t(`${k}p`)}</p>
                <a className="golink" href="#">
                  <span>{t("learn")}</span>
                  <span className="arr" aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head"><h2>{t("rlisth")}</h2></div>
          <div className="guidelist">
            {guidance.map((k) => (
              <article key={k}>
                <div>
                  <time>{t(`${k}d`)}</time>
                  <h3>{t(k)}</h3>
                </div>
                <a className="golink" href="#">
                  <span>{t("read")}</span>
                  <span className="arr" aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
