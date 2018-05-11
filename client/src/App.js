import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import RestaurantList from './components/RestaurantList'
import ReviewForm from './components/ReviewForm'
=======
import RestaurantList from './components/RestaurantList';
import RestaurantFilter from './components/RestaurantFilter';
>>>>>>> 1db2c2f1fd59dfdb9a18ba5986abf46828baca23

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
      <RestaurantFilter onSubmit = {this.handleFilterSubmit}  />
      <RestaurantList restaurants={this.state.restaurants} />
      </div>

      </Router>
    );
  }
}

export default App;
