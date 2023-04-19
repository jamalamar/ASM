import React, { Component } from 'react';

import {
  MDBTypography,
  MDBInputGroup
} from 'mdb-react-ui-kit';

export default function Contact () {

    return (
      
    <div className=''>
      
      <MDBTypography className='display-3 pb-3 mb-3'>Contact Us</MDBTypography>

      <div className='p-5 m-5'>
        <MDBInputGroup textBefore='@' className='mb-3'>
          <input className='form-control' type='text' placeholder="Name" />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3' textAfter='@example.com'>
          <input className='form-control' type='text' placeholder="Email" />
        </MDBInputGroup>

        <label htmlFor='basic-url2' className='form-label'>
          Your vanity URL
        </label>
        <MDBInputGroup className='mb-3' textBefore='https://example.com/users/'>
          <input className='form-control' id='basic-url2' type='text' />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3' textBefore='$' textAfter='.00'>
          <input className='form-control' type='text' />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3'>
          <input className='form-control' placeholder='Username' type='text' />
          <span className='input-group-text'>@</span>
          <input className='form-control' placeholder='Server' type='text' />
        </MDBInputGroup>

        <MDBInputGroup className='mb-3' textBefore='With textarea'>
          <textarea className='form-control' />
        </MDBInputGroup>
      </div>

    </div>
      
    )
}

