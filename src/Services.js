import React from 'react';
import { useTranslation } from "react-i18next";
import "./style/Services.css";

function Services() {
    const { t } = useTranslation();
    return (
      <main className="services">
        <h1>{t("usluge naslov")}</h1>
        <h3>{t("usluga 1")}</h3>
        <h3>{t("usluga 2")}</h3>
      </main>
    );
}

export default Services
