import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Jumbotron.css';

export default class Jumbotron extends Component {
    render(){
        return (
        <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-3">Welcome to jspace.io</h1>
            {/* <h1 className="display-3">{this.props.title}</h1> */}
            {/* <p className="lead">{this.props.subtitle}</p> */}
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><Link className="btn btn-primary btn-lg" to="/about" role="button">Learn more »</Link></p>
            </div>
        </div>
        )
    }
}