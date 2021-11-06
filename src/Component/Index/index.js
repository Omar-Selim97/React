import React, { Component } from 'react';
import Home from './../Home';
import About from './../About';
import Footer from './../Footer';
import Portofolio from './../Portofolio';
import Work from './../Work';
import Profile from './../Profile';
import SocialMedia from './../SocialMedia';

 class index extends Component {
    render() {
        return (
            <div>
                <Home/>
                <Work/>
                <Portofolio/>
                <Profile/>
                <About/>
                <SocialMedia/>
                <Footer/>
            </div>
        )
    }
}



export default index