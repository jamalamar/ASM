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
  MDBContainer
} from 'mdb-react-ui-kit';

export default function Home () {
    
    const style = {
        cards: {
          margin: '15px'
        },
        car: {
          margin: 'auto'
        }
    
    }



    return (
      
    <div>
    
    {/******************* Start of Carousell ********************/}
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem
          className='w-100 d-block'
          itemId={1}
          src='Assets/Car2.png'
          alt='Carousel One'
        >
          {/* 
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> 
          */}
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={2}
          src='Assets/Car3.png'
          alt='Carousel Two'
        >
          {/*
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          */}
        </MDBCarouselItem>

        <MDBCarouselItem
          className='w-100 d-block'
          itemId={3}
          src='Assets/Car1.png'
          alt='Carousel Three'
        >
          {/*
          <h5>Third slide label</h5>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          */}
        </MDBCarouselItem>
      </MDBCarousel>
      {/******************* End of Carousell ********************/}


      <br></br>


      {/******************* Start of Info Section ********************/}
      {/*
      <MDBContainer>
        <MDBTypography className='display-3 pb-3 mb-3'>Get all your supplies here</MDBTypography>
        
          <MDBRow className='row-cols-1 row-cols-md-3 g-4' alignment='center'>
            <MDBCol>
              md="4"
            </MDBCol>
            <MDBCol>
              md="4"
            </MDBCol>
            <MDBCol>
              md="4"
            </MDBCol>
          </MDBRow>

      </MDBContainer>
      */}
      {/******************* End of Info Section ********************/}


      <br></br>


      {/******************* Start of Card Group ********************/}
      <div style={style.cards}>
      <MDBTypography className='display-3 pb-3 mb-3'>Products</MDBTypography>
      <MDBRow className='row-cols-1 row-cols-md-4 g-4'>



      {/************************ Lunch Bags *************************/}
      <MDBCol>
        <MDBCard className='h-100' alignment='center'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCarousel className='h-100' alignment='center' >
              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={1}
                src='Assets/LunchBags/14.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={2}
                src='Assets/LunchBags/24.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={3}
                src='Assets/LunchBags/28.png'
                alt='...'
              >
              </MDBCarouselItem>
            </MDBCarousel>

            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Lunch Bags</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
            <MDBBtn rounded className='mx-2' color='info' size='lg' href='#'>Explore</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      

      {/************************ Water Bottles *************************/}
      <MDBCol>
        <MDBCard className='h-100' alignment='center'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCarousel className='h-100' alignment='center' >
              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={1}
                src='Assets/WaterBottles/14.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={2}
                src='Assets/WaterBottles/24.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={3}
                src='Assets/WaterBottles/28.png'
                alt='...'
              >
              </MDBCarouselItem>
            </MDBCarousel>
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Water Bottles</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
            <MDBBtn rounded className='mx-2' color='info' size='lg' href='#'>Explore</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      


      {/************************ Tote Bags *************************/}
      <MDBCol>
        <MDBCard className='h-100' alignment='center'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCarousel className='h-100' alignment='center' >
              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={1}
                src='Assets/ToteBags/14.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={2}
                src='Assets/ToteBags/24.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={3}
                src='Assets/ToteBags/28.png'
                alt='...'
              >
              </MDBCarouselItem>
            </MDBCarousel>
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Tote Bags</MDBCardTitle>
            <MDBCardText>

            </MDBCardText>
            <MDBBtn rounded className='mx-2' color='info' size='lg' href='#'>Explore</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>



      {/************************ 4th Item *************************/}
      <MDBCol>
        
      </MDBCol>


    
    </MDBRow>

    <br></br>

    </div>
    {/******************* End of Card Group ********************/}

    </div>
      
    )
}

