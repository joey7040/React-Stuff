import React, {Component} from 'react';
import {Form , FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import './App.css';

class App extends Component {

constructor(){
  super()

  this.state ={
    name:'',
    email:'',
    message:'',
  }
  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
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



render(){
  return (

<div className='butterz'>

  <div className='textContent'>
    <h3>Something here.</h3>
    <p>Something else here that would be more contact info.</p>
    <p>Something else here that would be more contact info.</p>
  </div>
  
    <div>
  <Form onSubmit={this.handleSubmit} className='container align-right' style={{ width:'30rem'  }}>
    <FormGroup className>
      <Label for="name">Name:</Label>
      <Input
        type="text"
        name="name"
        onChange={this.handleChange}
        
      />
    </FormGroup>
    <FormGroup>
      <Label for="email">Email:</Label>
      <Input
        type="email"
        name="email"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label for="email">Message:</Label>
      <Input
        type="textarea"
        name="message"
        onChange={this.handleChange}
      />
    </FormGroup>
    <Button>Submit</Button>
  </Form>
  </div>

  </div>
  );
}
}

export default App;
