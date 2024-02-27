import React from 'react';
import { useTranslation } from "react-i18next";
import photos from './photoGallery';
import { i18n } from "./App.js"; 
import "../style/Gallery.css";


function Gallery() {

const allPhotos = photos.map((img) => {
  const { photo, id } = img;
  const translatedTitle = i18n.t(img.title);

  return (
    <div className="photo-gallery" key={id}>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${photo})`,
            height: "300px",
            width: "300px",
          }}
        >
          <h5>{translatedTitle}</h5>
        </div>     
    </div>
  );
});
  const { t } = useTranslation();
    return (
      <main className="gallery">
        <h1>{t("galerija naslov")}</h1>
        <div className="wrap">
        {allPhotos}
        </div>
      </main>
    );
}

export default Gallery
