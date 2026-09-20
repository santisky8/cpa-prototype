import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import ImgSlot from "../components/ImgSlot";
import HeroCarousel from "../components/HeroCarousel";
import { homeHeroImages, blueMountainImage } from "../data/heroImages";

type Tier = "free" | "paid";

const Arrow = () => <span className="arr" aria-hidden="true">→</span>;
const TierTag = ({ tier }: { tier: Tier }) => {
  const { t } = useI18n();
  return <span className={`tier-tag ${tier}`}>{t(tier === "free" ? "tierFree" : "tierPaid")}</span>;
};

const routerLinks: { key: string; to: string; tier: Tier }[] = [
  { key: "r1", to: "/resources", tier: "paid" },
  { key: "r2", to: "/learn", tier: "paid" },
  { key: "r3", to: "/resources", tier: "free" },
  { key: "r4", to: "/become-a-cpa", tier: "free" },
  { key: "r5", to: "/resources", tier: "free" }
];

const membershipCards: { h: string; p: string; to: string; tier: Tier }[] = [
  { h: "member1h", p: "member1p", to: "/resources", tier: "free" },
  { h: "member2h", p: "member2p", to: "/resources", tier: "free" },
  { h: "member3h", p: "member3p", to: "/learn", tier: "paid" },
  { h: "member4h", p: "member4p", to: "/resources", tier: "paid" },
  { h: "member5h", p: "member5p", to: "/become-a-cpa", tier: "free" },
  { h: "member6h", p: "member6p", to: "/resources", tier: "free" }
];

const focusAreas = ["f1", "f2", "f3", "f4", "f5", "f6"];

const careerCards = [
  { img: "c1img", h: "c1h", p: "c1p", cta: "learn" },
  { img: "c2img", h: "c2h", p: "c2p", cta: "register", directImage: blueMountainImage },
  { img: "c3img", h: "c3h", p: "c3p", cta: "learn" }
];

const newsItems = [
  { img: "n1img", d: "n1d", h: "n1h", p: "n1p", href: "#" },
  { img: "n2img", d: "n2d", h: "n2h", p: "n2p", href: "#" },
  { img: "n3img", d: "n3d", h: "n3h", p: "n3p", href: "/article" }
];

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <div className="hero">
        <div className="wrap">
          <div>
            <h1>{t("h1")}</h1>
            <p>{t("lede")}</p>
            <div className="cta-row">
              <Link className="btn primary" to="/learn">{t("cta1")}</Link>
              <Link className="btn ghost" to="/learn">{t("cta2")}</Link>
            </div>
          </div>
          <HeroCarousel className="slant-r" images={homeHeroImages} />
        </div>
      </div>

      <div className="router" aria-label="Choose your path">
        <div className="wrap">
          <span className="rlabel">{t("rlabel")}</span>
          {routerLinks.map((r) => (
            <Link key={r.key} to={r.to}>
              <span className="router-link-text">
                <span>{t(r.key)}</span>
                <TierTag tier={r.tier} />
              </span>
              <Arrow />
            </Link>
          ))}
        </div>
      </div>

      <section className="membership">
        <div className="wrap">
          <div className="sec-head"><h2>{t("memberh")}</h2></div>
          <p className="membership-intro">{t("memberintro")}</p>
          <div className="membership-grid">
            {membershipCards.map((c) => (
              <article className="membership-card" key={c.h}>
                <h3>{t(c.h)}</h3>
                <TierTag tier={c.tier} />
                <p>{t(c.p)}</p>
                <Link to={c.to}>{t("membercta")}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head"><h2>{t("focush")}</h2></div>
          <div className="focus">
            {focusAreas.map((f) => (
              <div className="tile" key={f}>
                <h3>{t(`${f}h`)}</h3>
                <p>{t(`${f}p`)}</p>
                <Link className="golink" to="/resources">
                  <span>{t("learn")}</span>
                  <Arrow />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head">
            <h2>{t("careerh")}</h2>
            <Link className="golink" to="/learn"><span>{t("careerall")}</span><Arrow /></Link>
          </div>
          <div className="cards careercards">
            {careerCards.map((c) => (
              <article className="card" key={c.h}>
                {c.directImage ? (
                  <ImgSlot label={t(c.img)} style={{ backgroundImage: `url('${c.directImage}')` }} />
                ) : (
                  <ImgSlot label={t(c.img)} />
                )}
                <div className="body">
                  <h3>{t(c.h)}</h3>
                  <p>{t(c.p)}</p>
                  <Link className="golink" to="/learn"><span>{t(c.cta)}</span><Arrow /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tax-feature">
        <div className="wrap">
          <div>
            <span className="badge">{t("taxbadge")}</span>
            <h2>{t("taxhomeh")}</h2>
            <p>{t("taxhomep")}</p>
            <Link className="btn primary" to="/tax-360">{t("taxhomecta")}</Link>
          </div>
          <ImgSlot label="Tax withholding form with calculator" />
        </div>
      </section>

      <div className="store">
        <div className="wrap">
          <div>
            <span className="badge">{t("storebadge")}</span>
            <h2>{t("storeh")}</h2>
            <p>{t("storep")}</p>
            <Link className="btn" to="/learn">{t("storecta")}</Link>
          </div>
          <ImgSlot className="slant-l" label={t("storeimg")} />
        </div>
      </div>

      <section className="news">
        <div className="wrap">
          <div className="sec-head">
            <h2>{t("newsh")}</h2>
            <Link className="golink" to="/resources"><span>{t("newsall")}</span><Arrow /></Link>
          </div>
          <div className="newsgrid">
            {newsItems.map((n) => (
              <article className="newsitem" key={n.h}>
                <ImgSlot label={t(n.img)} />
                <div className="body">
                  <time>{t(n.d)}</time>
                  <h3>{n.href.startsWith("/") ? <Link to={n.href}>{t(n.h)}</Link> : <a href={n.href}>{t(n.h)}</a>}</h3>
                  <p>{t(n.p)}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
