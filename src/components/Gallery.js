import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import photos from "./photoGallery";
import { i18n } from "./App.js";
import "../style/Gallery.css";
import Modal from "react-modal";
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
    const translatedTitle = i18n.t(img.title);

    return (
      <div className="photo-gallery" key={id}>
        <div
          className="photo"
          style={{
            backgroundImage: `url(${photo})`
          }}
        >
          <Modal
            isOpen={modalStates[index].isOpen}
            onRequestClose={() => closeModal(index)}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div
              className="modal"
              style={{
                backgroundImage: `url(${photo})`,
                backgroundSize: "cover",
                backgroundPosition:"center"
              }}
            >
              <button onClick={() => closeModal(index)}>X</button>
            </div>
          </Modal>
          <h5 onClick={() => openModal(index)} className="pet-name">
            {translatedTitle}
          </h5>
        </div>
      </div>
    );
  });



  return (
    <main className="gallery">
      <h1>{t("galerija naslov")}</h1>
      <div className="wrap">{allPhotos}</div>
    </main>
  );
}

export default Gallery;

// import React from 'react';
// import { useTranslation } from "react-i18next";
// import photos from './photoGallery';
// import { i18n } from "./App.js"; 
// import "../style/Gallery.css";
// import Modal from "react-modal";


// function Gallery() {
//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       height: '500px',
//       width: '500px',color:"black"
      
//     },
//   };
//   // let subtitle;

//   function openModal() {
//     setIsOpen(true);
//   }
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     // subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
  

// const allPhotos = photos.map((img) => {
//   const { photo, id } = img;
//   const translatedTitle = i18n.t(img.title);

//   return (
//     <div className="photo-gallery" key={id}>
//       <div
//         className="photo"
//         style={{
//           backgroundImage: `url(${photo})`,
//           height: "300px",
//           width: "300px",
//         }}
//       >
//         <button onClick={openModal}>Open Modal</button>
//         <Modal
//           isOpen={modalIsOpen}
//           onAfterOpen={afterOpenModal}
//           onRequestClose={closeModal}
//           style={customStyles}
//           contentLabel="Example Modal"
//         >
//           {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
//           <button onClick={closeModal}>close</button>
//           <div
//             className="modal"
//             style={{
//               backgroundImage: `url(${photo})`,
//               height: "100%",
//               width: "100%",
//               backgroundSize:"cover"
//             }}
//           >

//           </div>
//           {/* <form>
//             <input />
//             <button>tab navigation</button>
//             <button>stays</button>
//             <button>inside</button>
//             <button>the modal</button>
//           </form> */}
//         </Modal>
//         <h5 className="pet-name">{translatedTitle}</h5>
//       </div>
//     </div>
//   );
// });
//   const { t } = useTranslation();
  
  
//     return (
//       <main className="gallery">
       
//         <h1>{t("galerija naslov")}</h1>
//         <div className="wrap">{allPhotos}</div>
//       </main>
//     );
// }

// export default Gallery
