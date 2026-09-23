import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import TierTag, { type Tier } from "../components/TierTag";
import HeroCarousel from "../components/HeroCarousel";
import { membershipHeroImages } from "../data/heroImages";
import { membershipImages } from "../data/topicImages";

const membershipCards: { h: string; p: string; to: string; tier: Tier; img: string }[] = [
  { h: "member1h", p: "member1p", to: "/resources", tier: "free", img: membershipImages.member1 },
  { h: "member2h", p: "member2p", to: "/resources", tier: "free", img: membershipImages.member2 },
  { h: "member3h", p: "member3p", to: "/learn", tier: "paid", img: membershipImages.member3 },
  { h: "member4h", p: "member4p", to: "/resources", tier: "paid", img: membershipImages.member4 },
  { h: "member5h", p: "member5p", to: "/become-a-cpa", tier: "free", img: membershipImages.member5 },
  { h: "member6h", p: "member6p", to: "/resources", tier: "free", img: membershipImages.member6 }
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
        <HeroCarousel className="pagehero-media" images={membershipHeroImages} />
      </div>
      <section>
        <div className="wrap">
          <div className="membership-grid">
            {membershipCards.map((c) => (
              <article className={`membership-card ${c.tier}`} key={c.h}>
                <div className="card-thumb" style={{ backgroundImage: `url('${c.img}')` }} />
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
