import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Login}></Route>
          <Route path='/home' component={Home} />
          <Route path='/about' component={About}></Route>
          <Route path='/news' component={News}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
