import React , { Component } from 'react';
import { AceEditor } from '../components/aceEditor';
import './editProfile.css';


export default class EditProfile extends Component {
    render(){
        return (
            <div>
                <AceEditor />
            </div>
        )
    }
}