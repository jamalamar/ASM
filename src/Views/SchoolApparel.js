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
      <br></br>
      <p className='fw-bold pt-3'>Available Colors:</p>
      <div className=''>
        <MDBIcon icon='circle' size='2x' color='dark' className=''/>
        <MDBIcon icon='circle' size='2x' color='secondary' className='px-4'/>
        <MDBIcon icon='circle' size='2x' color='light' className=''/>
        <MDBIcon icon='circle' size='2x' style={{color: 'rgba(1, 58, 99, 1)'}} className='px-4'/>
        <MDBIcon icon='circle' size='2x' color='primary' className=''/>
        <MDBIcon icon='circle' size='2x' style={{color: 'rgba(120, 0, 0, 1)'}} className='px-4'/>
      </div>
    </div>
  );
};




export default function SchoolApparel () {

    
      const [selectedTarget, setSelectedTarget] = useState('target1');
      const handleTargetSelect = (target) => {
        setSelectedTarget(target);
      };

   

    return (
      
      <div className='p-5'>
      <MDBTypography className='display-3 pb-3 mb-3 fw-bold'>School Apparel</MDBTypography>


        <MDBListGroup style={{ minWidth: '22rem' }} light>
        
        
        {/************************ITEM 1***********************/}
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
              <ImageSelector
                images={[
                  'Assets/SchoolApparel/1.png', 
                  'Assets/SchoolApparel/2.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>SHORT SLEEVE T-SHIRT</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 50/50 cotton/polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Advance moisture-management performance.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Classic Fit.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  3/4" double-needle topstitched collar.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Double-needle sleeve and bottom hem.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/3.png', 
                  'Assets/SchoolApparel/4.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>LONG SLEEVE T-SHIRT</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 100% cotton.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Ribbed Cuffs.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Classic Fit.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  3/4" double-needle topstitched collar.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Double-needle sleeve and bottom hem.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/5.png', 
                  'Assets/SchoolApparel/6.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>V-NECK T-SHIRT</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  100% cotton.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Classic Fit.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Double-needle sleeve and bottom hem.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/7.png', 
                  'Assets/SchoolApparel/8.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>SHORT SLEEVE POLO SHIRT</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 50/50 cotton/polyester knit.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Classic Fit.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Ribbed Collar and Cuffs.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Double-needle bottom hem.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/9.png', 
                  'Assets/SchoolApparel/10.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>LONG SLEEVE POLO SHIRT</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 50/50 cotton/polyester knit.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Fabric construction repels water and most oil-based spills.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Classic Fit.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Ribbed Collar and Cuffs.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Double-needle bottom hem.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/11.png', 
                  'Assets/SchoolApparel/12.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>CREWNECK SWEATSHIRT</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 50/50 cotton/polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pill-resistant fleece.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   Double-needle stitched collar, armholes, and waistband.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/13.png', 
                  'Assets/SchoolApparel/14.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>PULLOVER HOODIE</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 50/50 cotton/polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pill-resistant fleece.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   Front pouch pocket.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   Ribbed cuffs and waistband.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   No drawcord on youth sizes for safety.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/15.png', 
                  'Assets/SchoolApparel/16.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>SWEATPANTS</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 50/50 cotton/polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pill-resistant fleece.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   Elastic waistband and bottom leg openings.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   No Pockets.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   No drawcord on youth sizes for safety.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/17.png', 
                  'Assets/SchoolApparel/18.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>JOGGER PANTS</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Pre-shrunk 60/40 cotton/polyester.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Ribbed Cuffs.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   Pill-resistant fleece.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   Elastic waistband with external drawcord.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   No drawcord on youth sizes for safety.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
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
                  'Assets/SchoolApparel/19.png', 
                  'Assets/SchoolApparel/20.png'
                  ]}
                onSelect={handleTargetSelect}
              />

            <div>
              <p className='display-6 fw-bold mb-1'>MESH SHORTS</p>
              <p className='text-muted mb-1'>STYLE # -</p>
              <p className='text-warning mb-1'>Minimum Order Qty: -</p>
              <MDBBadge pill light color='success' className='mb-3'>Available</MDBBadge>
            
              <MDBListGroup style={{ fontSize: '14px' }} light>
              <p className='fw-bold'>Description:</p>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  100% polyester mesh.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                  Solid tricot liner.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   1 1/2 inch covered elastic waistband.
                </MDBListGroupItem>
                <MDBListGroupItem action className='px-3 rounded-3 mb-0'>
                   No drawcord on youth sizes for safety.
                </MDBListGroupItem>
              </MDBListGroup>

              <p className='fw-bold mt-3 mb-0' style={{ fontSize: '14px' }}>Sizes:</p>
              <MDBListGroup style={{ fontSize: '14px' }} light>
                <MDBListGroupItem action className='rounded-3'>
                  <MDBTable bordered small borderColor="dark" className='text-center mb-0'>
                    <MDBTableHead>
                      <tr className='table-active'>
                        <th scope='col'></th>
                        <th scope='col'>XS</th>
                        <th scope='col'>S</th>
                        <th scope='col'>M</th>
                        <th scope='col'>L</th>
                        <th scope='col'>XL</th>
                        <th scope='col'>2XL</th>
                        <th scope='col'>3XL</th>
                        <th scope='col'>4XL</th>
                        <th scope='col'>5XL</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <th scope='row' className='fw-bold' >YOUTH</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                      <tr>
                        <th scope='row' className='fw-bold' >ADULT</th>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="check" color='success' /></td>
                        <td><MDBIcon fas icon="times" color='danger' /></td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                </MDBListGroupItem>
              </MDBListGroup>
            </div>
            
          </div>
        </MDBListGroupItem>


      </MDBListGroup>
    </div>
      
    )
}
