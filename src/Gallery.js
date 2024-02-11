import React from 'react';
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
    return (
        <div>
            {allPhotos}
      </div>
    );
}

export default Gallery
