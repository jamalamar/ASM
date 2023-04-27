import React, { Component, useState } from 'react';

import {
  MDBTypography,
  MDBBadge, 
  MDBListGroup, 
  MDBListGroupItem,
  MDBAccordion, 
  MDBAccordionItem,
  MDBIcon,
  MDBBtn,
  MDBTable, 
  MDBTableHead, 
  MDBTableBody
} from 'mdb-react-ui-kit';




const ImageSelector = ({ images, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
    onSelect(image);
  };

  return (
    <div style={{ width: '520px', height: '100' }} >
      <img src={selectedImage} alt="Selected Image" style={{ width: '480px', height: '480px' }}/>
      <br></br>
      {images.map((image, index) => (
        <MDBBtn color='tertiary' key={index} onClick={() => handleClick(image)}>
          <img src={image} alt={`Thumbnail ${index + 1}`} width="50" height="50" />
        </MDBBtn>
      ))}
    </div>
  );
};




export default function Toiletries () {

    
      const [selectedTarget, setSelectedTarget] = useState('target1');
      const handleTargetSelect = (target) => {
        setSelectedTarget(target);
      };

   

    return (
      
      <div className='p-5'>
      <MDBTypography className='display-3 pb-3 mb-3'>Toiletries</MDBTypography>


        <MDBListGroup style={{ minWidth: '22rem' }} light>
        
        
        {/************************ITEM 1***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/Toiletries/4.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div className='px-3'>
              <p className='display-6 fw-bold mb-1'>UNISEX TOILETRY PACKAGE</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 10</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Whats Included:</p>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Hand & Body Wash
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Hand & Body Lotion
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Hand Sanitizer
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  3 &nbsp; Soap Bars
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Deodorant
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Pert Plus (2-in-1 Shampoo & Conditioner)
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Comb
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Toothbrush
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Toothpaste
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Wash Cloth
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Toiletry bag
                </MDBListGroupItem>
              </MDBListGroup>

            </div>
            
          </div>
        </MDBListGroupItem>
        
        


        {/************************ITEM 2***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/Toiletries/5.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div className='px-3'>
              <p className='display-6 fw-bold mb-1'>FEMALE TOILETRY PACKAGE</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 10</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Whats Included:</p>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Hand & Body Wash
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Hand & Body Lotion
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Hand Sanitizer
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  3 &nbsp; Soap Bars
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Deodorant
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Pert Plus (2-in-1 Shampoo & Conditioner)
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; Comb
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Toothbrush
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Toothpaste
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Wash Cloth
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Toiletry bag
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; Pack of Pads
                </MDBListGroupItem>
              </MDBListGroup>

            </div>
            
          </div>
        </MDBListGroupItem>


      </MDBListGroup>
    </div>
      
    )
}
