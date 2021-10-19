import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar sticky="top" collapseOnSelect expand="lg" className="bg-white" >
            <Container>
            <Navbar.Brand href="/home">
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
                <Nav.Link as={Link} to="/contact"><span className="text-dark fw-bold">Contact</span></Nav.Link>
                
                {/* logged in person's identity */}
                <Navbar.Text>
                    <a href="#login"> { user?.displayName}</a>
                </Navbar.Text>
                <div className="me-3">
                <img className=" rounded-circle" src={user?.photoURL} alt="" />
                </div>

                <div>
                {user?.email ?
        <Button onClick={logOut} variant="success">Log Out</Button>:
        <Nav.Link as={Link} to="/login"><span className="text-dark fw-bold">Sign Up</span></Nav.Link>}
                </div>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Header;