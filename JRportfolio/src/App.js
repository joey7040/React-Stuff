import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
// import ProductList from './components/ProductList';
// import Cart from './components/Cart';
import Default from './components/Default';
import Mission from './components/Mission';
// import Donate from './components/Donate';
// import DonateDirectly from './components/DonateDirect';
// import About from './components/Aboutus';
import Affiliates from './components/Affiliates';
import Projects from './components/Projects';
import Contact from './components/Contacts';
import PhotoGallery from './components/Gallery';

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Mission} />
            <Route path="/mission" component={Mission} />
            <Route path="/projects" component={Projects} />
            <Route path="/affiliates" component={Affiliates} />
            <Route path="/gallery" component={PhotoGallery} />
            <Route path="/contact" component={Contact} />
            <Route component={Default} />
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;
