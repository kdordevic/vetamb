import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <h3>{t("footer")}</h3>
    </footer>)
  }
  export default Footer;
