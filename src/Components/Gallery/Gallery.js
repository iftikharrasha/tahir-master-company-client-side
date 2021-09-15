import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../Images/gallery-img-1.png';
import img2 from '../../Images/gallery-img-2.png';
import img3 from '../../Images/gallery-img-3.png';
import img4 from '../../Images/gallery-img-4.png';
import img5 from '../../Images/gallery-img-5.png';

const Gallery = () => {
    const gallery = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
    ]

    const [popUp, setPopUp] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        console.log(imgSrc);
        setTempImgSrc(imgSrc);
        setPopUp(true);
    }
    return (
        <>
            <section className="gallery py-5">
                <Container className="c--custom">
                    <div className={popUp ? "popup open" : "popup"}>
                        <img src={tempImgSrc} alt="popup"/>
                        <i className="fa fa-times cross" aria-hidden="true" onClick={() => setPopUp(false)}></i>
                    </div>
                </Container>
                <Container className="c--custom">
                    <Row>
                        <Col className="text-center">
                            <h2 className="semi--45">Gallery</h2>
                            <span className="bottom--line"></span>
                        </Col>
                    </Row>
                    <Row className="my-5">
                        <Col>
                            <div className="gallery--wrapper">
                                {
                                    gallery.map((item) => (
                                        <div className="pics" key={item.id} onClick={() => getImg(item.imgSrc)}>
                                            <img src={item.imgSrc} alt="gallery" className="img-fluid"/>
                                        </div>
                                    ))
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Gallery;