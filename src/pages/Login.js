import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer className='page' fluid>
          <MDBCard className='my-5 mx-auto'>
            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

              <h2 className="fw-bold mb-2 text-center">Sign in</h2>
              <label className='lable'>Email</label>
              
            <MDBInput wrapperClass='mb-4 w-100' className='mail'  type='email' size="lg"/>
             <label className='lable'>Password</label>
              <MDBInput wrapperClass='mb-4 w-100'  className='mail'  type='password' size="lg"/> <br/>

              <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4 mt-4' label='Remember password' />
<br/>
              <MDBBtn size='lg' className='button'>
                Login
              </MDBBtn><br/> <br/>

              <hr className="my-4" /><br/>

              <MDBBtn className=" signup mb-2 w-100" size="lg" style={{backgroundColor: 'red'}}>
                <MDBIcon fab icon=" google" className=" mx-2"/>
                Sign in with google
              </MDBBtn>
                    <br/> <br/> <br/>
        
              <MDBBtn className=" signup mb-4 w-100" size="lg" style={{backgroundColor: 'blue'}}>
                <MDBIcon fab icon="facebook-f" className=" mx-2"/>
                Sign in with facebook
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        
      

    </MDBContainer>
  );
}

export default Login;