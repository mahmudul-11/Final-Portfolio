import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
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
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#about">About</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <Nav.Link href="#about2">About</Nav.Link>
                                <Nav.Link href="#about3">About</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

        </>
    );
};

export default Navigation;

