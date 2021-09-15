import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import truck from '../../Images/truck.jpg';

const Rent = () => {
    return (
        <>
            <section className="rent py-5" id="hubsteiger">
                <Container className="c--custom">
                    <Row className="my-5">
                        <Col className="text-center">
                            <h2 className="semi--45">HUBSTEIGER MIETEN</h2>
                            <span className="bottom--line"></span>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col>
                            <Row>
                                <Col sm={5}>
                                    <div className="form--head text-center">
                                        <h2 className="semi--30">ÖFFNUNGSZEITEN</h2>
                                        <span className="bottom--line"></span>
                                        <p className="medi--16 my-4">
                                            Montag bis Freitag: 10–18 Uhr <br />
                                            Samstag: 11–15 Uhr</p>
                                    </div>
                                    <form className="form-main">
                                        <div className="form--item my-4"> 
                                            <label htmlFor="firmenname" className="medi--25 c-tag-2 mb-3">Firmenname:</label> 
                                            <input type="text" name="firmenname" id="firmenname" className="d-block w-100 medi--25"/>
                                        </div>
                                        <div className="form--item my-4"> 
                                            <label htmlFor="vorname" className="medi--25 c-tag-2 mb-3">Vorname*:</label> 
                                            <input type="text" name="vorname" id="vorname" className="d-block w-100 medi--25" required/>
                                        </div>
                                        <div className="form--item my-4"> 
                                            <label htmlFor="nachname" className="medi--25 c-tag-2 mb-3">Nachname*:</label> 
                                            <input type="text" name="nachname" id="nachname" className="d-block w-100 medi--25" required/>
                                        </div>
                                        <div className="form--item my-4"> 
                                            <label htmlFor="email" className="medi--25 c-tag-2 mb-3">E-Mail*:</label> 
                                            <input type="email" name="email" id="email" className="d-block w-100 medi--25" required/>
                                        </div>
                                        <div className="form--item my-4"> 
                                            <label htmlFor="telefon" className="medi--25 c-tag-2 mb-3">Telefon*:</label> 
                                            <input type="number" name="telefon" id="Telefon" className="d-block w-100 medi--25" required/>
                                        </div>
                                        <div className="form--item my-4"> 
                                            <label htmlFor="info" className="medi--25 c-tag-2 mb-3">Info:</label> 
                                            <textarea rows="5" name="info" id="info" className="d-block w-100 medi--25"></textarea>
                                        </div>
                                        <div className="form--item my-4"> 
                                            <label htmlFor="telefon" className="medi--25 c-tag-2 mb-3">Telefon*:</label> 
                                            <input type="number" name="telefon" id="Telefon" className="d-block w-100 medi--25" required/>
                                        </div>
                                        <div className="form--item my-4"> 
                                            <p className="captcha text-center medi--35 c-tag-2">k769</p>
                                        </div>
                                        <div className="form--item my-4">
                                            <button className="btn btn-primary medi--25 mt-3" type="submit">Senden</button>
                                        </div>
                                    </form>
                                </Col>
                                <Col sm={7}>
                                    <div className="rent--info border-start border-top">
                                        <div className="form--head text-center mt-5">
                                            <h2 className="semi--30">Buchung Info</h2>
                                            <span className="bottom--line"></span>
                                        </div>
                                        <div className="info--details mt-4">
                                            <Row>
                                                <Col md={2}>
                                                    <h4 className="medi--25">Miete:</h4>
                                                </Col>
                                                <Col md={10}>
                                                    <p className="medi--16 c-tag-2">Mieten Sie einen Hubsteiger für z.B.
                                                    <br /> <br />
                                                        -Baumschnitt
                                                        <br />
                                                        -Baumpflege
                                                        <br />
                                                        -Balkonbau
                                                        <br />
                                                        -Dachrinnenreinigung
                                                        <br />
                                                        -Sturmschaden-beseitigung
                                                        <br />
                                                        -Gebäudereinigung
                                                        <br />
                                                        -Malerarbeiten
                                                        <br />
                                                        -Glasreinigung
                                                        <br />
                                                        -Schädlingsbekämpfung
                                                        <br />
                                                        -Dekorationen
                                                        <br />
                                                        -Messebau
                                                        <br />
                                                        -Reinigungsarbeiten
                                                        <br />
                                                        -Installation von Werbeträgern
                                                        <br />
                                                        -Dachabdichtungen
                                                        <br />
                                                        -Blitzschutzanlagen
                                                        <br />
                                                        -Reinigung von Solaranlagen
                                                        <br /> <br />
                                                        Weitere Informationen erhalten Sie bei Individueller Anfrage per E-Mail.</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4">
                                                <Col>
                                                    <img src={truck} alt="" className="img-fluid"/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={10} className="offset-md-2">
                                                    <p className="medi--16 c-tag-2">
                                                    <br />
                                                    Hersteller
                                                    <br />                             
                                                    MultitelTyp  160ALU
                                                    <br />
                                                    Baujahr  2011
                                                    <br />
                                                    Einsatzdaten:
                                                    <br />
                                                    Max. Arbeitshöhe 16,35 m
                                                    <br />
                                                    Max. Plattformhöhe 14,35 m
                                                    <br />
                                                    Max. Reichweite 9,90 m
                                                    <br />
                                                    Gesamtabmessungen LxBxH6, 78 x 2,12 x 2,80 m
                                                    <br />
                                                    Plattformabmessung BxT 1,20 x 0,70 m
                                                    <br />
                                                    Max. Korblast 200 kg
                                                    <br />
                                                    Schwenkbereich 350°
                                                    <br />
                                                    Stützdruck max. 24/12 kN 
                                                    <br />
                                                    Bodenfreiheit0, 20 m
                                                    <br />
                                                    Abstützbreite beidseitig 2,17 m
                                                    <br />
                                                    Abstützlänge 3,28 m 
                                                    <br />
                                                    Eigengewicht 3.350 kgZul.
                                                    <br />
                                                    Gesamtgewicht 3.500 k</p>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Rent;