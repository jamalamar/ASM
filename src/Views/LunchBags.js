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
  MDBBadge, 
  MDBListGroup, 
  MDBListGroupItem
} from 'mdb-react-ui-kit';

export default function LunchBags () {

    return (
      
    <div className='p-5'>
      <MDBTypography className='display-3 pb-3 mb-3'>Lunch Bags</MDBTypography>



      <div className='p-2'>
        <MDBListGroup style={{ minWidth: '22rem' }} light>
        
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='Assets/LunchBags/2.png'
              alt=''
              style={{ width: '360px', height: '360px' }}
              className='rounded-circle'
            />
            <div className='ms-3'>
              <p className='display-6 fw-bold mb-1'>Non-Woven Colony Tote Bag</p>
              <p className='text-muted mb-0'>STYLE #561196453</p>
            </div>
          </div>
          <MDBBadge pill light color='success'>
            Available
          </MDBBadge>
        </MDBListGroupItem>
        
        
        <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center'>
            <img
              src='Assets/LunchBags/10.png'
              alt=''
              style={{ width: '360px', height: '360px' }}
              className='rounded-circle'
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

    </div>
      
    )
}
