import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import { courses } from "../data/courses";
import type { CourseFormat, CourseTopic } from "../types";
import HeroCarousel from "../components/HeroCarousel";
import { learnHeroImages } from "../data/heroImages";

const TOPIC_LABEL_KEY: Record<CourseTopic, string> = {
  tax: "topicTax", audit: "topicAudit", finrep: "topicFinrep", tech: "topicTech", sust: "topicSust", lead: "topicLead"
};
const FORMAT_LABEL_KEY: Record<CourseFormat, string> = {
  ondemand: "fmtOndemand", virtual: "fmtVirtual", inperson: "fmtInperson", cert: "fmtCert"
};

export default function LearnAndGrow() {
  const { t, lang } = useI18n();
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("");
  const [format, setFormat] = useState("");
  const [freeOnly, setFreeOnly] = useState(false);

  const results = useMemo(() => {
    const q = search.trim().toLowerCase();
    return courses.filter((c) => {
      if (topic && c.topic !== topic) return false;
      if (format && c.format !== format) return false;
      if (freeOnly && c.price !== 0) return false;
      if (q && !(`${c.title[lang]} ${c.description[lang]}`.toLowerCase().includes(q))) return false;
      return true;
    });
  }, [search, topic, format, freeOnly, lang]);

  const countText =
    lang === "fr"
      ? `${results.length} résultat(s) sur ${courses.length}`
      : `Showing ${results.length} of ${courses.length} results`;

  return (
    <>
      <div className="pagehero learn-hero">
        <div className="wrap">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">{t("home")}</Link> / <span>{t("nav2")}</span>
          </nav>
          <h1>{t("lh1")}</h1>
          <p>{t("llede")}</p>
        </div>
        <HeroCarousel className="pagehero-media" images={learnHeroImages} />
      </div>
      <section><div className="wrap">
        <div className="storebanner">
          <span aria-hidden="true">▦</span>
          <span>{t("lbanner")}</span>
        </div>
        <form className="filterbar" onSubmit={(e) => e.preventDefault()} aria-label="Filter courses">
          <input
            type="search" placeholder={t("lsearchph")} aria-label={t("lsearchph")}
            value={search} onChange={(e) => setSearch(e.target.value)}
          />
          <select aria-label="Topic" value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">{t("lallTopics")}</option>
            {(Object.keys(TOPIC_LABEL_KEY) as CourseTopic[]).map((k) => (
              <option key={k} value={k}>{t(TOPIC_LABEL_KEY[k])}</option>
            ))}
          </select>
          <select aria-label="Format" value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="">{t("lallFormats")}</option>
            {(Object.keys(FORMAT_LABEL_KEY) as CourseFormat[]).map((k) => (
              <option key={k} value={k}>{t(FORMAT_LABEL_KEY[k])}</option>
            ))}
          </select>
          <label className="chk">
            <input type="checkbox" checked={freeOnly} onChange={(e) => setFreeOnly(e.target.checked)} />
            <span>{t("lfree")}</span>
          </label>
        </form>
        <p className="count" aria-live="polite">{countText}</p>
        <div className="coursegrid">
          {results.length === 0 ? (
            <p>{t("lnone")}</p>
          ) : (
            results.map((c) => (
              <article className="card" key={c.id}>
                <div className="course-thumb" style={{ backgroundImage: `url('${c.image}')` }} />
                <div className="body">
                  <span className={`ctag topic-${c.topic}`}>{t(TOPIC_LABEL_KEY[c.topic])}</span>
                  <h3>{c.title[lang]}</h3>
                  <p>{c.description[lang]}</p>
                  <div className="cmeta">
                    <span className="format-pill">{t(FORMAT_LABEL_KEY[c.format])}</span>
                    <span>{c.hours} {t("lhours")}</span>
                    {c.price === 0 ? (
                      <span className="cfree">{t("lfreeTag")}</span>
                    ) : (
                      <span className="cprice">${c.price.toLocaleString(lang === "fr" ? "fr-CA" : "en-CA")}</span>
                    )}
                  </div>
                  <a className="golink" href="#">
                    <span>{t("learn")}</span>
                    <span className="arr" aria-hidden="true">→</span>
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
      </div></section>
    </>
  );
}
