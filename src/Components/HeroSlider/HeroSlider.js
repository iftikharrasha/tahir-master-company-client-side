import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/components/pagination/pagination.min.css";
import  Pagination from 'swiper/core';
import "swiper/swiper.min.css";
import truck from '../../Images/truck.png';

const HeroSlider = () => {
    return (
        <>
            <section>
                <Container>
                    <Row className="my-5">
                        <Col>
                            <Swiper pagination={true} className="mySwiper">
                                <SwiperSlide><img className="img-fluid" src={truck} alt="truck" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src={truck} alt="truck" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src={truck} alt="truck" /></SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HeroSlider;