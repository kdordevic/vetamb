import { React,useState } from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
   const [toogle, setToogle] = useState(true);

  const { i18n } = useTranslation();

  const handleLanguageChange = (newLang) => {
    i18n.changeLanguage(newLang);
    setToogle(!toogle);
  };

  return (
    <div className="lang">
      <div className={toogle ? "lang-en" : "lang-sr"}>
        <span
          className="sr"
          onClick={() => handleLanguageChange("sr")}
          style={{ cursor: "pointer" }}
        >
          EN <ReactCountryFlag countryCode="GB" />
        </span>
        <span
          className="en"
          onClick={() => handleLanguageChange("en")}
          style={{ cursor: "pointer" }}
        >
          SR <ReactCountryFlag countryCode="RS" />
        </span>
      </div>
    </div>
  );
};

export default LanguageSwitcher;

