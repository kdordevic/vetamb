import React from 'react';
import { useTranslation } from "react-i18next";
import "./style/About.css";


function About() {
  const { t } = useTranslation();
    return (
      <main className='about'>
        <h1>{t("o nama")}</h1>
        <p>{t("tekst o nama")}</p>
      </main>
    );
}

export default About
