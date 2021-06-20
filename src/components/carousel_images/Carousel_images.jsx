import React, { useState } from "react";
import './Carousel_images.sass'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../assets/img/data_1.png';
import image2 from '../../assets/img/data_1.png';

export default function Carousel_images() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='carousel-images-background'>
            {/* Adicionado Carousel Bootstrap*/}
            <Carousel
                controls={false}
                interval={3000}
                activeIndex={index}
                onSelect={handleSelect}>
                {/* Item do Carousel - Primeira Imagem*/}
                <Carousel.Item>
                    <img
                        className="images"
                        src={image1}
                        alt="Primeira Imagem"
                    />
                    <div className='text-image'>
                        <p className='title-carousel'>Marcenas mattis egestas</p>
                        <p className='subtitle-carousel'>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
                    </div>
                </Carousel.Item>
                {/* Item do Carousel - Segunda Imagem*/}
                <Carousel.Item>
                    <img
                        className="images"
                        src={image2}
                        alt="Segunda Imagem"
                    />
                    <div className='text-image'>
                        <p className='title-carousel'>Marcenas mattis egestas</p>
                        <p className='subtitle-carousel'>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};