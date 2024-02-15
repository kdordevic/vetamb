import React from 'react';
import { useTranslation } from "react-i18next";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style/Contact.css";
import Map from "./Map";


function Contact() {
    const { t } = useTranslation();
    return (
      <main>
        <h1>Kontaktirajte nas</h1>
        <section>
          <p>{t("adresa")}</p>
          <p>{t("telefon")}</p>
        </section>
        <form action="">
          {t("formular tekst")}
          <input type="text" name="" id="" />
          <input type="email" name="" id="" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </form>
        <section className='map'>
          <Map/>
        </section>
      </main>
    );
}

export default Contact
