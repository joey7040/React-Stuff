import React, { Component } from 'react';
import './Footer.css';
// import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render(){
        return (
        <footer className="footer mt-auto py-3">
            <div className="container">
            {/* <ul className="footer">
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/News">News</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
            </li>
            <li>
            
            </li>
            </ul> */}
            <span className="text-muted">jSpace.io &#169; {new Date().getFullYear()}</span>  
            </div>
        </footer>
        )
    }
}