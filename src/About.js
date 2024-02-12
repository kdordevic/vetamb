import React from 'react';
import { useTranslation } from "react-i18next";


function About() {
  const { t } = useTranslation();
    return (
      <div>
        <h1>{t("o nama")}</h1>
        <p>{t("tekst o nama")}</p>
      </div>
    );
}

export default About
