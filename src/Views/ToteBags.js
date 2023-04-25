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




export default function ToteBags () {

    
      const [selectedTarget, setSelectedTarget] = useState('target1');
      const handleTargetSelect = (target) => {
        setSelectedTarget(target);
      };

   

    return (
      
      <div className='p-5'>
      <MDBTypography className='display-3 pb-3 mb-3'>Tote Bags</MDBTypography>


        <MDBListGroup style={{ minWidth: '22rem' }} light>
        
        
        {/************************ITEM 1***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/ToteBags/1.png', 
                  'Assets/ToteBags/2.png', 
                  'Assets/ToteBags/3.png', 
                  'Assets/ToteBags/4.png',
                  'Assets/ToteBags/5.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>Convention, Corporate, Travel, Beach and Boar Tote Bag</p>
              <p className='text-muted mb-1'>STYLE #560166537</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 100</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  T80GSM non-woven tote bag.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Large storage main compartment.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  With pen loop, reinforced shoulder length handles.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Reusable and Recyclable.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  17 1/2 " x 13 1/2 " x 6 "
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
                  'Assets/ToteBags/6.png', 
                  'Assets/ToteBags/7.png', 
                  'Assets/ToteBags/8.png', 
                  'Assets/ToteBags/9.png', 
                  'Assets/ToteBags/10.png' 
                  ]}
                onSelect={handleTargetSelect}
              />

            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Non-Woven Colony Tote Bag</p>
              <p className='text-muted mb-0'>STYLE #559759178</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made Of 80 Gram Non- Woven, Coated Water- Resistant Polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  3 Front Pen Loops.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  22" Handles.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  15 " x 15 "
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
                  'Assets/ToteBags/11.png', 
                  'Assets/ToteBags/12.png', 
                  'Assets/ToteBags/13.png',
                  'Assets/ToteBags/14.png', 
                  'Assets/ToteBags/15.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Non-Woven Tote Bag</p>
              <p className='text-muted mb-0'>STYLE #559759434</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made Of 80 Gram Non- Woven, Coated Water- Resistant Polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  5" Gusset.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  21" Handles Spot Clean/Air Dry.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  15 1/2 " x 14 1/2 " x 5 "
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
                  'Assets/ToteBags/16.png', 
                  'Assets/ToteBags/17.png', 
                  'Assets/ToteBags/18.png', 
                  'Assets/ToteBags/19.png',
                  'Assets/ToteBags/20.png', 
                  'Assets/ToteBags/21.png',
                  'Assets/ToteBags/22.png', 
                  'Assets/ToteBags/23.png', 
                  'Assets/ToteBags/24.png', 
                  'Assets/ToteBags/25.png',
                  'Assets/ToteBags/26.png', 
                  'Assets/ToteBags/27.png',
                  'Assets/ToteBags/28.png', 
                  'Assets/ToteBags/29.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Non-Woven Value Tote</p>
              <p className='text-muted mb-0'>STYLE #559759434</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made Of 80 Gram Non- Woven, Coated Water- Resistant Polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  5" Gusset.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  21" Handles Spot Clean/Air Dry.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  14 " x 13 1/4 "
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
                  'Assets/ToteBags/30.png',
                  'Assets/ToteBags/31.png',
                  'Assets/ToteBags/32.png',
                  'Assets/ToteBags/33.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Stylish Tote Bag</p>
              <p className='text-muted mb-0'>STYLE #562085260</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 175</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Stylish practical 80gsm polypropylene tote bag.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  11 3/4 " x 13 1/2 " x 8 5/8 "
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
                  'Assets/ToteBags/34.png',
                  'Assets/ToteBags/35.png',
                  'Assets/ToteBags/36.png',
                  'Assets/ToteBags/37.png',
                  'Assets/ToteBags/38.png',
                  'Assets/ToteBags/39.png',
                  'Assets/ToteBags/40.png',
                  'Assets/ToteBags/41.png',
                  'Assets/ToteBags/42.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Lake Powell Non-Woven Boat Tote</p>
              <p className='text-muted mb-0'>STYLE #560610169</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Constructed of 80gsm non- woven polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  With front pocket.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Spacious main compartment with reinforced 26" handles.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  7 " x 21 " x 15 "
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
                  'Assets/ToteBags/43.png', 
                  'Assets/ToteBags/44.png', 
                  'Assets/ToteBags/45.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Crystal Clear Tote Bag</p>
              <p className='text-muted mb-0'>STYLE #561944985</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 75</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  600D Polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  25C PVC clear tote bag.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  With two breathable mesh pockets.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  N/A
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
                  'Assets/ToteBags/46.png', 
                  'Assets/ToteBags/47.png', 
                  'Assets/ToteBags/48.png',
                  'Assets/ToteBags/49.png', 
                  'Assets/ToteBags/50.png',
                  'Assets/ToteBags/51.png',
                  'Assets/ToteBags/52.png', 
                  'Assets/ToteBags/53.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Rivers Pocket Non-Woven Convention Tote</p>
              <p className='text-muted mb-0'>STYLE #560610169</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 250</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Lots of storage including an open main compartment, front pocket and two pen pockets.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Reusable and comes with 26 inch handles.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  3 " x 17 " x 15 "
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
                  'Assets/ToteBags/54.png', 
                  'Assets/ToteBags/55.png', 
                  'Assets/ToteBags/56.png',
                  'Assets/ToteBags/57.png', 
                  'Assets/ToteBags/58.png', 
                  'Assets/ToteBags/59.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Non-Woven Tote Bag With Trim Colors</p>
              <p className='text-muted mb-0'>STYLE #559759282</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Lots of storage including an open main compartment, front pocket and two pen pockets.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Reusable and comes with 26 inch handles.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  18 " x 14 " x 3 1/2 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </MDBListGroupItem>




        {/************************ITEM 10***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/ToteBags/60.png',
                  'Assets/ToteBags/61.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Grandview Zippered Convention Tote</p>
              <p className='text-muted mb-0'>STYLE #559759282</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 75</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Large zippered main compartment.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  With double 25 inch handles.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Open front pocket, a side mesh pocket and a regular side pocket.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  5 " x 13.5 " x 16.5 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </MDBListGroupItem>



                {/************************ITEM 11***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/ToteBags/62.png',
                  'Assets/ToteBags/63.png',
                  'Assets/ToteBags/64.png',
                  'Assets/ToteBags/65.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Tonal Non-Woven Zipper Trade Show Tote Bag</p>
              <p className='text-muted mb-0'>STYLE #561549935</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of 80 GSM non-woven polypropylene.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Created with 10% post- consumer recycled content.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  It has 19.5" handles.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  17.25 " x 13 " x 3.5 "
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
          </div>
        </MDBListGroupItem>


      </MDBListGroup>
    </div>
      
    )
}
