import { Navbar, Container, Nav } from "react-bootstrap";
import React, { useState } from "react";
import logo from './../../logo.svg';
import { Link } from "react-router-dom";

import styles from './Header.module.css'

export default function Header() {
    const [ activeKey, setActiveKey ] = useState("/");
    return (<>
        <Navbar className="header">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    Brand Name
                </Navbar.Brand>
                <Nav
                    activeKey={activeKey}
                    onSelect={key => setActiveKey(key)}
                >
                    <Nav.Item>
                        <Nav.Link as='span' eventKey="/">
                            <Link className={activeKey === "/" ? styles.activeLink : ""}  to="/">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as='span' eventKey="/giving">
                            <Link className={activeKey === "/giving" ? styles.activeLink : ""} to="/giving">Give</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as='span' eventKey="/rewards">
                            <Link className={activeKey === "/rewards" ? styles.activeLink : ""} to="/rewards">Rewards</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    </>)
}