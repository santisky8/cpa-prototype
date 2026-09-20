import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import HeroCarousel from "../components/HeroCarousel";
import { articleHeroImages } from "../data/heroImages";

const related = [
  { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=90", tagKey: "arel1t", titleKey: "arel1", to: "/learn" },
  { img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=90", tagKey: "arel1t", titleKey: "arel2", to: "/learn" },
  { img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85", tagKey: "arel3t", titleKey: "arel3", to: "/resources" }
];

export default function Article() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero article-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link> / <span>{t("newscrumb")}</span>
          </nav>
          <h1>{t("ah1")}</h1>
          <p className="artmeta">{t("ameta")}</p>
          <div className="byline">
            <span className="avatar" aria-hidden="true">AD</span>
            <span><strong>{t("aauthor")}</strong><br /><span>{t("arole")}</span></span>
          </div>
        </div>
        <HeroCarousel className="pagehero-media" images={articleHeroImages} />
      </div>
      <section><div className="wrap artgrid">
        <nav className="toc" aria-label="On this page">
          <h2>{t("atoc")}</h2>
          <a href="#s1">{t("as1h")}</a>
          <a href="#s2">{t("as2h")}</a>
          <a href="#s3">{t("as3h")}</a>
          <a href="#s4">{t("as4h")}</a>
        </nav>
        <div className="prose">
          <h2 id="s1">{t("as1h")}</h2>
          <p>{t("as1p1")}</p>
          <p>{t("as1p2")}</p>
          <h2 id="s2">{t("as2h")}</h2>
          <p>{t("as2p1")}</p>
          <blockquote className="pullquote">{t("apq")}</blockquote>
          <p>{t("as2p2")}</p>
          <h2 id="s3">{t("as3h")}</h2>
          <p>{t("as3p1")}</p>
          <p>{t("as3p2")}</p>
          <h2 id="s4">{t("as4h")}</h2>
          <p>{t("as4p1")}</p>
          <p>{t("as4p2")}</p>
        </div>
      </div></section>
      <section className="news" style={{ padding: "36px 0" }}><div className="wrap">
        <div className="sec-head"><h2>{t("arelh")}</h2></div>
        <div className="cards">
          {related.map((r) => (
            <article className="card" key={r.titleKey}>
              <div className="imgslot" style={{ backgroundImage: `url('${r.img}')` }} />
              <div className="body">
                <span className="ctag">{t(r.tagKey)}</span>
                <h3>{t(r.titleKey)}</h3>
                <Link className="golink" to={r.to}>
                  <span>{t("learn")}</span>
                  <span className="arr" aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div></section>
    </>
  );
}
