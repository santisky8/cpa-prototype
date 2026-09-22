import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

const LOGO = { en: "/assets/logo-en.png", fr: "/assets/logo-fr.png" };
const LOGO_ALT = {
  en: "CPA Chartered Professional Accountants Canada (concept redesign)",
  fr: "CPA Comptables professionnels agréés Canada (refonte conceptuelle)"
};

export default function Navbar() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;
      if (navRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setOpen(false);
    }
    function onResize() {
      if (window.innerWidth > 900) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <div className="navbar">
      <div className="wrap">
        <a className="logo" href="/">
          <img id="logoImg" src={LOGO[lang]} alt={LOGO_ALT[lang]} />
        </a>
        <button
          ref={toggleRef}
          className="navToggle"
          aria-expanded={open}
          aria-controls="primaryNav"
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
        <nav
          ref={navRef}
          className={`primary${open ? " open" : ""}`}
          id="primaryNav"
          aria-label="Primary"
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName === "A") setOpen(false);
          }}
        >
          <NavLink to="/become-a-cpa">{t("nav1")}</NavLink>
          <NavLink to="/membership">{t("navM")}</NavLink>
          <NavLink to="/learn">{t("nav2")}</NavLink>
          <NavLink to="/resources">{t("nav3")}</NavLink>
          <NavLink to="/tax-360">{t("nav6")}</NavLink>
          <NavLink to="/cpastore" className="store">{t("nav5")}</NavLink>
          <NavLink to="/knotia">Knotia</NavLink>
          <NavLink to="/about">{t("navAbout")}</NavLink>
        </nav>
      </div>
    </div>
  );
}
