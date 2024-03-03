import React from 'react';
import { useTranslation } from "react-i18next";
import "../style/Services.css";

function Services() {
    const { t } = useTranslation();
    return (
      <main className="services">
        <div className="services-text">
          <h1>{t("usluge naslov")}</h1>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
          <h4>{t("usluga 1")}</h4>
          <h4>{t("usluga 2")}</h4>
        </div>
        <div className="services-photo"></div>
        
      </main>
    );
}

export default Services
