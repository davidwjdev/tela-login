import React from 'react';
import './Form_sign_in.sass';
import Hero from '../hero/Hero';
import buttonGoogle from '../../assets/img/btn_google_signin_light_normal_web@2x.png'

export default function Form_sign_in() {

    return (
        <div className='sign-in-background'>
            <Hero />
            <div className='form-background'>
                <label className='title-form'>Welcome to Invision</label>
                <form className='form-sign-in'>
                    <label>Users name or Email</label>
                    <input className='item-form' type='email' required />
                    <label>Password</label>
                    <input className='item-form' type='password' required />
                    <a href='#' className='forgot-password'>Forgot password?</a>
                    <button className='button-form' type='submit'>Sign in</button>
                </form>
                <div className='divisor-or'>
                    <div><hr /></div>
                    <div>Or</div>
                    <div><hr /></div>
                </div>
                <div className='div-button-google'>
                    <img src={buttonGoogle} alt='Google Sign in' className='button-google' />
                </div>
                <div className='div-link-create-account'>
                    <span>New <span className='invision-link-create-account'>Invision</span> ?<a href='#' className='link-create-account'> Create Account</a></span>
                </div>
            </div>
        </div>

    );
};