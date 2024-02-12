import React from 'react';
import articles from './articles.js';
import { useTranslation } from "react-i18next";


const example = articles.map((article) => {
  const { img,text, title, id } = article;
  return (
      <section key={id}>
      <h1>{ title }</h1>
        <img src={img} alt="" />
        <p>{text}</p>
    </section>
  );
});

function Practice() {
  const { t } = useTranslation();
   return (
      <section>
       <h3>{t("praksa tekst")}</h3>
        { example }
      </section>
    );
}


export default Practice
