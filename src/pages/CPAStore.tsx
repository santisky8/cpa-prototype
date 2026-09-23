import { Link } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";
import HeroCarousel from "../components/HeroCarousel";
import { storeHeroImages } from "../data/heroImages";

const products = [
  { key: "handbook", h: "storeCard1h", p: "storeCard1p", price: "$189.00", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=900&q=85" },
  { key: "course", h: "storeCard2h", p: "storeCard2p", price: "$449.00", img: "https://images.unsplash.com/photo-1663524789611-2c8330848379?auto=format&fit=crop&w=900&q=85" },
  { key: "tools", h: "storeCard3h", p: "storeCard3p", price: "$59.00", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=900&q=85" }
];

export default function CPAStore() {
  const { t } = useI18n();

  return (
    <>
      <div className="pagehero store-hero">
        <div className="wrap">
          <div>
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link to="/">{t("home")}</Link> / <span>{t("storeTitle")}</span>
            </nav>
            <h1>{t("storeTitle")}</h1>
            <p>{t("storeLede")}</p>
          </div>
        </div>
        <HeroCarousel className="pagehero-media" images={storeHeroImages} />
      </div>
      <section>
        <div className="wrap">
          <div className="notice">
            <span className="icon-cart" aria-hidden="true" />
            <span>{t("storeBanner")}</span>
          </div>
          <form className="filterbar" onSubmit={(e) => e.preventDefault()} aria-label="Filter CPA Store">
            <input type="search" placeholder={t("storeSearch")} aria-label={t("storeSearch")} />
            <select aria-label="Category">
              <option>{t("allCategories")}</option>
              <option>{t("handbooks")}</option>
              <option>{t("courses")}</option>
              <option>{t("tools")}</option>
            </select>
          </form>
          <div className="cards">
            {products.map((prod) => (
              <article className="card" key={prod.key}>
                <div className="imgslot" style={{ backgroundImage: `url('${prod.img}')` }} />
                <div className="body">
                  <h3>{t(prod.h)}</h3>
                  <p>{t(prod.p)}</p>
                  <span className="cprice">{prod.price}</span>
                  <Link className="btn primary" to={`/checkout?item=${prod.key}`}>{t("viewProduct")}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
