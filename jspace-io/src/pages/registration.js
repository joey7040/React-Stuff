import React, {Component} from 'react';
import './registeration.css'

export default class Registeration extends Component{
    render(){
        return(
            <div className="container">
            <div className="col-md-6 text-center mx-auto">
                <form className="form-register">
        <div className="text-center mb-4">
            <img className="mb-4" src="/docs/4.2/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Hey, What are you waiting for? </h1>
        </div>

        <div className="form-label-group">
            <label htmlFor="fisrt_name">First Name</label>
            <input type="name" id="first_name" className="form-control" placeholder="First Name" required="True" autoFocus="" />
            
        </div>
        
        <div className="form-label-group">
            <label htmlFor="last_name">Email address</label>
            <input type="name" id="last_name" className="form-control" placeholder="Last Name" required="True" autoFocus="" />
        </div>

        <div className="form-label-group">
            <label htmlFor="inputEmail">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="True" autoFocus="" />
        </div>

        <div className="form-label-group">
            <label htmlFor="inputPassword">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="True" />
        </div>

        <div className="form-label-group">
            <label htmlFor="confirm_password">Password</label>
            <input type="password" id="confirm_password" className="form-control" placeholder="Confirm Password" required="True" />
        </div>

        <button className="btn btn-lg btn-outline-info btn-block mt-5 p-2" type="submit">Sign up</button>
        <p className="mt-5 mb-3 text-muted text-center">VAR© 2017-2018</p>
        </form>
        </div>
            </div>
        )
    }
}