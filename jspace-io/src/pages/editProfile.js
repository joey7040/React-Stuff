import React , { Component } from 'react';
import  CssEditor  from '../components/cssEditor';
import NavBar from '../components/Navbar';
import './editProfile.css';


export default class EditProfile extends Component {
    render(){
        return (
            <div>
                <NavBar/>
                <CssEditor />
            </div>
        )
    }
}