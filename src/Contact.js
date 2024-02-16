import React from 'react';
import { useTranslation } from "react-i18next";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style/Contact.css";
import Map from "./Map";


function Contact() {
    const { t } = useTranslation();
    return (
      <main>
        <h1>{t("contact title")}</h1>
        <div className='kontakt'>
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
        </div>
        <section className="map">
          <Map />
        </section>
      </main>
    );
}

export default Contact
