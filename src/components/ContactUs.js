import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

function ContactUs() {
    const { t } = useTranslation();
     const form = useRef();

     const sendEmail = (e) => {
       e.preventDefault();

       emailjs
         .sendForm("service_f3s28zg", "template_61acl4d", form.current, {
           publicKey: "a6Dz9LDS2hh4atzKh",
         })
         .then(
           () => {
                 console.log("SUCCESS!");
                 alert(t("success"));
           },
           (error) => {
             console.log("FAILED...", error.text);
           }
         );
     };


  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <input required placeholder={t("full name")} type="text" name="name" />
        <input
          required
          placeholder={t("your e-mail")}
          type="email"
          name="email"
        />
        <input required placeholder={t("subject")} type="text" name="subject" />
        <textarea
          required
          placeholder={t("your message")}
          name="message"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" value="send">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactUs
