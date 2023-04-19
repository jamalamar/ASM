import React, { Component } from 'react';

import { 
  MDBAccordion, 
  MDBAccordionItem, 
  MDBIcon,
  MDBTypography 
} from 'mdb-react-ui-kit';

export default function FAQs () {

    return (

      <div>

        {/******************* Banner Image ********************/}
        <div className='bg-image'>
          <img src='Assets/FAQs_Banner.jpg' className='img-fluid shadow-4' alt='FAQs Banner' />
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.0)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <img src='Assets/Nav_Logo.png' style={{height: 250,}} alt='ASM Logo'/>
            </div>
          </div>
        </div>

        

        {/******************* Header ********************/}
        <div className='p-5 text-center bg-light'>
          <h1 className=''>Frequently Asked Questions</h1>
        </div>



        {/******************* Questions ********************/}
        <MDBAccordion initialActive={1} className="fs-5 fw-lighter">
          <MDBAccordionItem collapseId={1} headerTitle={<><MDBIcon fas icon="question-circle" /> 
            <h4> &nbsp; How do I know what size clothing to order for my child? </h4> </>}>
            We strongly suggest that you visit your child's school and ask to see sizing samples 
            prior to placing orders for customized apparel. You may also refer to the sizing charts 
            on our website. When in doubt, it is recommended to order one size larger.
          </MDBAccordionItem>

          <MDBAccordionItem collapseId={2} headerTitle={<><MDBIcon fas icon="question-circle" /> 
            <h4> &nbsp; Do you accept returns or exchanges? </h4> </>}>
            Unfortunately there are no returns or exchanges for products customized 
            with a logo as these products cannot be easily sold to another customer. 
          </MDBAccordionItem>

          <MDBAccordionItem collapseId={3} headerTitle={<><MDBIcon fas icon="question-circle" /> 
            <h4> &nbsp;  What company do you use for shipping? </h4> </>}>
            All orders are shipped via USPS or UPS depending on the size and weight of your package. 
            It is at the delivery driver’s discretion to request a signature. To ensure delivery, we 
            recommend that you provide a shipping address where an adult is available to sign. 
          </MDBAccordionItem>

          <MDBAccordionItem collapseId={4} headerTitle={<><MDBIcon fas icon="question-circle" /> 
            <h4> &nbsp;  How long will it take for my package to arrive? </h4> </>}>
            Production time for all customized products is at least 10 business days. 
            Rush shipping is available for an additional fee. 
          </MDBAccordionItem>

          <MDBAccordionItem collapseId={5} headerTitle={<><MDBIcon fas icon="question-circle" /> 
            <h4> &nbsp;  Can I expedite my order? </h4> </>}>
            Yes, please contact us if you wish to expedite your order. 
          </MDBAccordionItem>

          <MDBAccordionItem collapseId={6} headerTitle={<><MDBIcon fas icon="question-circle" /> 
            <h4> &nbsp;  Where are your products manufactured and customized? </h4> </>}>
            At ASMSupplies.com, we order blank products from USA based distributors and manufacturers 
            and each product label lists its country of origin. All product customizations are made by 
            ASM Supplies in our facility. 
          </MDBAccordionItem>
        </MDBAccordion>

      </div>
      
    )
}

