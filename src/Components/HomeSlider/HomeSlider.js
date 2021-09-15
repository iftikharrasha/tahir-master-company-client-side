import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import truck from '../../Images/truck.png';

const HomeSlider = () => {
    const slides = [
        {
            id: 1,
            imgSrc: truck,
        },
        {
            id: 2,
            imgSrc: truck,
        },
        {
            id: 3,
            imgSrc: truck,
        },
    ]

    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint: 480,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            },
        ],
    };

    return (
        <>
            <section>
                <Container className="c--custom">
                    <Row className="my-5">
                        <Col>
                            <div className="slides">
                                <Slider {...settings}>
                                    {
                                        slides.map((item) => (
                                            <img key={item.id} className="img-fluid" src={item.imgSrc} alt="truck" />
                                        ))
                                    }
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomeSlider;