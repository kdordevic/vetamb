import React from 'react';
import { useTranslation } from "react-i18next";
import photos from './photoGallery';
import { i18n } from "./App.js"; 



function Gallery() {

const allPhotos = photos.map((img) => {
  const { photo, id } = img;
  const translatedTitle = i18n.t(img.title);

  return (
    <section key={id}>
      <img src={photo} alt="" />
      <h5>{translatedTitle}</h5>
    </section>
  );
});
  const { t } = useTranslation();
    return (
      <main>
        <h1>{t("galerija naslov")}</h1>
        {allPhotos}
      </main>
    );
}

export default Gallery
