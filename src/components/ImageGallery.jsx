import React, { useState, useEffect } from 'react';

function ImageGallery({ images }) {
        const imageArray=[]
        useEffect(() => {
                // Fetch images from your API and update the Photo category
                fetch('/api/images')
                    .then(response => response.json())
                    .then(data => {
                        imageArray: data // assuming 'data' is an array of image objects
                        })
                    .catch(error => console.error('Error fetching images:', error));
            }, []);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {imageArray.map(image => (
        <img 
          key={image.id} 
          src={image.thumbnailLink} 
          alt={image.title}
          onClick={() => openModal(image)}
          style={{ width: '100px', height: '100px', cursor: 'pointer' }}
        />
      ))}

      {showModal && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img 
            src={`/api/imageProxy?imageId=${selectedImage.id}`} 
            alt={selectedImage.title}
            style={{ maxWidth: '100%' }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageGallery