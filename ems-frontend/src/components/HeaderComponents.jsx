import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
//import { useNavigate } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import "./Custom.css";

const HeaderComponents = () => {
  return (
<Navbar className = "custom-navbar" variant ="dark" expand = "Ig">

  <Container>
    <LinkContainer to="/">
      <Navbar.Brand className="brand-name">

        Jeevandan Hospitals Pvt. Ltd.

      </Navbar.Brand>
    
    </LinkContainer>

    <Navbar.Toggle aria-controls = "basic-navbar-nav" />
    <Navbar.Collapse id = "basic-navbar-nav">
      <Nav className = "ms-auto">


         <LinkContainer to="/patients">
          <Nav.Link> Patient List</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/inventory">
            <Nav.Link> Inventory</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/appointment">
            <Nav.Link>Appointment</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/departments">
            <Nav.Link>Departments</Nav.Link>
          </LinkContainer>

          <LinkContainer to ="/about">
            <Nav.Link>About</Nav.Link> 
          </LinkContainer>

        </Nav>
      </Navbar.Collapse>
  </Container>
  </Navbar>
   );
 }



export default HeaderComponents