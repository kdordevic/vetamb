import React from 'react';
import { useTranslation } from "react-i18next";
// import photos from './photoGallery';
// import { i18n } from "./App.js"; 
import "../style/Gallery.css";



 const images = require.context("../locales/gallery", true);
 const imageList = images.keys().map((image) => images(image));

function Gallery() {

// const allPhotos = photos.map((img) => {
//   const { photo, id } = img;
//   const translatedTitle = i18n.t(img.title);

//   return (
//     <section key={id}>
//       {/* <img src={photo} alt="" /> */}
//       <div
//         className="photo"
//         style={{
//           backgroundImage: `url(${photo})`,
//           height: "200px",
//           width: "200px",
//         }}
//       ></div>
//       <h5>{translatedTitle}</h5>
//     </section>
//   );
// });
  const { t } = useTranslation();
    return (
      <main className="gallery">
        <h1>{t("galerija naslov")}</h1>
        {/* {allPhotos} */}
        <div className="photo-gallery">
          {imageList.map((image, index) => (
            <div className="photo-holder" key={index}>
              <div
                className="photo"
                style={{
                  backgroundImage: `url(${image})`,
                  height: "300px",
                  width: "300px",
                }}
              ></div>
            </div>
          ))}
        </div>
      </main>
    );
}

export default Gallery
