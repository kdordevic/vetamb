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
    setToogle(true);
  };

  const handleToggle = () => {
    setToogle(!toogle);
  };
  return (
    <div className="lang">
      <span
        className="change"
        onClick={handleToggle}
        style={{ cursor: "pointer" }}
      >
        <FontAwesomeIcon icon={faGlobe} />
      </span>
      {!toogle && (
        <div className="lang-options">
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
      )}
    </div>
  );
};

export default LanguageSwitcher;
