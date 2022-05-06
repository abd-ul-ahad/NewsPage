import React from 'react';
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
    return (
        <footer className="w-100 d-flex flex-column justify-content-center align-items-center">
            <Row className="w-100 d-flex flex-column justify-content-center align-items-center" >
                <h3 className="text-center my-1">Developers</h3>
                <ul className="footer-links d-flex flex-row justify-content-center align-items-center list-unstyled">
                    <li className="px-2"><a className="text-decoration-none  text-dark" href="/"><AiFillTwitterCircle size={20} /></a></li>
                    <li className="px-2"><a className="text-decoration-none  text-dark" href="/"><AiFillLinkedin size={20} /></a></li>
                </ul>
            </Row>
            <Row className="footer-nav  d-flex flex-row justify-content-between justify-content-sm-center align-items-center w-100 my-1 px-5">
                <Col md={6} className="d-flex flex-row justify-content-md-start justify-content-sm-center align-items-center">
                    <p className="text-center">Copyright &copy; Developers</p>
                </Col>
                <Col md={6} >
                    <ul className="footer-links d-flex flex-row justify-content-md-end justify-content-sm-center align-items-center list-unstyled">
                        <li className="px-3 my-1"><Link className="text-decoration-none text-dark-mode" to='/'>Home</Link></li>
                        <li className="px-3 my-1"><Link className="text-decoration-none text-dark-mode" to='/about'>About</Link></li>
                    </ul>
                </Col>
            </Row>
        </footer>
    );
};
