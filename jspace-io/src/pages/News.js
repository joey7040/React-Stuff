import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default class News extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Footer />
            </div>
        )
    }
}