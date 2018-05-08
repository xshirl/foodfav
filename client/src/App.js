import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      <p>hello world</p>
      </div>
      </Router>
    );
  }
}

export default App;
