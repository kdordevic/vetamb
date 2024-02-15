import React from 'react';
import { useTranslation } from "react-i18next";

function Questions() {
  const { t } = useTranslation();
    return (
      <main>
        <h1>{t("pitanja naslov")}</h1>
        <p>{t("pitanje 1")}</p>
      </main>
    );
}

export default Questions
