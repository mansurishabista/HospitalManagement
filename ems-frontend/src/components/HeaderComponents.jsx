import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HeaderComponents = () => {
  return (


    <div>

<Navbar bg="Dark" variant="Dark">
        <Container>
            <Navbar.Brand to ="/" className = " display-4 nav-Link"><strong>Jeevandan Hospitals Pvt. Ltd.</strong></Navbar.Brand>

        </Container>
    </Navbar>

    </div>
  )
}

export default HeaderComponents