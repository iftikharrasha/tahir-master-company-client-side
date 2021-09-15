import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <Container className="c--custom">
                    <Row>
                        <Col className="text-center">
                            <p>Design and Develop by <u>Musayyab Naveed</u></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
};

export default Footer;