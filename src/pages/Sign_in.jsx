import React from 'react';
import Carousel_images from '../components/carousel_images/Carousel_images';
import Form_sign_in from '../components/form_sign_in/Form_sign_in'
import './Sign_in.sass';

export default function Sign_in() {

    return (
        <div className='sign-in'>
            <div className='carousel'>
                <Carousel_images />
            </div>
            <div className='form'>
                <Form_sign_in />
            </div>
        </div>

    );
}