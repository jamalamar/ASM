import React, { Component } from 'react';

import {
  MDBContainer,
  MDBTypography,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function About () {

    return (
      
    <div>

        {/******************* Banner Image ********************/}
        <div className='bg-image'>
          <img src='Assets/About_banner.jpg' className='img-fluid shadow-4' alt='FAQs Banner' />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <MDBTypography className='display-1 p-4 my-5 fw-bold text-light'>Why Choose ASM?</MDBTypography>
            </div>
          </div>
        </div>


      <MDBContainer className='text-center py-5'>
        
        
          <MDBRow className='row-cols-1 row-cols-md-3 fs-6 ' alignment='center'>
            <MDBCol>
              <MDBIcon icon='users' size='4x' color='info'/>
              <MDBTypography className='p-5'>
                A family-founded and operated business since 2018, dedicated to transforming your ideas into
                reality. ASM Essentials is a top-of-the-line supplier and retailer for school apparel, supplies and
                more. The one-stop shop for all your essential needs.
              </MDBTypography>
            </MDBCol>
            
            <MDBCol>
              <MDBIcon icon='award' size='4x' color='warning'/>
              <MDBTypography className='p-5'>
                Our vision and drive are what make us unique, an idea that transpired in the basement of our
                family home, moulded itself into a successful business, tailored to servicing the best products
                in the industry. Product, quality, accountability, and customer satisfaction are of our utmost
                priorities at AM Essentials.  
              </MDBTypography>          
            </MDBCol>
            
            <MDBCol>
              <MDBIcon icon='headset' size='4x' color='danger'/>
              <MDBTypography className='p-5'>
              Our team is committed to providing the best possible customer experience. We work closely
              and iteratively with our partners throughout every step of the process, from ideation to delivery,
              and beyond. We are never happy until you are. When you become a partner, you become a
              part of our family, meaning your success is ours.
              </MDBTypography>
            </MDBCol>
          </MDBRow>

          <MDBTypography className='display-6 pb-5 pt-3 fw-bold'>
            We look forward to welcoming you into the ASM Essentials family.
          </MDBTypography>

      </MDBContainer>


    </div>
      
    )
}

