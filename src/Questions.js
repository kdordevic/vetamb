import React from 'react';
import { useTranslation } from "react-i18next";

function Questions() {
  const { t } = useTranslation();
    return (
      <div>
        <h3>{t("pitanja naslov")}</h3>
        <p>{t("pitanje 1")}</p>
      </div>
    );
}

export default Questions
