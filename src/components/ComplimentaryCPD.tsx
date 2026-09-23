import { useI18n } from "../i18n/I18nContext";
import { cpdSessionTitles } from "../data/cpdSessions";
import { cpdImages } from "../data/topicImages";

const YEAR = 2026;
const now = new Date();

function fmt(locale: string, d: Date, withDay = false): string {
  return new Intl.DateTimeFormat(locale, withDay ? { month: "long", day: "numeric", year: "numeric" } : { month: "long", year: "numeric" }).format(d);
}

export default function ComplimentaryCPD() {
  const { t, lang } = useI18n();
  const locale = lang === "fr" ? "fr-CA" : "en-CA";
  const titles = cpdSessionTitles[lang];

  const months = Array.from({ length: 12 }, (_, m) => {
    const avail = new Date(YEAR, m, 15);
    return { title: titles[m], when: fmt(locale, new Date(YEAR, m, 1)), avail, released: now >= avail, img: cpdImages.months[m] };
  });

  const quarters = [2, 5, 8, 11].map((endMonth, i) => {
    const avail = new Date(endMonth === 11 ? YEAR + 1 : YEAR, (endMonth + 1) % 12, 15);
    return { label: `Q${i + 1} ${YEAR}`, avail, released: now >= avail, img: cpdImages.quarters[i] };
  });

  return (
    <>
      <p className="cpd-sub">{t("cpdMonthly")}</p>
      <div className="cpd-grid">
        {months.map((m) => (
          <div className={`cpd-item${m.released ? "" : " upcoming"}`} key={m.title}>
            <div className="cpd-bg" style={{ backgroundImage: `url('${m.img}')` }} />
            <div className="cpd-content">
              <strong className="cpd-title">{m.title}</strong>
              <span className="cpd-when">{m.when}</span>
              {!m.released && <span className="cpd-date">{t("cpdAvailableOn")} {fmt(locale, m.avail, true)}</span>}
            </div>
          </div>
        ))}
      </div>
      <p className="cpd-sub">{t("cpdQuarterly")}</p>
      <div className="cpd-grid">
        {quarters.map((q) => (
          <div className={`cpd-item${q.released ? "" : " upcoming"}`} key={q.label}>
            <div className="cpd-bg" style={{ backgroundImage: `url('${q.img}')` }} />
            <div className="cpd-content">
              <strong className="cpd-title">{q.label}</strong>
              {!q.released && <span className="cpd-date">{t("cpdAvailableOn")} {fmt(locale, q.avail, true)}</span>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
