import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../../Images/contact.png';
import telephone from '../../Images/telephone.svg';
import gmail from '../../Images/gmail.svg';

const Contact = () => {
    return (
        <>
            <section className="contact py-5" id="kontakt">
                <Container className="c--custom">
                    <Row className="my-5">
                        <Col className="text-center">
                            <h2>KONTAKT</h2>
                            <span className="bottom--line"></span>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col>
                            <Row>
                                <Col md={5} className="d-flex justify-content-center align-items-center flex-column">
                                    <address className="address d-flex justify-content-center align-items-center flex-column pb-5">
                                        <div className="circle d-flex justify-content-center align-items-center">
                                            <img src={telephone} alt="telephone" className="img-fluid"/>
                                        </div>
                                        <p className="semi--20 my-3">Telephone:</p>
                                        <h6 className="lato--25 c-tag-2">+49 176 879 177 45</h6>
                                    </address>
                                    <address className="address d-flex justify-content-center align-items-center flex-column">
                                        <div className="circle d-flex justify-content-center align-items-center">
                                            <img src={gmail} alt="gmail" className="img-fluid"/>
                                        </div>
                                            <p className="semi--20 my-3">Telephone:</p>
                                            <h6 className="lato--25 c-tag-2">+49 176 879 177 45</h6>
                                    </address>
                                </Col>
                                <Col md={7}>
                                    <img src={contactImg} alt="tahir" className="img-fluid"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Contact;