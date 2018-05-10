import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RestaurantList from './components/RestaurantList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      reviews:[]
    }
  }

  render() {
    return (
      <Router>
      <div className="App">
      <p>hello world</p>
      </div>
      <RestaurantList restaurants={this.state.restaurants} />
      </Router>
    );
  }
}

export default App;
