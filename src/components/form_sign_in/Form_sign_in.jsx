import React from 'react';
import './Form_sign_in.sass';
import Hero from '../hero/Hero';
import buttonGoogle from '../../assets/img/btn_google_signin_light_normal_web@2x.png';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export default function Form_sign_in() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        alert("Success");
    }


    return (
        <div className='sign-in-background'>
            <Hero />
            <div className='form-background'>
                <label className='title-form'>Welcome to Invision</label>
                <form className='form-sign-in' onSubmit={handleSubmit(onSubmit)} >
                    <label>Users name or Email</label>
                    <input name='email' type="text" className={errors.email ? "input-error-border" : "item-form"}
                        {...register("email", { required: "This field cannot be empty", pattern: { value: /^\S+@\S+$/i, message: "This e-mail is invalid" } })} />
                    <label className="input-error">{errors.email && errors.email.message}</label>
                    <label>Password</label>
                    <input name='password' type='password' className={errors.password ? "input-error-border" : "item-form"}
                        {...register("password", { required: "This field cannot be empty" })} />
                    <label className="input-error">{errors.password && errors.password.message}</label>
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
                    <span>New <span className='invision-link-create-account'>Invision</span> ?
                        <Link to='/sign_up' className='link-create-account'> Create Account</Link>
                    </span>
                </div>
            </div>
        </div>

    );
};
