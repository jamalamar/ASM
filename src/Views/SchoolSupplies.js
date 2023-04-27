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
    <div style={{ width: '520px', height: '100' }}>
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




export default function SchoolSupplies () {

    
      const [selectedTarget, setSelectedTarget] = useState('target1');
      const handleTargetSelect = (target) => {
        setSelectedTarget(target);
      };

   

    return (
      
      <div className='p-5'>
      <MDBTypography className='display-3 pb-3 mb-3 fw-bold'>School Supplies</MDBTypography>


        <MDBListGroup style={{ minWidth: '22rem' }} light>
        
        
        {/************************ITEM 1***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/SchoolApparel/21.png', 
                  'Assets/SchoolApparel/22.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>18" BASIC BACKPACK</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Material: 600D Polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Reinforced Seams.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Double zipper main compartment.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Zipper front pocket.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Adjustable padded straps with mesh back.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  Size: 18" x 13" x 6"
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
                  'Assets/SchoolSupplies/1.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>ELEMENTARY SUPPLIES</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 10</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Whats Included:</p>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; subject spiral notebook
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  3 &nbsp; organizer folder
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; clear plastic pencil bag
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  6 &nbsp; pencils
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  12&nbsp; colored pencils
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  8 &nbsp; standard crayons
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; sharpener
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; eraser
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; safety scissors
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; clear plastic ruler
                </MDBListGroupItem>
              </MDBListGroup>

            </div>
            
          </div>
        </MDBListGroupItem>
        
        


        {/************************ITEM 3***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/SchoolSupplies/2.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>MIDDLE/HIGH SCHOOL SUPPLIES</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 10</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Whats Included:</p>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; subject spiral notebook
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  3 &nbsp; organizer folder
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; clear plastic pencil bag with zipper
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  6 &nbsp; pencils
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  12&nbsp; colored pencils
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  6 &nbsp; pens ( 2 blue, 2 black, 2 red)
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; sharpener
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; eraser
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; safety scissors
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; 6" plastic ruler
                </MDBListGroupItem>
              </MDBListGroup>

            </div>
            
          </div>
        </MDBListGroupItem>

        


        {/************************ITEM 4***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/SchoolSupplies/3.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>SCHOOL SUPPLY KIT (20 PIECES)</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 10</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Whats Included:</p>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; subject spiral notebook
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; two-pocket organizer folder
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; pencil case
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  3 &nbsp; pencils
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  3 &nbsp; ballpoint ink pens
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  5 &nbsp; crayons
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; glue stick
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; highlighter
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  2 &nbsp; pink erasers
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; 12" inch ruler (includes metric centimetres)
                </MDBListGroupItem>
              </MDBListGroup>

            </div>
            
          </div>
        </MDBListGroupItem>

        


        {/************************ITEM 5***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/SchoolSupplies/4.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>UNISEX 17" BACKPACK & SCHOOL SUPPLY KIT (20 PIECES)</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 10</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Whats Included:</p>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; 17" backpack
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; pencil sharpener
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  2 &nbsp; pink erasers
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; two-pocket folder
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; 70-page notebook
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; 12-inch ruler
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; pencil case
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  5 &nbsp; pack crayons
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  3 &nbsp; pencils
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  3 &nbsp; pens (blue & black)                
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; glue-stick                
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; highlighter               
                </MDBListGroupItem>
              </MDBListGroup>

            </div>
            
          </div>
        </MDBListGroupItem>



        {/************************ITEM 6***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/SchoolSupplies/5.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>UNISEX 19" BACKPACK & SCHOOL SUPPLY KIT (30 PIECES)</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 10</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Whats Included:</p>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; 19" backpack with side mesh pocket
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; 70-page notebook
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  3 &nbsp; two-pocket folders
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; pencil case
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  5 &nbsp; pencils
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  1 &nbsp; pencil sharpener
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 m-0 text-capitalize'>
                  5 &nbsp; ballpoint ink pens (2 black, 2 blue, 1 red)
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  3 &nbsp; pink erasers
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  5 &nbsp; crayons
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  2 &nbsp; highlighters             
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; 12" ruler                
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; 5" blunt tip safety scissors               
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0 text-capitalize'>
                  1 &nbsp; 2 glue-sticks            
                </MDBListGroupItem>
              </MDBListGroup>

            </div>
            
          </div>
        </MDBListGroupItem>


      </MDBListGroup>
    </div>
      
    )
}
