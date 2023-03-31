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
  MDBTypography
} from 'mdb-react-ui-kit';

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' sticky dark bgColor='black'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/Home'>ASM Supplies</MDBNavbarBrand>

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
                  <MDBDropdownItem link>Graduation</MDBDropdownItem>
                  <MDBDropdownItem link>School Uniforms</MDBDropdownItem>
                  <MDBDropdownItem link>Senior Hoodies</MDBDropdownItem>
                  <MDBDropdownItem link>Outerwear</MDBDropdownItem>
                  <MDBDropdownItem link>Spirit Wear</MDBDropdownItem>
                  <MDBDropdownItem link>Cell Phone Wallets</MDBDropdownItem>
                  <MDBDropdownItem link>Lanyards</MDBDropdownItem>
                  <MDBDropdownItem link>Lunch Bags</MDBDropdownItem>
                  <MDBDropdownItem link>Pens</MDBDropdownItem>
                  <MDBDropdownItem link>Tote Bags</MDBDropdownItem>
                  <MDBDropdownItem link>Water Bottles</MDBDropdownItem>

                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href='/Contact'>
                Contact
              </MDBNavbarLink>
            </MDBNavbarItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}