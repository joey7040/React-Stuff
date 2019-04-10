import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Navbar extends Component {
    render(){
        return (
            <div>
                            <nav className="navbar navbar-toggleable-sm fixed-top navbar-inverse bg-primary app-navbar">
                <button className="navbar-toggler navbar-toggler-right hidden-md-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link className="navbar-brand" to="/">
                   VAR
                </Link>

                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" data-toggle="modal" to="/">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Docs</Link>
                    </li>

                    <li className="nav-item hidden-md-up">
                        <Link className="nav-link" to="/">Notifications</Link>
                    </li>
                    <li className="nav-item hidden-md-up">
                        <Link className="nav-link" data-action="growl">Growl</Link>
                    </li>
                    <li className="nav-item hidden-md-up">
                        <Link className="nav-link" to="/">Logout</Link>
                    </li>

                    </ul>

                    <form className="form-inline float-right hidden-sm-down">
                    <input className="form-control" type="text" data-action="grow" placeholder="Search"/>
                    </form>

                    <ul id="#js-popoverContent" className="nav navbar-nav float-right mr-0 hidden-sm-down">
                    <li className="nav-item">
                        <Link className="app-notifications nav-link" to="/">
                        <span className="icon icon-bell"></span>
                        </Link>
                    </li>
                    <li className="nav-item ml-2">
                        <button className="btn btn-default navbar-btn navbar-btn-avatar" data-toggle="popover" data-original-title="" title="">
                        <img className="rounded-circle" src="assets/img/avatar-dhg.png"/>
                        </button>
                    </li>
                    </ul>

                    <ul className="nav navbar-nav hidden-xs-up" id="js-popoverContent">
                    <li className="nav-item"><a className="nav-link" href="#" data-action="growl">Growl</a></li>
                    <li className="nav-item"><a className="nav-link" href="login/index.html">Logout</a></li>
                    </ul>
                </div>
                </nav>
</div>
        )
    }
}