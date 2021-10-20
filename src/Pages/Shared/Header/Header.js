import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="lg" className="header-bg" >
            <Container>
            <Navbar.Brand href="/home">
                <img
                alt="icon"
                src="/icon.png"
                width="90"
                height="50"
                className="d-inline-block align-top"
                />
                <small className="fs-1 text-primary fw-bold"> Better <span className="text-danger fw-bold">Life</span></small>
            
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse variant="dark" className="justify-content-end">
            <Nav.Link as={Link} to="/home"><span className="text-dark fw-bold fs-5">Home</span></Nav.Link>
                <Nav.Link as={Link} to="/medicines"><span className="text-dark fw-bold fs-5">Products</span></Nav.Link>

                <Nav.Link as={Link} to="/about"><span className="text-dark fw-bold fs-5">About Us</span></Nav.Link>

                <Nav.Link as={Link} to="/contact"><span className="text-dark fw-bold fs-5">Contact</span></Nav.Link>
                
                {/* logged in person's identity */}
                <Navbar.Text>
                    <h4 className="me-3"> { user?.displayName}</h4>
                </Navbar.Text>
            {  user.photoURL &&  <div className="p-3">
                <img className=" rounded-circle" width="50"
                height="50" src={user?.photoURL} alt="" />
                </div>}

                <div>
                    {user?.email ?
                    <Button onClick={logOut} variant="success">Log Out</Button>:
                    <Nav.Link as={Link} to="/register"><span className="text-dark fw-bold fs-5">Sign In</span></Nav.Link>}
                </div>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;