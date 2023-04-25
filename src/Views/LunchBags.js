import React, { Component, useState } from 'react';

import {
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
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
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

              <p className='fw-bold mt-3' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
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
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made from 80 GSM non- woven polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  With a thermal food-safe foil lining.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  8 " x 6.5 " x 5.5 "
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
                  'Assets/LunchBags/23.png', 
                  'Assets/LunchBags/24.png', 
                  'Assets/LunchBags/25.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Bayamo Cooler Lunch Bag</p>
              <p className='text-muted mb-0'>STYLE #562130564</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 175</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Bayamo cooler lunch bag.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Flap with hook and loop closure.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Non-woven Polypropylene.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  7 7/8 " x 10 1/2 " x 6 1/2 "
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
                  'Assets/LunchBags/30.png', 
                  'Assets/LunchBags/32.png', 
                  'Assets/LunchBags/33.png', 
                  'Assets/LunchBags/34.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Non-Woven Chow Time Cooler Bag</p>
              <p className='text-muted mb-0'>STYLE #560340683</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 175</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Reusable lightweight 80GSM bag.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Secure your meals with the foldable flap and hook and loop fastener closure.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  10 " x 7 1/4 " x 5 1/2 "
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
                  'Assets/LunchBags/35.png', 
                  'Assets/LunchBags/36.png', 
                  'Assets/LunchBags/37.png', 
                  'Assets/LunchBags/38.png',
                  'Assets/LunchBags/39.png',
                  'Assets/LunchBags/40.png',
                  'Assets/LunchBags/41.png',
                  'Assets/LunchBags/42.png',
                  'Assets/LunchBags/43.png',
                  'Assets/LunchBags/44.png',
                  'Assets/LunchBags/45.png',
                  'Assets/LunchBags/46.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Budget Lunch Bag</p>
              <p className='text-muted mb-0'>STYLE #559758579</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made Of 210D Polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  PEVA Lining.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Web Carrying Handle.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Front Pocket.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Hook And Loop Closure.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  HSpot Clean/Air Dry.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  6 7/8 " x 9 1/2 " x 4 5/8 "
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
                  'Assets/LunchBags/47.png', 
                  'Assets/LunchBags/48.png', 
                  'Assets/LunchBags/49.png', 
                  'Assets/LunchBags/50.png',
                  'Assets/LunchBags/51.png',
                  'Assets/LunchBags/52.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Crosshatch Non-Woven Lunch Bag</p>
              <p className='text-muted mb-0'>STYLE #561137807</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made Of 80 Gram Non- Woven, Coated Water- Resistant Polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Foil Laminated PE Foam Insulation.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  8 1/2" Handle.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Spot Clean/Air Dry.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  9 3/4 " x 7 " x 5 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </MDBListGroupItem>




        {/************************ITEM 7***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/LunchBags/53.png', 
                  'Assets/LunchBags/54.png', 
                  'Assets/LunchBags/55.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Link Lunch Cooler</p>
              <p className='text-muted mb-0'>STYLE #559728134</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made Of 80 Gram Non- Woven, Coated Water- Resistant Polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Foil Laminated PE Foam Insulation.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  8 1/2" Handle.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Spot Clean/Air Dry.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  10 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </MDBListGroupItem>




        {/************************ITEM 8***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/LunchBags/20.png', 
                  'Assets/LunchBags/21.png', 
                  'Assets/LunchBags/22.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Cool-It Insulated Cooler Bag</p>
              <p className='text-muted mb-0'>STYLE #560166672</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Eco-friendly 80GSM non- woven cooler bag.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Foam insulated with lead free aluminum lining.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  8 " x 6 " x 6 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </MDBListGroupItem>




        {/************************ITEM 9***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/LunchBags/1.png',
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Conserve RPET Non-Woven Lunch Cooler</p>
              <p className='text-muted mb-0'>STYLE #562779789</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of 80 GSM Non-Woven Post-Consumer RPET.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Exterior with Aluminum Film + PE Foam insulation.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made from Post-Consumer recycled PET Plastic bottles.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Holds six 12 oz. cans.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Hand wash only.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Recommended weight tolerance: 22 lbs.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  8 " x 6.5 " x 5 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </MDBListGroupItem>


      </MDBListGroup>

    </div>
      
    )
}
