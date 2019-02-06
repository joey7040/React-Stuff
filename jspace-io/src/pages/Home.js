import React, { Component } from 'react';
import './Home.css'
import Navbar from '../components/Navbar';

export default class Home extends Component {
    render(){
        return (
            <div>
            <Navbar />
            <div className="container">
                <h2> Welcome to jspace.io</h2>
                <p>They say everything looks better with odd numbers of things. But sometimes I put even numbers—just to upset the critics. We'll put a happy little sky in here. This is the fun part Imagination is the key to painting.</p>
            </div>
            </div>
        );
    }
}