import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
function unsplash(id: string, w = 1400, q = 85): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

interface Cta { key: string; to: string; primary?: boolean }
interface Slide { image: string; alt: string; hKey: string; pKey: string; ctas: Cta[] }

const slides: Slide[] = [
  { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Centre_Block%2C_Ottawa%2C_Southeast_view_20170422_1.jpg/1280px-Centre_Block%2C_Ottawa%2C_Southeast_view_20170422_1.jpg",
    alt: "Centre Block on Parliament Hill, Ottawa, with the Canadian flag flying atop the Peace Tower", hKey: "welcomeH", pKey: "welcomeP",
    ctas: [{ key: "membercta", to: "/membership", primary: true }] },
  { image: unsplash("1758518731296-20e24e58846f"),
    alt: "Four business professionals standing together indoors", hKey: "h1", pKey: "lede",
    ctas: [{ key: "cta1", to: "/learn", primary: true }, { key: "cta2", to: "/learn" }] },
  { image: unsplash("1653566031587-74f7d86a2e71"),
    alt: "Team collaborating around a table with laptops", hKey: "c1h", pKey: "c1p",
    ctas: [{ key: "learn", to: "/learn", primary: true }] },
  { image: unsplash("1752159400890-d906038f1b35"),
    alt: "Business partners shaking hands in agreement", hKey: "c3h", pKey: "c3p",
    ctas: [{ key: "learn", to: "/resources", primary: true }] },
  { image: unsplash("1781246435700-afec19012b45"),
    alt: "Laptop displaying financial charts on a desk", hKey: "taxhomeh", pKey: "taxhomep",
    ctas: [{ key: "taxhomecta", to: "/tax-360", primary: true }] }
];

export default function PromoHero({ interval = 7000 }: { interval?: number }) {
  const { t } = useI18n();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [interval]);

  const s = slides[index];

  return (
    <div className="hero">
      <div className="wrap">
        <div className="fade-in" key={s.hKey}>
          <h1>{t(s.hKey)}</h1>
          <p>{t(s.pKey)}</p>
          <div className="cta-row">
            {s.ctas.map((c) => (
              <Link key={c.key} className={`btn ${c.primary ? "primary" : "ghost"}`} to={c.to}>{t(c.key)}</Link>
            ))}
          </div>
        </div>
        <div className="hero-carousel slant-r" role="img" aria-label={s.alt}>
          <div key={s.image} className="hero-carousel-slide fade-in" style={{ backgroundImage: `url('${s.image}')` }} />
          <div className="hero-carousel-dots">
            {slides.map((slide, i) => (
              <button
                key={slide.hKey}
                type="button"
                className={i === index ? "active" : ""}
                aria-label={`Show slide ${i + 1} of ${slides.length}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
