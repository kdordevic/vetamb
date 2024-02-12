import React from 'react';
import { useTranslation } from "react-i18next";
import photos from './photoGallery';

const allPhotos = photos.map((img) => {
    const{photo,title,id}=img
    return (
        <div key={id}>
           
            <img src={photo} alt="" />
            <h5>{title}</h5>
      </div>
    )
})

function Gallery() {
  const { t } = useTranslation();
    return (
      <div>
        <h4>{t("galerija naslov")}</h4>
        {allPhotos}
      </div>
    );
}

export default Gallery
