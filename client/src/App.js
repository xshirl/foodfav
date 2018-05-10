import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantFilter from './components/RestaurantFilter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],

    }

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
  }



  fetchRestaurants(term,location) {
    fetch(`/restaurants/${term}/${location}`)
    .then(resp=> {
      if(!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      this.setState({
        restaurants: respBody.data.businesses
      })
    })
  }

 handleFilterSubmit(options) {
  console.log(options);
  this.fetchRestaurants(options.term, options.location);
 }

  componentDidMount() {

  }
  render() {
    return (
      <Router>
      <div className="App">
      <p>hello world</p>
      <RestaurantFilter onSubmit = {this.handleFilterSubmit} term={this.state.term} location={this.state.location} />
      </div>

      </Router>
    );
  }
}

export default App;
