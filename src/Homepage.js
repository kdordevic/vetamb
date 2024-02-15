import React from 'react';
import { useTranslation } from "react-i18next";
import "./style/Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

function Homepage() {
    const { t } = useTranslation();
    return (
      <main className="homepage">
        <div className="container">
          <div className="circle"></div>
          <div>
            <FontAwesomeIcon icon={faPaw} />
          </div>
          <h1>{t("homepage tekst")}</h1>
          <h2>{t("homepage tekst1")}</h2>
        </div>
      </main>
    );
}

export default Homepage
