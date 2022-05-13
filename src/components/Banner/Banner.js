import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.png';
import banner2 from '../../images/banner2.png';
import banner3 from '../../images/banner3.png';

const Banner = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>SmartPhone</h3>
                    <p>All screen design. Longest battery life ever in an smartphone. Fastest performance and studio quality photos. </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Home Audio</h3>
                    <p>Computer speakers, or multimedia speakers, are speakers sold for use with computers, although usually capable of other audio uses.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Smart Tv</h3>
                    <p>This is a digital television that is, essentially, an Internet-connected, storage-aware computer specialized for entertainment.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;