import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React Redux Stater kit</h2>
        </div>
        <div className="App-intro">
          <Cart/>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object.isRequired
}

export default App;