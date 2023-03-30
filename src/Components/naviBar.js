import React from "react";
import { Nav, Navbar, Button } from "react-bootstrap";
export default function NaviBar() {

    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>WebDev Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>Users</Nav.Link>
                    <Nav.Link>About</Nav.Link>
                </Nav>
                <Nav>
                    <Button variant="primary" className="me-2">Log In</Button>
                    <Button variant="primary">Sing out</Button>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)}