import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useI18n } from "../i18n/I18nContext";

const LOGO = { en: "/assets/logo-en.png", fr: "/assets/logo-fr.png" };
const LOGO_ALT = {
  en: "CPA Chartered Professional Accountants Canada (concept redesign)",
  fr: "CPA Comptables professionnels agréés Canada (refonte conceptuelle)"
};
const MORE_BTN_WIDTH = 48;

interface NavItem {
  to: string;
  label: string;
  className?: string;
}

export default function Navbar() {
  const { t, lang } = useI18n();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const rowRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const moreBtnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const items: NavItem[] = [
    { to: "/about", label: t("navAbout") },
    { to: "/become-a-cpa", label: t("nav1") },
    { to: "/membership", label: t("navM") },
    { to: "/learn", label: t("nav2") },
    { to: "/resources", label: t("nav3") },
    { to: "/tax-360", label: t("nav6") },
    { to: "/cpastore", label: t("nav5"), className: "store" },
    { to: "/knotia", label: "Knotia" }
  ];

  useLayoutEffect(() => {
    function recalc() {
      const row = rowRef.current;
      const measure = measureRef.current;
      if (!row || !measure) return;
      const available = row.offsetWidth;
      const widths = Array.from(measure.children).map((el) => (el as HTMLElement).offsetWidth);
      let used = 0;
      let count = widths.length;
      for (let i = 0; i < widths.length; i++) {
        used += widths[i];
        const hasMore = i + 1 < widths.length;
        if (used + (hasMore ? MORE_BTN_WIDTH : 0) > available) {
          count = i;
          break;
        }
      }
      setVisibleCount(count);
    }
    recalc();
    const ro = new ResizeObserver(recalc);
    if (rowRef.current) ro.observe(rowRef.current);
    return () => ro.disconnect();
  }, [lang, items.length]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!menuOpen) return;
      const target = e.target as Node;
      if (menuRef.current?.contains(target) || moreBtnRef.current?.contains(target)) return;
      setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [menuOpen]);

  useEffect(() => setMenuOpen(false), [pathname]);

  const visible = items.slice(0, visibleCount);
  const overflow = items.slice(visibleCount);
  const overflowHasActive = overflow.some((item) => item.to === pathname);

  return (
    <div className="navbar">
      <div className="wrap">
        <a className="logo" href="/">
          <img id="logoImg" src={LOGO[lang]} alt={LOGO_ALT[lang]} />
        </a>
        <div className="navRow" ref={rowRef}>
          <nav className="primary" aria-label="Primary">
            {visible.map((item) => (
              <NavLink key={item.to} to={item.to} className={item.className}>{item.label}</NavLink>
            ))}
          </nav>
          {overflow.length > 0 && (
            <div className="navMore">
              <button
                ref={moreBtnRef}
                className={`navMoreToggle${overflowHasActive ? " active" : ""}`}
                aria-expanded={menuOpen}
                aria-haspopup="true"
                aria-label="More navigation options"
                onClick={() => setMenuOpen((v) => !v)}
              >
                <span></span><span></span><span></span>
              </button>
              {menuOpen && (
                <div className="navMoreMenu" ref={menuRef} role="menu">
                  {overflow.map((item) => (
                    <NavLink key={item.to} to={item.to} className={item.className}>{item.label}</NavLink>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="navMeasure" ref={measureRef} aria-hidden="true">
          {items.map((item) => (
            <a key={item.to}>{item.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
