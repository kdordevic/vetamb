import React from 'react';
import { useTranslation } from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    return (
      <div>
        <p>{t("adresa")}</p>
        <p>{t("telefon")}</p>
        <form action="">
          {t("formular tekst")}
          <input type="text" name="" id="" />
          <input type="email" name="" id="" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
      </div>
    );
}

export default Contact
