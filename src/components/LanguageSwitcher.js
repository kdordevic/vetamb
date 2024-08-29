import { React,useState } from "react";
import { useTranslation } from "react-i18next";
// import ReactCountryFlag from "react-country-flag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faGlobe } from "@fortawesome/free-solid-svg-icons";
const LanguageSwitcher = () => {
   const [toogle, setToogle] = useState(true);

  const { i18n } = useTranslation();

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    setToogle(!toogle);
  };
  return (
    <div className="lang">
      <div className={toogle ? "lang-change" : "choice"}>
        <span
          className="change"
          onClick={() => handleLanguageChange("")}
          style={{ cursor: "pointer" }}
        >
          <FontAwesomeIcon icon={faGlobe} />
        </span>
        <span
          className="sr"
          onClick={() => handleLanguageChange("en")}
          style={{ cursor: "pointer" }}
        >
          EN
          {/* <ReactCountryFlag countryCode="GB" /> */}
        </span>
        <span
          className="en"
          onClick={() => handleLanguageChange("sr")}
          style={{ cursor: "pointer" }}
        >
          SR
          {/* <ReactCountryFlag countryCode="RS" /> */}
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

