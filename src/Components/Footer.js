import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >

      <section className='border-bottom border-top '>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className=''>
            <MDBCol md="3" lg="4" xl="3" className='text-center mb-3'>
              <img src='Assets/Icon.png' style={{height: 120,}} alt='ASM Logo'/>
              <p className='pt-2 fw-bold'>
                Get all of your supplies with us!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Lunch Bags
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Water Bottles
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tote Bags
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='/Contact' className='text-reset'>
                  Contact
                </a>
              </p>
              <p>
                <a href='/About' className='text-reset'>
                  Info
                </a>
              </p>
              <p>
                <a href='/FAQs' className='text-reset'>
                  FAQ's
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@asmsupplies.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright 
         <a className='text-reset fw-bold' href=''>
         : ASM Supplies
        </a>
      </div>
    </MDBFooter>
  );
}
