import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotron';

export default class News extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Jumbotron />
                <Footer />
            </div>
        )
    }
}