import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import TierTag, { type Tier } from "../components/TierTag";
import HeroCarousel from "../components/HeroCarousel";
import { cpaHeroImages } from "../data/heroImages";

const membershipCards: { h: string; p: string; to: string; tier: Tier }[] = [
  { h: "member1h", p: "member1p", to: "/resources", tier: "free" },
  { h: "member2h", p: "member2p", to: "/resources", tier: "free" },
  { h: "member3h", p: "member3p", to: "/learn", tier: "paid" },
  { h: "member4h", p: "member4p", to: "/resources", tier: "paid" },
  { h: "member5h", p: "member5p", to: "/become-a-cpa", tier: "free" },
  { h: "member6h", p: "member6p", to: "/resources", tier: "free" }
];

export default function Membership() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero cpa-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link> / <span>{t("navM")}</span>
          </nav>
          <h1>{t("memberh")}</h1>
          <p>{t("memberintro")}</p>
        </div>
        <HeroCarousel className="pagehero-media" images={cpaHeroImages} />
      </div>
      <section>
        <div className="wrap">
          <div className="membership-grid">
            {membershipCards.map((c) => (
              <article className={`membership-card ${c.tier}`} key={c.h}>
                <h3>{t(c.h)}</h3>
                <TierTag tier={c.tier} />
                <p>{t(c.p)}</p>
                <Link to={c.to}>{t("membercta")}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
