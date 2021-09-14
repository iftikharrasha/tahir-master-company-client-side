import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './LazyLoadSpinner.css';

const LazyLoadSpinner = () => {
    return (
        <>
                <Container className="c_custom">
                    <Row className="pt-4">
                        <Col sm={12} className="lazy-load">
                            <div className="my-class-2 in-progress just-a-box"></div>
                        </Col>
                    </Row>
                </Container>    
        </>
    );
};

export default LazyLoadSpinner;