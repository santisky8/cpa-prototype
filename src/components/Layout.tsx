import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useI18n } from "../i18n/I18nContext";
import UtilBar from "./UtilBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

export default function Layout() {
  const { t } = useI18n();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <a className="skip-link" href="#main">{t("skip")}</a>
      <UtilBar />
      <Navbar />
      <main id="main">
        <div className="fade-in" key={location.pathname}>
          <Outlet />
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
