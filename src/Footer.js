import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return <h3>{t("footer")}</h3>;
}
export default Footer;
