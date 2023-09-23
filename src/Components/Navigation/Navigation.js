
import React from "react";
// import './App.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const Navigation=()=> {
  return (<div className="topnav">
    <Navbar expand="lg" className="nav ">
      <Container>
        <Navbar.Brand href="/">Metro Shoes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " id="header">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Collection">Collection</Nav.Link>
            <Nav.Link href="/Order">Order</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navigation;