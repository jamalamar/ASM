import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBTypography,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' sticky dark bgColor='black'>
      <MDBContainer fluid>
        
        <MDBNavbarBrand href='/' className=''>
            <img
            src='Assets/Nav_Logo.png'
            style={{height: 60,}}
            alt='ASM Logo'
            />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            
            <MDBNavbarItem>
              <MDBNavbarLink href='/About'>
                About
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBNavbarLink href='/FAQs'>
                FAQ's
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Catalog
                </MDBDropdownToggle>
                
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/'>Lunch Bags</MDBDropdownItem>
                  <MDBDropdownItem link href='/'>Water Bottles</MDBDropdownItem>
                  <MDBDropdownItem link href='/'>Tote Bags</MDBDropdownItem>
                </MDBDropdownMenu>
              
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/Contact'>
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>


          <section className='flex-row-reverse'>
              <div className='me-2'>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="linkedin" />
                </a>
              </div>
            </section>

        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}