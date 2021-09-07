import {Navbar, Container} from "react-bootstrap";
import React from "react";
import logo from './../logo.svg';

export default function Header() {
    return (<>
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    Brand Name
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>)
}