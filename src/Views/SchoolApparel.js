import React, { useState } from 'react';

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBTypography
} from 'mdb-react-ui-kit';


const ImageSelector = ({ images, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
    onSelect(image);
  };

  return (
    <div>
      {images.map((image, index) => (
        <button key={index} onClick={() => handleClick(image)}>
          {`Image ${index + 1}`}
        </button>
      ))}
      <img src={selectedImage} alt="Selected Image" />
    </div>
  );
};


export default function SchoolApparel () {

    const [selectedTarget, setSelectedTarget] = useState('target1');
    const handleTargetSelect = (target) => {
      setSelectedTarget(target);
    };

    return (
      
    <div>
      <MDBTypography className='display-3 pb-3 mb-3'>School Apparel</MDBTypography>

      <div>
      <h1>Select Target Image</h1>
      <ImageSelector
        images={['Assets/LunchBags/2.png', 'Assets/LunchBags/3.png', 'Assets/LunchBags/4.png']}
        onSelect={handleTargetSelect}
      />
      <h1>Select Source Image</h1>
      <ImageSelector
        images={['Assets/LunchBags/5.png', 'Assets/LunchBags/6.png', 'Assets/LunchBags/7.png']}
        onSelect={(source) => {
          console.log(`Selected source: ${source}, Target: ${selectedTarget}`);
        }}
      />
    </div>

    </div>
      
    )
}
