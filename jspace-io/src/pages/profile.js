import React, {Component} from 'react';
import Navbar from '../components/Navbar';
import ProfileHeader from '../components/profile_header'
export default class Profile extends Component {
    render(){
        return (
          <div>
              <Navbar />
              <ProfileHeader />
          </div> 

        )
    }
}