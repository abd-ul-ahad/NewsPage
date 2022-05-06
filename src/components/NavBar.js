import React from 'react';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { searchAction } from "../actions/Index";
import { useDispatch } from 'react-redux';

export default function NavBar() {
    const dispatch = useDispatch()

    return (
        <>
            <Navbar className="dark-navbar" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">News-Page</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                className="form-control"
                                onChange={e => { dispatch(searchAction(e.target.value)) }}
                                type="text"
                                placeholder="Search News" />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
