import Navigation from '../Components/Navigation/Navigation';
import React from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

const Order = () => {
  return (
    <div className="Order">
      <Navigation/>
   <div className='Row'>
    <div className='Left'>
      
        <h5 className='para'>@ Features</h5>
        <p className='para'> @ Custemers</p>
        <p className='para'> @ Supportings</p>
        <p className='para'>@ Services</p>
        <p className='para'>@ Sales</p>
        <p className='para'>@ Offres</p>
      
    </div>
    <div className='right'>
    <Form>
      <h1>Login Here</h1>
      <FormGroup >
        <FormLabel>Name</FormLabel>
        <FormControl type="text" placeholder="Enter Username" />
      </FormGroup>
      <FormGroup >
        <FormLabel>Email address</FormLabel>
        <FormControl type="email" placeholder="Enter Valid email" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Password</FormLabel>
        <FormControl type="password" placeholder="Enter your password" />
      </FormGroup>
      <Button className='btn' type="submit">
        Login
      </Button>
      <h6>Don't Have Account <a href="#">CREATE NEW</a></h6>
    </Form></div>

    </div>
    </div>
  );
};

export default Order;
