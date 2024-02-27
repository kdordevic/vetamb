import { React ,useState} from "react";
import { Link } from "react-router-dom";
import "../style/Vet.css";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Navbar() {
  const { t } = useTranslation();
  const [toogle, setToogle] = useState(true);
    const menuToogle = () => {
        setToogle(!toogle);
    }
  return (
    <div className={toogle ? "big-screen-nav" : "small-screen-nav"}>
      <div className={toogle ? "menu" : "no-menu"} onClick={menuToogle}>
        <div className="menu-line-1"></div>
        <div className="menu-line-2"></div>
        <div className="menu-line-3"></div>
      </div>
      <nav className="nav">
        <ul className="main-nav" onClick={menuToogle}>
          <div className="logo">
            <Link to="/" className="logo-nav">
              <FontAwesomeIcon className="icon-nav" icon={faPaw} />
            </Link>
          </div>
          <div>
            <Link to="/">{t("Homepage")}</Link>
            <Link to="/about">{t("About")}</Link>
            <Link to="/services">{t("Services")}</Link>
            <Link to="/practice">{t("Practice")}</Link>
            <Link to="/contact">{t("Contact")}</Link>
            <Link to="/gallery">{t("Gallery")}</Link>
            <Link to="/questions">{t("Questions")}</Link>
            <LanguageSwitcher />
          </div>
        </ul>
      </nav>
    </div>
  );
}
