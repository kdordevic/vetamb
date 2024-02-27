import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

   const handleLanguageChange = (e) => {
     const newLang = e.target.value;
     i18n.changeLanguage(newLang);
   };
  

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      className="lang"
    >
      <option value="sr">SR 
          <ReactCountryFlag countryCode="RS" />
      </option>
      <option value="en">EN 
          <ReactCountryFlag countryCode="GB" />
      </option>
    </select>
  );
};

export default LanguageSwitcher;
