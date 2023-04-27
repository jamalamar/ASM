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
  MDBIcon
} from 'mdb-react-ui-kit';

export default function CustomDesigns () {
    
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

    <div className='text-center py-5'>
      <MDBIcon icon='graduation-cap' size='5x' color='dark'/>
      <MDBTypography className='display-2 text-center text-dark'>Custom Designs</MDBTypography>
      <MDBTypography className='px-5 mx-5 '>
        ASM-Essentials allows schools to create their own unique designs on various clothing items such 
        as t-shirts, hoodies, sweatshirts, and more. We provide schools with a wide range of 
        design options, allowing them to create custom apparel that reflects their school spirit and pride.
      </MDBTypography>
    </div>

      {/******************* Start of Card Group ********************/}
      <div style={style.cards}>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4 px-5 mx-5'>


      {/************************ Classic Designs *************************/}
      <MDBCol>
        <MDBCard className='h-100' alignment='center'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCarousel className='h-100' alignment='center' >
              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={1}
                src='Assets/CustomDesigns/1.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={2}
                src='Assets/CustomDesigns/5.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={3}
                src='Assets/CustomDesigns/11.png'
                alt='...'
              >
              </MDBCarouselItem>
            </MDBCarousel>

            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Classic Examples</MDBCardTitle>
            
            <MDBCardText>
            
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      
      

      {/************************ Modern Designs *************************/}
      <MDBCol>
        <MDBCard className='h-100' alignment='center'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCarousel className='h-100' alignment='center' >
              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={1}
                src='Assets/CustomDesigns/2.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={2}
                src='Assets/CustomDesigns/3.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={3}
                src='Assets/CustomDesigns/4.png'
                alt='...'
              >
              </MDBCarouselItem>
            </MDBCarousel>
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Modern Examples</MDBCardTitle>
            
            <MDBCardText>

            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      


      {/************************ Vintage Designs *************************/}
      <MDBCol>
        <MDBCard className='h-100' alignment='center'>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
            <MDBCarousel className='h-100' alignment='center' >
              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={1}
                src='Assets/CustomDesigns/8.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={2}
                src='Assets/CustomDesigns/9.png'
                alt='...'
              >
              </MDBCarouselItem>

              <MDBCarouselItem
                className='w-100 h-100 d-block'
                itemId={3}
                src='Assets/CustomDesigns/10.png'
                alt='...'
              >
              </MDBCarouselItem>
            </MDBCarousel>
            <a>
              <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
            </a>
          </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Vintage Examples</MDBCardTitle>
            
            <MDBCardText>

            </MDBCardText>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    
    </MDBRow>

    </div>
    {/******************* End of Card Group ********************/}




    {/******************* Start of Info Section ********************/}
      <MDBContainer className='text-center py-5 my-5 bg-tertiary'>
        
          <MDBRow className='row-cols-1 row-cols-md-2 fs-6 ' alignment='center'>
            <MDBCol>
              <MDBIcon icon='tshirt' size='5x' color='primary'/>
              <h3 className='p-5 text-dark'>
                ASM-Essentials is perfect for schools looking to create custom apparel for various events such as 
                sports teams, spirit weeks, fundraising events, and more. We offer a cost-effective and 
                convenient solution for creating custom apparel without the need for specialized design skills or 
                equipment.
              </h3>          
            </MDBCol>
            
            <MDBCol>
              <img 
                src='Assets/CustomDesigns/Custom1.jpg' 
                className='img-fluid shadow-4 border border-primary border-5 rounded' 
                alt='Custom Example' 
              />
            </MDBCol>
          </MDBRow>

      </MDBContainer>


      <MDBContainer className='text-center py-5 my-5 bg-tertiary'>
        
          <MDBRow className='row-cols-1 row-cols-md-2 fs-6 ' alignment='center'>
            <MDBCol>
              <img 
                src='Assets/CustomDesigns/Custom2.jpg' 
                className='img-fluid shadow-4 border border-warning border-5 rounded' 
                alt='Custom Example' 
              />         
            </MDBCol>
            
            <MDBCol>
              <MDBIcon icon='hand-holding-usd' size='5x' color='warning'/>
              <h3 className='p-5'>
                With its wide range of design options, affordable pricing, and exceptional quality,
                ASM-Essentials also offers bulk orders and discounts for larger quantities, making it an ideal choice 
                for schools and organizations looking to create branded merchandise for their students and staff.
              </h3>
            </MDBCol>
          </MDBRow>

      </MDBContainer>

      {/******************* End of Info Section ********************/}



    </div>

      
    )
}

