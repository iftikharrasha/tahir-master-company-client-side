import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import corrosive from '../../Images/corrosive.svg';
import roller from '../../Images/roller.svg';
import brush from '../../Images/brush.svg';
import paint from '../../Images/paint.svg';
import gutter from '../../Images/gutter.svg';
import more from '../../Images/more.svg';

const Services = () => {
    const services = [
        {
            id: 1,
            text: 'Korrosionsschutz Stahl',
            imgSrc: corrosive,
        },
        {
            id: 2,
            text: 'Streichen von Zäunen / Blechen / Geländern',
            imgSrc: roller,
        },
        {
            id: 3,
            text: 'Industrielackierung',
            imgSrc: paint,
        },
        {
            id: 4,
            text: 'Malerarbeiten',
            imgSrc: brush,
        },
        {
            id: 5,
            text: 'Dachrinnenreinigung',
            imgSrc: gutter,
        },
        {
            id: 6,
            text: 'U. V M',
            imgSrc: more,
        },
    ]

    return (
        <>
            <section className="services py-5" id="mastanstrich">
                <Container className="c--custom">
                    <Row className="mt-5">
                        <Col className="text-center">
                            <h2 className="semi--45">Unsere Leistungen</h2>
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
                                                <p className="pt-5 medi--25 c-tag-2">{item.text}</p>
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