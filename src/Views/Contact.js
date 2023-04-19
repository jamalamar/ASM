import React, { Component } from 'react';

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
  MDBBtn,
  MDBRipple,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';

export default function Contact () {

  const style = {
        customSelect: {
          margin: '15px'
        }
    
    }

    return (
      
    <MDBContainer className="contact-section pt-5 black">
    <form name="ASMContactForm" method="post" >
              {/*Value set to the same of the Form on Index.html*/}
      <input type="hidden" name="form-name" value="ASMContactForm" />
              
          <MDBCard className="p-5" >
          
            <MDBRow className="flex-center">
              <MDBCol>
              
              <MDBTypography className='display-4 text-center'>Contact Us</MDBTypography>
              <MDBTypography className='fw-light text-center'>Fill in your information and we'll get back to you as soon as possible.</MDBTypography>

                <MDBCardBody className="form">
                  <p className="p-2">
                  <select name="Subject" className="browser-default custom-select" required>
                    <option value="">SELECT AN OPTION</option>
                    <option value="Quote">Quote</option>
                    <option value="Special Request">Special Request</option>
                    <option value="Product Feedback">Product Feedback</option>
                    <option value="Issue With My Order">Issue With My Order</option>
                    <option value="Other">Other</option>
                  </select>
                  </p>
                  
                  <MDBRow>
                    <MDBCol>
                      <div className="md-form p-2">
                        <MDBInput
                        label="Name"
                        name="Name"
                        type="text"
                        id="form-name"
                        required
                        />
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="md-form p-2">
                        <MDBInput
                        label="Email"
                        name="Email"
                        type="email"
                        id="form-email"
                        required
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  
                  <MDBRow>
                    <MDBCol>
                      <div className="md-form p-2">
                        <MDBInput
                        label="City"
                        name="City"
                        type="text"
                        id="form-city"
                        required
                        />
                      </div>
                    </MDBCol>
                    <MDBCol>
                      <div className="md-form p-2">
                        <MDBInput
                        label="Phone Number"
                        name="Phone"
                        type="tel"
                        id="form-phone"
                        required
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                  
                  <MDBRow>
                    <MDBCol>
                      <div className="md-form p-2">
                        <MDBTextArea
                        label="Message"
                        name="Message"
                        type="textarea"
                        id="form-text"
                        size='lg'
                        rows={3}
                        required
                        />
                      </div>
                      
                      <MDBBtn type="submit" color="success" >
                        Submit <MDBIcon icon="paper-plane" />
                      </MDBBtn>
                    </MDBCol>
                  </MDBRow>

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
          </form>
        </MDBContainer>
      
    )
}

