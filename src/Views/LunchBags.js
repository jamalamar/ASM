import React, { Component, useState } from 'react';

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
  MDBTypography,
  MDBBadge, 
  MDBListGroup, 
  MDBListGroupItem,
  MDBAccordion, 
  MDBAccordionItem,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';



const ImageSelector = ({ images, onSelect }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleClick = (image) => {
    setSelectedImage(image);
    onSelect(image);
  };

  return (
    <div>
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


export default function LunchBags () {

    const [selectedTarget, setSelectedTarget] = useState('target1');
    const handleTargetSelect = (target) => {
      setSelectedTarget(target);
    };



    return (
      
    <div className='p-5'>
      <MDBTypography className='display-3 pb-3 mb-3'>Lunch Bags</MDBTypography>


        <MDBListGroup style={{ minWidth: '22rem' }} light>
        
        
        {/************************ITEM 1***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            
            
            {/**************Item Image*************/}
              <ImageSelector
                images={[
                  'Assets/LunchBags/2.png', 
                  'Assets/LunchBags/3.png', 
                  'Assets/LunchBags/4.png', 
                  'Assets/LunchBags/5.png', 
                  'Assets/LunchBags/6.png', 
                  'Assets/LunchBags/7.png', 
                  'Assets/LunchBags/8.png', 
                  'Assets/LunchBags/9.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>Non-Woven Colony Tote Bag</p>
              <p className='text-muted mb-1'>STYLE #561196453</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '12px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made from durable 80GSM non-woven polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Thermal food-safe foil main compartment.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  5" front open pocket and 16" reinforced webbing handle.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Designed to hold 6 canned beverages.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '12px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '12px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  7.25 " x 10 " x 4.75 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
            
            {/*
            <div>
              <MDBAccordion initialActive={1} className="fs-6 fw-lighter">
                <MDBAccordionItem collapseId={1} headerTitle={<> 
                  <p className='fw-bold'> &nbsp; Colors: </p> </>}>
                    <MDBListGroup style={{ minWidth: '22rem' }} light>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      White
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Red
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Lime Green
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Hunter Green
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Purple
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Black
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Orange
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Reflex Blue
                    </MDBListGroupItem>
                    <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                      Navy Blue
                    </MDBListGroupItem>
                  </MDBListGroup>
                </MDBAccordionItem>
              </MDBAccordion>
            </div>
            */}
            
          </div>
        </MDBListGroupItem>
        
        


        {/************************ITEM 2***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/LunchBags/10.png', 
                  'Assets/LunchBags/11.png', 
                  'Assets/LunchBags/12.png', 
                  'Assets/LunchBags/13.png', 
                  'Assets/LunchBags/14.png', 
                  'Assets/LunchBags/15.png', 
                  'Assets/LunchBags/16.png', 
                  'Assets/LunchBags/17.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>6 Pack Non-woven Cooler Bag</p>
              <p className='text-muted mb-0'>STYLE #561196452</p>
            </div>
          </div>
          <MDBBadge pill light color='success'>
            Available
          </MDBBadge>
        </MDBListGroupItem>
        
        


        {/************************ITEM 3***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='Assets/LunchBags/23.png'
              alt=''
              style={{ width: '360px', height: '360px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Bayamo Cooler Lunch Bag</p>
              <p className='text-muted mb-0'>STYLE #562130564</p>
            </div>
          </div>
          <MDBBadge pill light color='success'>
            Available
          </MDBBadge>
        </MDBListGroupItem>

        


        {/************************ITEM 4***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='Assets/LunchBags/30.png'
              alt=''
              style={{ width: '360px', height: '360px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Non-Woven Chow Time Cooler Bag</p>
              <p className='text-muted mb-0'>STYLE #560340683</p>
            </div>
          </div>
          <MDBBadge pill light color='success'>
            Available
          </MDBBadge>
        </MDBListGroupItem>

        


        {/************************ITEM 5***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='Assets/LunchBags/35.png'
              alt=''
              style={{ width: '360px', height: '360px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Budget Lunch Bag</p>
              <p className='text-muted mb-0'>STYLE #559758579</p>
            </div>
          </div>
          <MDBBadge pill light color='success'>
            Available
          </MDBBadge>
        </MDBListGroupItem>

        


        {/************************ITEM 6***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='Assets/LunchBags/47.png'
              alt=''
              style={{ width: '360px', height: '360px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Crosshatch Non-Woven Lunch Bag</p>
              <p className='text-muted mb-0'>STYLE #561137807</p>
            </div>
          </div>
          <MDBBadge pill light color='success'>
            Available
          </MDBBadge>
        </MDBListGroupItem>




        {/************************ITEM 7***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='Assets/LunchBags/53.png'
              alt=''
              style={{ width: '360px', height: '360px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Link Lunch Cooler</p>
              <p className='text-muted mb-0'>STYLE #559728134</p>
            </div>
          </div>
          <MDBBadge pill light color='success'>
            Available
          </MDBBadge>
        </MDBListGroupItem>


      </MDBListGroup>

    </div>
      
    )
}
