import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import HeroCarousel from "../components/HeroCarousel";
import { taxHeroImages } from "../data/heroImages";

const cards = [
  { img: "https://images.unsplash.com/photo-1689330305908-aa231c1dd595?auto=format&fit=crop&w=900&q=85", imgKey: "taxImg1", h: "taxCard1h", p: "taxCard1p", ctaKey: "follow", href: "#", internal: false },
  { img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85", imgKey: "taxImg2", h: "taxCard2h", p: "taxCard2p", ctaKey: "social", href: "#", internal: false },
  { img: "https://images.unsplash.com/photo-1606327054517-6bf0b2e84cc4?auto=format&fit=crop&w=900&q=85", imgKey: "taxImg3", h: "taxCard3h", p: "taxCard3p", ctaKey: "browse", href: "/learn", internal: true }
];

export default function Tax360() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero tax-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link> / <span>{t("taxTitle")}</span>
          </nav>
          <h1>{t("taxTitle")}</h1>
          <p>{t("taxLede")}</p>
        </div>
        <HeroCarousel className="pagehero-media" images={taxHeroImages} />
      </div>
      <section>
        <div className="wrap">
          <div className="notice">
            <span aria-hidden="true">◉</span>
            <span>{t("taxBanner")}</span>
          </div>
          <div className="cards">
            {cards.map((c) => (
              <article className="card" key={c.h}>
                <div className="imgslot" style={{ backgroundImage: `url('${c.img}')` }}>
                  <span className="lbl">{t(c.imgKey)}</span>
                </div>
                <div className="body">
                  <h3>{t(c.h)}</h3>
                  <p>{t(c.p)}</p>
                  {c.internal ? (
                    <Link className="golink" to={c.href}>
                      {t(c.ctaKey)} <span className="arr" aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <a className="golink" href={c.href}>
                      {t(c.ctaKey)} <span className="arr" aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
