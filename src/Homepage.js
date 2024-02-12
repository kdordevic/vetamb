import React from 'react';
import { useTranslation } from "react-i18next";

function Homepage() {
    const { t } = useTranslation();
    return (
      <div>
        <h1>{t("homepage tekst")}</h1>
      </div>
    );
}

export default Homepage
