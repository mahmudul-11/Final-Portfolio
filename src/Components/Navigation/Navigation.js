import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavHashLink } from 'react-router-hash-link';
import './Navigation.css'
import logo from '../../Images/logo.png'


const Navigation = () => {

    return (
        <>
            <Navbar expand="lg">
                <Container className='d-flex justify-content-between'>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="" width='80' />
                    </Navbar.Brand>

                    <div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto fw-bolder">
                                <Nav.Link as={NavHashLink} to="/home" activeClassName="selected"
                                    activeStyle={{ color: 'blue' }}>Home</Nav.Link>
                                <Nav.Link as={NavHashLink} to="/about" activeClassName="selected"
                                    activeStyle={{ color: 'blue' }}>About Me</Nav.Link>
                                {/* <Nav.Link as={NavHashLink} to="/home#contact" activeClassName="selected"
                                    activeStyle={{ color: 'blue' }}>Contact</Nav.Link> */}
                                <Nav.Link as={NavHashLink} to="/blog" activeClassName="selected"
                                    activeStyle={{ color: 'blue' }}>Blogs</Nav.Link>
                                {/* <Nav.Link href="#about3">About</Nav.Link> */}

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;

