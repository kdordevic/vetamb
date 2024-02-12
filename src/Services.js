import React from 'react';
import { useTranslation } from "react-i18next";

function Services() {
    const { t } = useTranslation();
    return (
      <div>
        <h3>{t("usluge naslov")}</h3>
        <h5>{t("usluga 1")}</h5>
        <h5>{t("usluga 2")}</h5>
      </div>
    );
}

export default Services
