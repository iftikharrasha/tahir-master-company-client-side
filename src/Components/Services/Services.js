import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import road from '../../Images/road.svg';
import brush from '../../Images/paint-brush.svg';
import balloon from '../../Images/hot-air-balloon.svg';
import paint from '../../Images/paint.svg';
import arrow from '../../Images/down-arrow.svg';
import pantheon from '../../Images/pantheon.svg';

const Services = () => {
    const services = [
        {
            id: 1,
            text: 'Korrosionsschutz Stahl',
            imgSrc: road,
        },
        {
            id: 2,
            text: 'Streichen von Zäunen / Blechen / Geländern',
            imgSrc: brush,
        },
        {
            id: 3,
            text: 'Industrielackierung',
            imgSrc: balloon,
        },
        {
            id: 4,
            text: 'Malerarbeiten',
            imgSrc: paint,
        },
        {
            id: 5,
            text: 'Dachrinnenreinigung',
            imgSrc: arrow,
        },
        {
            id: 6,
            text: 'U. V M',
            imgSrc: pantheon,
        },
    ]

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
                                    { 
                                        services.map((item) => (
                                            <div className="card--item text-center" key={item.id}>
                                                <img className="img-fluid" src={item.imgSrc} alt="service" />
                                                <p className="pt-5 medi--25">{item.text}</p>
                                            </div>
                                        ))
                                    }
                               
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