import React from 'react';
import { useTranslation } from "react-i18next";
import "mapbox-gl/dist/mapbox-gl.css";
import "./style/Contact.css";
import Map from "./Map";


function Contact() {
    const { t } = useTranslation();
    return (
      <main className="contact">
        <h1>{t("contact title")}</h1>
        <section className="contact-info">
          <p>{t("formular tekst")}</p>
          <p>{t("adresa")}</p>
          <p>{t("telefon")}</p>
          <p>{t("e-mail")}</p>
        </section>
        <section className="map-form">
          <div className="form">
            {/* {t("formular tekst")} */}
            <form action="">
              <input placeholder={t("name")} type="text" name="name" id="" />
              <input
                placeholder="your e-mail"
                type="email"
                name="e-mail"
                id=""
              />
              <input placeholder="Subject" type="text" name="" id="" />
              <textarea
                placeholder="your message"
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="map">
            <Map />
          </div>
        </section>
      </main>
    );
}

export default Contact
