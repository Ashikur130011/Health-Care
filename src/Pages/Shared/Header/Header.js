import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt="icon"
                src="/icon.png"
                width="90"
                height="50"
                className="d-inline-block align-top"
                />
                <small className="fs-1 text-dark"> Better <span className="text-danger fw-bold">Life</span></small>
            
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse variant="dark" className="justify-content-end">
            <Nav.Link as={Link} to="/home"><span className="text-dark fw-bold">Home</span></Nav.Link>
                <Nav.Link as={Link} to="/medicines"><span className="text-dark fw-bold">Products</span></Nav.Link>
                <Nav.Link href="#pricing"><span className="text-dark fw-bold">Contact</span></Nav.Link>
                <Navbar.Text>
                    <span className="text-dark">Signed in as: <a href="#login"><span className="text-dark">Ashik</span></a></span>
                </Navbar.Text>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;