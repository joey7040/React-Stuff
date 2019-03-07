import React, { Component } from 'react';
import './Login.css';

export default class LoginComponent extends Component {
    render(){
        return (
        <form className="form-signin">
        <div className="text-center mb-4">
            <img className="mb-4" src="/docs/4.2/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">VAR</h1>
        </div>

        <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
            <label htmlFor="inputPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
            <label>
            <input type="checkbox" value="remember-me" /> Remember me
            </label>
        </div>
        <button className="btn btn-lg btn-outline-info btn-block" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted text-center">© 2017-2018</p>
        </form>
        )
    }
}
 