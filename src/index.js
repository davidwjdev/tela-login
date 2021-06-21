import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Carousel_images from './components/carousel_images/Carousel_images';
import Sign_in from './pages/Sign_in';
import Sign_up from './pages/Sign_up';

import { BrowserRouter, Switch, Route } from "react-router-dom";


ReactDOM.render(
  <div className='div-sign-in-sign-up'>
    <div className='carousel'>
      <Carousel_images />
    </div>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Sign_in} />
        <Route path="/sign_up" component={Sign_up} /> 

      </Switch>
    </BrowserRouter>
  </div>
  , document.getElementById('root')
);

