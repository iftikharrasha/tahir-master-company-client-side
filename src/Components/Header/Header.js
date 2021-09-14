import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Navbar,Nav } from 'react-bootstrap';
import logo from '../../Images/logo.png';

const Header = () => {
    return (
        <>
            <header>
                <Navbar collapseOnSelect expand="lg">
                    <Container className="c--custom">
                        <Navbar.Brand as={Link} to="/">
                            <img
                                src={logo}
                                width="100%"
                                height="100%"
                                className="d-inline-block align-top"
                                alt="logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto medi--20">
                                <Nav.Link className="me-4 c-tag-1" as={Link} to="/startseite">Startseite</Nav.Link>
                                <Nav.Link className="me-4 c-tag-1" as={Link} to="/mastanstrich">Mastanstrich</Nav.Link>
                                <Nav.Link className="me-4 c-tag-1" as={Link} to="/kontakt">Kontakt</Nav.Link>
                                <Nav.Link className="me-4 c-tag-1" as={Link} to="/hubsteiger">Hubsteiger Mieten</Nav.Link>
                                <Nav.Link className="c-tag-1" as={Link} to="/impressum">Impressum</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;