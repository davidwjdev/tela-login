import React from 'react';
import './Form_sign_up.sass';
import Hero from '../hero/Hero';
import buttonGoogle from '../../assets/img/btn_google_signin_light_normal_web@2x.png'
import { Link } from 'react-router-dom';

export default function Form_sign_in() {

    return (
        <div className='sign-in-background'>
            <Hero />
            <div className='form-background'>
                <label className='title-form'>Getting Started</label>
                <form className='form-sign-in'>
                    <label>Full Name</label>
                    <input className='item-form' type='text' required maxlength='150'/>
                    <label>Users name or Email</label>
                    <input className='item-form' type='text' required />
                    <label>Password</label>
                    <input className='item-form' type='password' required  minLength='6'/>
                    <a href='#' className='forgot-password'>Forgot password?</a>
                    <button className='button-form' type='submit'>Sign up</button>
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
                    <span>New <span className='invision-link-create-account'>Invision</span> ?
                    <Link to='/' className='link-create-account'> Create Account</Link>
                    </span>
                </div>
            </div>
        </div>

    );
};