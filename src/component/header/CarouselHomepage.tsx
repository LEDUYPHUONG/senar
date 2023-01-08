
import React, { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container, Row } from "react-bootstrap";

export default function CarouselHomepage() {
    const [index, setIndex] = useState(0);
    
    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };
    
    const onPrevClick = () => {
        if (index > 0) {
        setIndex(index - 1);
        } else if (index === 0) setIndex(2);
    };
    const onNextClick = () => {
        if (index === 2) {
        setIndex(0);
        } else if (index === 0 || index > 0) setIndex(index + 1);
    };
    return (
        <>
        <div className="button-container">
            <Container>
            <Row>
                <Button variant="primary" onClick={onPrevClick}>
                    <img src="./image/homePage/prev.png" alt="prev" />
                </Button>
                <Button variant="primary" onClick={onNextClick}>
                    <img src="./image/homePage/next.png" alt="next" />
                </Button>
            </Row>
            </Container>
      </div>
      <div className="button-contact-carousel">
            <Container>
                <div className="box-contact"> 
                <img className="button-call" src="./image/homePage/icon-telephone.png" alt="icon-telephone" />
                <p className="button-text">info@senar.net</p>
                <img className="button-email" src="./image/homePage/icon-email.png" alt="icon-email" />
                </div>
            </Container>
        </div>
      <Carousel 
        activeIndex={index}
        onSelect={handleSelect}
        indicators={false}
        controls={false}
        interval = {100000}
        style={{backgroundImage: `url('./image/homePage/background-1.jpg')`}}
      >
        <Carousel.Item>
            <div className="container row">
                <div className="item-left col-6">
                    <div className="title">
                        <h1 className='title-1'>sennar</h1>
                        <p className='title-2'>is available</p>
                    </div>
                    <div className="description">
                        <div className="description-text">
                            <p className='description-1'>in all imaginable designs</p>
                            <p className='description-2'>and creates playground uniqueness areas</p>
                        </div>
                        <div className="description-button">
                            <button className='btn'>
                                Let’s explore
                                <div className="icon">
                                    <img src="./image/homePage/arrow-right.png" alt="arrow-right" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item-right col-6">
                    <img src="./image/homePage/image-01.png" alt="" />
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="container row">
                <div className="item-left col-6">
                    <div className="title">
                        <h1 className='title-1'>sennar</h1>
                        <p className='title-2'>is available</p>
                    </div>
                    <div className="description">
                        <div className="description-text">
                            <p className='description-1'>in all imaginable designs</p>
                            <p className='description-2'>and creates playground uniqueness areas</p>
                        </div>
                        <div className="description-button">
                            <button className='btn'>
                                Let’s explore
                                <div className="icon">
                                    <img src="./image/homePage/arrow-right.png" alt="arrow-right" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item-right col-6">
                    <img src="./image/homePage/image-01.png" alt="" />
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="container row">
                <div className="item-left col-6">
                    <div className="title">
                        <h1 className='title-1'>sennar</h1>
                        <p className='title-2'>is available</p>
                    </div>
                    <div className="description">
                        <div className="description-text">
                            <p className='description-1'>in all imaginable designs</p>
                            <p className='description-2'>and creates playground uniqueness areas</p>
                        </div>
                        <div className="description-button">
                            <button className='btn'>
                                Let’s explore
                                <div className="icon">
                                    <img src="./image/homePage/arrow-right.png" alt="arrow-right" />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="item-right col-6">
                    <img src="./image/homePage/image-01.png" alt="" />
                </div>
            </div>
        </Carousel.Item>
      </Carousel>
      </>
    );
  }