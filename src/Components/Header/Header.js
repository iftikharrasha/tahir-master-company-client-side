import React, { useEffect, useState } from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';
import logo from '../../Images/logo.png';

const Header = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
    window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
    });
    }, []);

    return (
        <>
            <header className={scroll ? "header header--sticky" : "header"}>
                <Navbar collapseOnSelect expand="lg">
                    <Container className="c--custom">
                        <Navbar.Brand href="#startseite">
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
                            <Nav className="ms-auto medi--20 menu">
                                <Nav.Link className="me-4 c-tag-1" href="#startseite">Startseite</Nav.Link>
                                <Nav.Link className="me-4 c-tag-1" href="#mastanstrich">Mastanstrich</Nav.Link>
                                <Nav.Link className="me-4 c-tag-1" href="#kontakt">Kontakt</Nav.Link>
                                <Nav.Link className="me-4 c-tag-1" href="#hubsteiger">Hubsteiger Mieten</Nav.Link>
                                <Nav.Link className="c-tag-1" href="#impressum">Impressum</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default Header;