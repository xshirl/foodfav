import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RestaurantList from './components/RestaurantList';
import RestaurantFilter from './components/RestaurantFilter';
import Login from './components/Login';
import Registration from './components/RegistrationForm';
import {
  getReviews,
  createReview,
  deleteReview,
  updateReview,
  login,
  register
} from './services/apiService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      currentUser: null
    }

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
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

 handleLogin(creds) {
   login(creds)
    .then(user => this.setState({currentUser: user}));
 }

handleRegistration(creds) {
  register(creds)
   .then(user => this.setState({currentUser: user}));
 }


  componentDidMount() {
    
  }
  render() {
   let Site;
    if(this.state.currentUser){
      Site = (
        <div>
        <RestaurantFilter onSubmit = {this.handleFilterSubmit}  />
        <RestaurantList restaurants={this.state.restaurants} />
        </div>
      )
    }
      else{
       Site = ( <div className="App">
       Login:
        <Login onSubmit = {this.handleLogin} />
       Register:
        <Registration onSubmit = {this.handleRegistration} />
        </div>)
      }
    
    return (
      <Router>
      {Site}
      </Router>
    );
  }
}

export default App;
