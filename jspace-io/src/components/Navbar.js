import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'


export default class Navbar extends Component{
    render(){
        return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-0">
        <div className="container">
        <Link className="navbar-brand" to="/home">VAR</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/News">News</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Profile">Profile</Link>
            </li>
            </ul>
            <form className="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>

        )
    }
}