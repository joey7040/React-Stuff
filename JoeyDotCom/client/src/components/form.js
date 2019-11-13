import React from 'react';
import {Component} from 'react';
import axios from 'axios';


class ContactForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          name: '',
          email:'',
          message:''
        
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
      }
  
      async handleSubmit(e){
        e.preventDefault()
      
        const { name, email, message } = this.state
      
        const form = await axios.post('/api/form', {
          name,
          email, 
          message
        })
      }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="name" type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input name="email" type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Message:
            <textarea name="message" type="text" value={this.state.message} onChange={this.handleChange} />
          </label>
          <input className='button' type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default ContactForm