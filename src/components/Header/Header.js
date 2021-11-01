import React from 'react';
import { Container, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    const { displayName, email } = user;
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light">
                <Container fluid>
                    <Navbar.Brand>
                        <Nav.Link as={NavLink} to="/">
                            <h1 className="logo-text">Farhad Travels</h1>
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Nav.Link className="menu-font-size" as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link className="menu-font-size" as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link className="menu-font-size" as={NavLink} to="/services">Packages</Nav.Link>
                            {!displayName ? (<Nav.Link as={NavLink} to="/login">
                                <Button variant="success" className="m-1 menu-font-size">Log In</Button>
                            </Nav.Link>)
                                :
                                <>
                                    <Nav.Link className="menu-font-size" as={NavLink} to="/myorders">MY ORDERS</Nav.Link>
                                    <Nav.Link className="menu-font-size" as={NavLink} to="/manageallorders">MANAGE ALL ORDERS</Nav.Link>
                                    <Nav.Link className="menu-font-size" as={NavLink} to="/addpackage">ADD PACKAGE</Nav.Link>
                                    <NavDropdown className="menu-font-size" title=
                                        {displayName || email} id="basic-nav-dropdown">
                                        <NavDropdown.Item><input onClick={logout} type="submit" value="LogOut" className="btn" /></NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;