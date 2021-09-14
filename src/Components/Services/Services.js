import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import road from '../../Images/road.svg';
import brush from '../../Images/paint-brush.svg';
import balloon from '../../Images/hot-air-balloon.svg';
import paint from '../../Images/paint.svg';
import arrow from '../../Images/down-arrow.svg';
import pantheon from '../../Images/pantheon.svg';

const Services = () => {
    return (
        <>
            <section className="services py-5">
                <Container>
                    <Row className="mt-5">
                        <Col className="text-center">
                            <h2>Unsere Leistungen</h2>
                            <span className="bottom--line"></span>
                        </Col>
                    </Row>
                    <Row className="my-3">
                        <Col className="d-flex justify-content-center">
                            <div className="service--card">
                                <div className="card--item text-center">
                                    <img className="img-fluid" src={road} alt="road" />
                                    <p className="pt-5 medi--25">Korrosionsschutz Stahl</p>
                                </div>
                                <div className="card--item text-center">
                                    <img className="img-fluid" src={brush} alt="brush" />
                                    <p className="pt-5 medi--25">Streichen von Zäunen / Blechen / Geländern</p>
                                </div>
                                <div className="card--item text-center">
                                    <img className="img-fluid" src={balloon} alt="balloon" />
                                    <p className="pt-5 medi--25">Industrielackierung</p>
                                </div>
                                <div className="card--item text-center">
                                    <img className="img-fluid" src={paint} alt="paint" />
                                    <p className="pt-5 medi--25">Malerarbeiten</p>
                                </div>
                                <div className="card--item text-center">
                                    <img className="img-fluid" src={arrow} alt="arrow" />
                                    <p className="pt-5 medi--25">Dachrinnenreinigung</p>
                                </div>
                                <div className="card--item text-center">
                                    <img className="img-fluid" src={pantheon} alt="pantheon" />
                                    <p className="pt-5 medi--25">U. V M</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col className="text-center">
                            <p className="medi--35 pt-5">Nach Erhalt Ihrer konkreten Anforderungen und Wünsche erstellen wir Ihnen ein individuelles und massgeschneidertes Angebot innerhalb der nächsten 3 Werktage.
                                <br /><br />
                                Wir freuen uns auf Ihre Kontaktanfragen!</p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Services;