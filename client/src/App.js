import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RestaurantList from './components/RestaurantList'
import ReviewForm from './components/ReviewForm'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

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
