import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import photos from "../files/photoGallery";
import "../style/Gallery.css";
import Modal from "react-modal";
import { motion } from "framer-motion";
import Paw from "./Paw.js";

Modal.setAppElement("#root");

function Gallery() {
    const { t } = useTranslation();
  const customStyles = {
    content: {
      top: "55% ",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "600px",
      width: "600px",
      padding: '0px',
      borderRadius:"20px"
    },
  };

  const [modalStates, setModalStates] = useState(
    photos.map(() => ({ isOpen: false }))
  );

  function openModal(index) {
    const newModalStates = [...modalStates];
    newModalStates[index].isOpen = true;
    setModalStates(newModalStates);
  }

  function closeModal(index) {
    const newModalStates = [...modalStates];
    newModalStates[index].isOpen = false;
    setModalStates(newModalStates);
  }

  const allPhotos = photos.map((img, index) => {
    const { photo, id } = img;
    const translatedTitle = t(img.title);

    return (
      <div className="photo-gallery" key={id}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="photo"
          style={{
            backgroundImage: `url(${photo})`,
          }}
        >
          <Modal
            isOpen={modalStates[index].isOpen}
            onRequestClose={() => closeModal(index)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div
              onClick={() => closeModal(index)}
              className="modal"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <button onClick={() => closeModal(index)}>X</button>
            </div>
            <div className="photo-name-modal">{translatedTitle}</div>
          </Modal>
          <h5 onClick={() => openModal(index)} className="pet-name">
            {translatedTitle}
          </h5>
        </motion.div>
      </div>
    );
  });

  return (
    <motion.main
      className="gallery"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1>{t("galerija naslov")}<Paw/></h1>
      <div className="wrap">{allPhotos}</div>
    </motion.main>
  );
}

export default Gallery;
