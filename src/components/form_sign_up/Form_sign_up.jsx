import React from 'react';
import './Form_sign_up.sass';
import Hero from '../hero/Hero';
import buttonGoogle from '../../assets/img/btn_google_signup_light_normal_web@2x.png'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Form_sign_up() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert("Sucess");
    }
    return (
        <div className='sign-up-background'>
            <Hero />
            <div className='form-background'>
                <label className='title-form'>Getting Started</label>
                <form className='form-sign-up' onSubmit={handleSubmit(onSubmit)}>
                    <label>Full Name</label>
                    <input type='text' className={errors.fullName ? "input-error-border" : "item-form"}
                        {...register("fullName", { required: "This field cannot be empty" })} />
                    <label className="input-error">{errors.fullName && errors.fullName.message}</label>
                    <label>Users name or Email</label>
                    <input name='email' type="text" className={errors.email ? "input-error-border" : "item-form"}
                        {...register("email", { required: "This field cannot be empty", pattern: { value: /^\S+@\S+$/i, message: "This e-mail is invalid" } })} />
                    <label className="input-error">{errors.email && errors.email.message}</label>
                    <label>Password</label>
                    <input className='item-form' type='password'
                        {...register("password", { required: "This field cannot be empty", minLength: { value: 6, message: "The password cannot be less than 6 characters" } })} />
                    <label className="input-error">{errors.password && errors.password.message}</label>
                    <a href='#' className='forgot-password'>Forgot password?</a>
                    <button className='button-form' type='submit'>Sign up</button>
                </form>
                <div className='divisor-or'>
                    <div><hr /></div>
                    <div>Or</div>
                    <div><hr /></div>
                </div>
                <div className='div-button-google'>
                    <img src={buttonGoogle} alt='Google Sign up' className='button-google' />
                </div>
                <div className='div-link-create-account'>
                    <span>Already on <span className='invision-link-create-account'>Invision</span> ?
                        <Link to='/tela-login' className='link-create-account'> Log in</Link>
                    </span>
                </div>
            </div>
        </div>

    );
};