import React from "react";
import './Carousel_images.sass'
import image1 from '../../assets/img/data_1.png';
import image2 from '../../assets/img/data_1.png';

import Slider from 'infinite-react-carousel';

export default function Carousel_images() {
// Configuração do package
    const settings = {
        adaptiveHeight: true, //ajuste automatico de altura
        autoplay: true, // troca de imagem automaticamente
        dots: true, // os pontos que permite o usuario escolher a imagem 
        arrows: false, // desativa as setas direcionais que escolher a imagem anterior/proxima
    };
    return (
        <div className='carousel-images-background'>
{/* Carousel images */}
            <Slider {...settings}>
                <div>
                    <img
                        className="images"
                        src={image1}
                        alt="Primeira Imagem"
                    />
                    <div className='text-image'>
                        <p className='title-carousel'>Marcenas mattis egestas</p>
                        <p className='subtitle-carousel'>Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.</p>
                    </div>
                </div>
                <div>
                    <img
                        className="images"
                        src={image2}
                        alt="Segunda Imagem"
                    />
                    <div className='text-image'>
                        <p className='title-carousel'>Lorem ipsum dolor sit amet.</p>
                        <p className='subtitle-carousel'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, In imperdiet magna quis ante.</p>
                    </div>
                </div>
            </Slider>
        </div>
    );
};