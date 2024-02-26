import React from 'react';
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="call-us">
        <p>{t("footer question")}</p>
        {
          <button>
            <a href="./contact">{t("Contact")}</a>
          </button>
        }
      </div>
      <h3>{t("footer")}</h3>
      <div></div>
      <div className="policy">
        <a href="./privacy">{t("privacy")}</a>
        <span className="copy"> &copy; Lovevet.rs 2024</span>
      </div>
    </footer>
  );
}

export default Footer
