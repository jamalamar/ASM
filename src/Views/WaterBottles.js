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




export default function WaterBottles () {

    
      const [selectedTarget, setSelectedTarget] = useState('target1');
      const handleTargetSelect = (target) => {
        setSelectedTarget(target);
      };

   

    return (
      
      <div className='p-5'>
      <MDBTypography className='display-3 pb-3 mb-3 fw-bold'>Water Bottles</MDBTypography>


        <MDBListGroup style={{ minWidth: '22rem' }} light>
        
        
        {/************************ITEM 1***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/WaterBottles/1.png', 
                  'Assets/WaterBottles/2.png', 
                  'Assets/WaterBottles/3.png', 
                  'Assets/WaterBottles/4.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>Bike Bottle (20 oz)</p>
              <p className='text-muted mb-1'>STYLE #15588361</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of BPA free.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Food grade polyethylene (HDPE #2).
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  The wide mouth design makes it easy to add ice cubes.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Features a leak-resistant, push- pull lid, contoured neck for bike holder, and fits most auto cup holders.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Top rack dishwasher safe.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Your school logo, advertising message, or slogan screen printed on the front.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  N/A
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
                  'Assets/WaterBottles/5.png', 
                  'Assets/WaterBottles/6.png', 
                  'Assets/WaterBottles/7.png', 
                  'Assets/WaterBottles/8.png', 
                  'Assets/WaterBottles/9.png', 
                  'Assets/WaterBottles/10.png', 
                  'Assets/WaterBottles/11.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Translucent Recreation Bottle with Flip Top Lid (20 Oz)</p>
              <p className='text-muted mb-0'>STYLE #560930181</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  BPA free.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  The wide mouth design makes it easy to add ice cubes.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Your logo prominently displayed.
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
        
        


        {/************************ITEM 3***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/WaterBottles/12.png', 
                  'Assets/WaterBottles/13.png', 
                  'Assets/WaterBottles/14.png',
                  'Assets/WaterBottles/15.png', 
                  'Assets/WaterBottles/16.png', 
                  'Assets/WaterBottles/17.png',
                  'Assets/WaterBottles/18.png', 
                  'Assets/WaterBottles/19.png', 
                  'Assets/WaterBottles/20.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Polysure Out of the Block Bottle (24 Oz)</p>
              <p className='text-muted mb-0'>STYLE #561158179</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Food grade PET bottle.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Has a distinct thin Euro body with a mini square pattern on bottom.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Wide-mouth design makes it easy to add ice cubes.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Features a high-gloss finish and a leak-resistant push-pull lid.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Fits most auto cup holders.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Hand wash only.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Your logo printed on the front.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  24 Oz and 16 Oz.
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
                  'Assets/WaterBottles/21.png', 
                  'Assets/WaterBottles/22.png', 
                  'Assets/WaterBottles/23.png', 
                  'Assets/WaterBottles/24.png',
                  'Assets/WaterBottles/25.png', 
                  'Assets/WaterBottles/26.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Water Bottle (24 Oz)</p>
              <p className='text-muted mb-0'>STYLE #561196248</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 200</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of HDPE plastic.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Up to 50% post-consumer recycled materials.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Features a leak-resistant screw top with a wide-mouth design and a pull-spout (cap available in several colors).
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of BPA-free materials.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Not microwave or dishwasher safe - hand wash only.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Your logo printed on the front.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-2' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='px-3 rounded-3'>
                  8 1/2"H x 3"D
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
                  'Assets/WaterBottles/27.png', 
                  'Assets/WaterBottles/28.png', 
                  'Assets/WaterBottles/29.png', 
                  'Assets/WaterBottles/30.png',
                  'Assets/WaterBottles/31.png',
                  'Assets/WaterBottles/32.png',
                  'Assets/WaterBottles/33.png',
                  'Assets/WaterBottles/34.png',
                  'Assets/WaterBottles/35.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Solid Color Bike Bottle (22 Oz)</p>
              <p className='text-muted mb-0'>STYLE #14482599</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 200</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  BPA free.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Product Option Lid Options: Flip Top, Push Pull
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Your logo printed on the front.
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



                {/************************ITEM 6***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/WaterBottles/36.png',
                  'Assets/WaterBottles/37.png',
                  'Assets/WaterBottles/38.png',
                  'Assets/WaterBottles/39.png',
                  'Assets/WaterBottles/40.png',
                  'Assets/WaterBottles/41.png',
                  'Assets/WaterBottles/42.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Translucent Bike Bottle with Flip Top Lid (22 Oz)</p>
              <p className='text-muted mb-0'>STYLE #560928966</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 300</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  With flip top lid.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of PET material.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  BPA free.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Your logo printed on the front.
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

        


        {/************************ITEM 7***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/WaterBottles/43.png', 
                  'Assets/WaterBottles/44.png', 
                  'Assets/WaterBottles/45.png', 
                  'Assets/WaterBottles/46.png',
                  'Assets/WaterBottles/47.png',
                  'Assets/WaterBottles/48.png',
                  'Assets/WaterBottles/49.png',
                  'Assets/WaterBottles/50.png',
                  'Assets/WaterBottles/51.png',
                  'Assets/WaterBottles/52.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Translucent Bike Bottle with Sport Sip Lid (22 Oz)</p>
              <p className='text-muted mb-0'>STYLE #15388864</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 300</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of PET material.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  BPA free.
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
                  'Assets/WaterBottles/53.png', 
                  'Assets/WaterBottles/54.png', 
                  'Assets/WaterBottles/55.png',
                  'Assets/WaterBottles/56.png', 
                  'Assets/WaterBottles/57.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Foldable & Reusable Water Bottle with Matching Carbiner (18 Oz)</p>
              <p className='text-muted mb-0'>STYLE #560186697</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 150</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Matching Carabiner included with each bottle.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  BPA and Lead Free.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Good for the environment.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Features pop up drinking spout and screw on lid.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Not recommended for dishwasher use.
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




        {/************************ITEM 9***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/WaterBottles/58.png', 
                  'Assets/WaterBottles/59.png', 
                  'Assets/WaterBottles/60.png',
                  'Assets/WaterBottles/61.png', 
                  'Assets/WaterBottles/62.png', 
                  'Assets/WaterBottles/63.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Translucent Contour Bottle with Flip Top Lid (24 Oz)</p>
              <p className='text-muted mb-0'>STYLE #15388864</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 300</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of PET material.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  BPA free.
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




        {/************************ITEM 10***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <ImageSelector
                images={[
                  'Assets/WaterBottles/64.png',
                  'Assets/WaterBottles/65.png',
                  'Assets/WaterBottles/66.png',
                  'Assets/WaterBottles/67.png',
                  'Assets/WaterBottles/68.png',
                  'Assets/WaterBottles/69.png',
                  'Assets/WaterBottles/70.png',
                  'Assets/WaterBottles/71.png'
                  ]}
                onSelect={handleTargetSelect}
              />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Prestige Bottle with Sport Sip Lid & Straw (24 Oz)</p>
              <p className='text-muted mb-0'>STYLE #561178666</p>
              <p className='text-warning mb-1'>Minimum Order Qty: 300</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Made of PET material.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  BPA free.
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


      </MDBListGroup>
    </div>
      
    )
}
