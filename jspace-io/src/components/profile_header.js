import React, {Component} from 'react'
import "./profile_headder.css"

export default class ProfileHeader extends Component {
    render(){
        return (
            <div>
                                <div className="profile-header">
                    <div className="container">
                        <div className="container-inner">
                        <img className="rounded-circle media-object" alt="avi" src="../public/assets/img/avatar-dhg.png"/>
                        <h3 className="profile-header-user">Dave Gamache</h3>
                        <p className="profile-header-bio">
                            I wish i was a little bit taller, wish i was a baller, wish i had a girl…&nbsp;also.
                        </p>
                        </div>
                    </div>

                    <nav className="profile-header-nav">
                        <ul className="nav nav-tabs justify-content-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">Photos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Others</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/home">Anothers</a>
                        </li>
                        </ul>
                    </nav>
                    </div>
            </div>
        )
    }
}