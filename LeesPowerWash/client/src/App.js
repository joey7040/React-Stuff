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

<div className='back' >


  
  
  <div className='container center '>

<div >
  <div className="card border-light mb-4 width">
    <div className="card-header">Tampa Bay Power Washing Services</div>
      <div className="card-body">
        <h5 className="card-title">Best powerwashing service in the bay area.</h5>
        <p className="card-text">Guarantee quality work every time.</p>
        <p className="card-text">Contact us: 813-888-8888</p>
      </div>
  </div>
</div>






  <Form onSubmit={this.handleSubmit} className='width' >
    <FormGroup className>
      <Label className="white" for="name">Name:</Label>
      <Input
        type="text"
        name="name"
        onChange={this.handleChange}
        
      />
    </FormGroup>
    <FormGroup>
      <Label className="white" for="email">Email:</Label>
      <Input
        type="email"
        name="email"
        onChange={this.handleChange}
      />
    </FormGroup>
    <FormGroup>
      <Label className="white" for="email">Message:</Label>
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
