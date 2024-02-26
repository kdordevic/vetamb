import React from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationSR from "../locales/sr/translation.json";
import '../style/App.css';
import Vet from './Vet.js';


function App() {
  const resources = {
    en: {
      translation: translationEN,
    },
    sr: {
      translation: translationSR,
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: "sr",
    fallbackLng: "sr",
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
  return (
    <div className="App">
      <Vet/> 
    </div>
  );
}
export { i18n };
export default App;
