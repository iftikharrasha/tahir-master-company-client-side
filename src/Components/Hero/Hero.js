import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import banner from '../../Images/banner.png';

const Hero = () => {
    return (
        <>
            <section className="hero my-5">
                <Container className="c--custom">
                    <Row className="align-items-center justify-content-between py-5">
                        <Col lg={7}>
                            <h1 className="semi--45">Wir sind Korrosionsschutzexperte gemäß Teil 4 Abschnitt 3 Nr.5.2 der Zusätzlichen Technischen Vertragsbedingungen und Richtlinien für Ingenieurbauten ZTV-ING</h1>
                        </Col>
                        <Col lg={5} className="text-center">
                            <img src={banner} alt="banner" className="img-fluid"/>
                        </Col>
                    </Row>
                    <Row className="py-5">
                        <Col>
                            <p className="medi--20 text-center">Tahir Rost- & Korrosionsschutz übernimmt Verantwortung im öffentlichen Raum. Mit unserer Expertise im Korrosionsschutz entgegnen wir den ganzjährig auftretenden Witterungseinflüssen auf Stahlrohrmasten (z.B. Straßenbeleuchtungsmasten) indem wir die Lebensdauer sowie Standfestigkeit dieser erhöhen und gleichzeitig ein einheitliches, schönes Stadtbild fördern. Eine Art Lebensversicherer für technisch nachhaltige und ästhetische Masten. <br />
                            Neben dem Endergebnis legt unsere Projektleitung gemeinsam mit unserem eingeschulten Fachpersonal besonderen Wert auf ein professionelles Qualitäts- und Projektmanagement sowohl im Umgang mit unseren Kunden als auch bei der Abwicklung unserer Baustellen im öffentlichen Raum. Ein hoher Qualitätsstandard in der Baustellensicherung behält selbige Priorität wie die Behandlung der Masten. Diese sichern wir beispielsweise mit Hinweisschilder für die Kommunikation mit den Mitbürgern und einer ordnungsgemäßen Abdeckung der Umgebung.
                            Digitale Anstrichlisten erleichtern den Import in bestehende Systeme und sichert eine nachhaltige Dokumentation für unsere gemeinsamen Projekte.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;