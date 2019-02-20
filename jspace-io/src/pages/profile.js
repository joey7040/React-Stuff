import React, {Component} from 'react';
import NavBar from '../components/Navbar';
import UserImg from '../components/userImg';
export default class Profile extends Component {
    render(){
        return (
            <div>
                <NavBar/>
                Profile Works.
                <UserImg/>
            </div>
        )
    }
}