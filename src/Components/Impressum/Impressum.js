import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';

const Impressum = () => {
    return (
        <>
            <section className="impression" id="impressum">
                <Container className="c--custom">
                    <Row className="my-5">
                        <Col>
                            <Tab.Container defaultActiveKey="first">
                                <Row>
                                    <Col sm={12}>
                                        <Nav justify variant="tabs" variant="pills">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first" className="semi--30">Impressum</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" className="semi--30">Datenschutz</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col sm={12}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="first">
                                                <p className="semi--20 px-5">
                                                    <br /><br />
                                                    Tahir-Lacke.de
                                                    <br />
                                                    Inhaber:
                                                    <br />
                                                    Ahmad Ismail Tahir
                                                    <br />
                                                    Herford 32049
                                                    <br />
                                                    Werrestr 53
                                                </p>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <br />
                                                <br />
                                                <p className="c-tag-2 px-3 px-sm-5 medi--16">
                                                    <span className="c-tag-1 semi--20">Datenschutzerkl??rung
                                                            <br />
                                                            Allgemeiner Hinweis und Pflichtinformationen
                                                            <br />
                                                            Benennung der verantwortlichen Stelle
                                                    </span>
                                                    <br />
                                                    Die verantwortliche Stelle f??r die Datenverarbeitung auf dieser Website ist:
                                                    <br />
                                                    Tahir-lacke
                                                    <br />
                                                    Inhaber: Ahmad-Ismail Tahir
                                                    <br />
                                                    Herford 32049
                                                    <br />
                                                    <br />
                                                    <br />
                                                    Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen ??ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. ??.).
                                                    <br />
                                                    Widerruf Ihrer Einwilligung zur Datenverarbeitun
                                                    <br />
                                                    Nur mit Ihrer ausdr??cklichen Einwilligung sind einige Vorg??nge der Datenverarbeitung m??glich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m??glich. F??r den Widerruf gen??gt eine formlose Mitteilung per E-Mail. Die Rechtm????igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber??hrt.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Recht auf Beschwerde bei der zust??ndigen Aufsichtsbeh??rde</span>
                                                    <br />
                                                    Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Versto??es ein Beschwerderecht bei der zust??ndigen Aufsichtsbeh??rde zu. Zust??ndige Aufsichtsbeh??rde bez??glich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a> .
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Recht auf Daten??bertragbarkeit</span>
                                                    <br />
                                                    Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf??llung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aush??ndigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte ??bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                                                    Recht auf Auskunft, Berichtigung, Sperrung, L??schung
                                                    Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft ??ber Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empf??nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L??schung dieser Daten. Diesbez??glich und auch zu weiteren Fragen zum Thema personenbezogene Daten k??nnen Sie sich jederzeit ??ber die im Impressum aufgef??hrten Kontaktm??glichkeiten an uns wenden.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">SSL- bzw. TLS-Verschl??sselung</span>
                                                    <br />
                                                    Aus Sicherheitsgr??nden und zum Schutz der ??bertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschl??sselung. Damit sind Daten, die Sie ??ber diese Website ??bermitteln, f??r Dritte nicht mitlesbar. Sie erkennen eine verschl??sselte Verbindung an der ???https://??? Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Kontaktformular</span>
                                                    <br />
                                                    Per Kontaktformular ??bermittelte Daten werden einschlie??lich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu k??nnen oder um f??r Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
                                                    <br />
                                                    Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschlie??lich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m??glich. F??r den Widerruf gen??gt eine formlose Mitteilung per E-Mail. Die Rechtm????igkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg??nge bleibt vom Widerruf unber??hrt.
                                                    <br />
                                                    ??ber das Kontaktformular ??bermittelte Daten verbleiben bei uns, bis Sie uns zur L??schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen ??? insbesondere Aufbewahrungsfristen ??? bleiben unber??hrt.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Cookies</span>
                                                    <br />
                                                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endger??t speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                                                    Einige Cookies sind ???Session-Cookies.??? Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gel??scht. Hingegen bleiben andere Cookies auf Ihrem Endger??t bestehen, bis Sie diese selbst l??schen. Solche Cookies helfen uns, Sie bei R??ckkehr auf unserer Website wiederzuerkennen.
                                                    <br />
                                                    Mit einem modernen Webbrowser k??nnen Sie das Setzen von Cookies ??berwachen, einschr??nken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schlie??en des Programms von selbst gel??scht werden. Die Deaktivierung von Cookies kann eine eingeschr??nkte Funktionalit??t unserer Website zur Folge haben.
                                                    <br />
                                                    Das Setzen von Cookies, die zur Aus??bung elektronischer Kommunikationsvorg??nge oder der Bereitstellung bestimmter, von Ihnen erw??nschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. f??r Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerkl??rung separat behandelt.
                                                    <br />
                                                    Quelle: Datenschutz-Konfigurator von <a href="mein-datenschutzbeauftragter.de" target="_blank" rel="noreferrer">mein-datenschutzbeauftragter.de</a>
                                                    <br />
                                                    <br />

                                                    Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen ??ber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. ??.).
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Widerruf Ihrer Einwilligung zur Datenverarbeitung</span>
                                                    <br />
                                                    Nur mit Ihrer ausdr??cklichen Einwilligung sind einige Vorg??nge der Datenverarbeitung m??glich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m??glich. F??r den Widerruf gen??gt eine formlose Mitteilung per E-Mail. Die Rechtm????igkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber??hrt.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Recht auf Beschwerde bei der zust??ndigen Aufsichtsbeh??rde</span>
                                                    <br />
                                                    Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Versto??es ein Beschwerderecht bei der zust??ndigen Aufsichtsbeh??rde zu. Zust??ndige Aufsichtsbeh??rde bez??glich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" target="_blank" rel="noreferrer">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Recht auf Daten??bertragbarkeit</span>
                                                    <br />
                                                    Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf??llung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aush??ndigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte ??bertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
                                                    Recht auf Auskunft, Berichtigung, Sperrung, L??schung
                                                    Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft ??ber Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empf??nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L??schung dieser Daten. Diesbez??glich und auch zu weiteren Fragen zum Thema personenbezogene Daten k??nnen Sie sich jederzeit ??ber die im Impressum aufgef??hrten Kontaktm??glichkeiten an uns wenden.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">SSL- bzw. TLS-Verschl??sselung</span>
                                                    <br />
                                                    Aus Sicherheitsgr??nden und zum Schutz der ??bertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschl??sselung. Damit sind Daten, die Sie ??ber diese Website ??bermitteln, f??r Dritte nicht mitlesbar. Sie erkennen eine verschl??sselte Verbindung an der ???https://??? Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Kontaktformular</span>
                                                    <br />
                                                    Per Kontaktformular ??bermittelte Daten werden einschlie??lich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu k??nnen oder um f??r Anschlussfragen bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
                                                    <br />
                                                    Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschlie??lich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m??glich. F??r den Widerruf gen??gt eine formlose Mitteilung per E-Mail. Die Rechtm????igkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorg??nge bleibt vom Widerruf unber??hrt.
                                                    ??ber das Kontaktformular ??bermittelte Daten verbleiben bei uns, bis Sie uns zur L??schung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen ??? insbesondere Aufbewahrungsfristen ??? bleiben unber??hrt.
                                                    <br />
                                                    <br />
                                                    <span className="c-tag-1 semi--20">Cookies</span>
                                                    <br />
                                                    Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endger??t speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                                                    Einige Cookies sind ???Session-Cookies.??? Solche Cookies werden nach Ende Ihrer Browser-Sitzung von selbst gel??scht. Hingegen bleiben andere Cookies auf Ihrem Endger??t bestehen, bis Sie diese selbst l??schen. Solche Cookies helfen uns, Sie bei R??ckkehr auf unserer Website wiederzuerkennen.
                                                    <br />
                                                    Mit einem modernen Webbrowser k??nnen Sie das Setzen von Cookies ??berwachen, einschr??nken oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem Schlie??en des Programms von selbst gel??scht werden. Die Deaktivierung von Cookies kann eine eingeschr??nkte Funktionalit??t unserer Website zur Folge haben.
                                                    <br />
                                                    Das Setzen von Cookies, die zur Aus??bung elektronischer Kommunikationsvorg??nge oder der Bereitstellung bestimmter, von Ihnen erw??nschter Funktionen (z.B. Warenkorb) notwendig sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website haben wir ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und reibungslosen Bereitstellung unserer Dienste. Sofern die Setzung anderer Cookies (z.B. f??r Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerkl??rung separat behandelt.
                                                    <br />
                                                    Quelle: Datenschutz-Konfigurator von <a href="mein-datenschutzbeauftragter.de" target="_blank" rel="noreferrer">mein-datenschutzbeauftragter.de</a>
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Impressum;