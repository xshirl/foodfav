import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';
import ReviewList from './components/ReviewList';
import ReviewForm from './components/ReviewForm';
import RestaurantList from './components/RestaurantList';
import RestaurantFilter from './components/RestaurantFilter';
import Login from './components/Login';
import {
  getReviews,
  createReview,
  deleteReview,
  updateReview,
  login
} from './services/apiService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      reviews: [],
      currentUser: null
    }

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  fetchReviews() {
    fetch(`/api/reviews`)
    .then(resp => {
      if(!resp.ok) throw new Error(resp.statusMessage);
      return resp.json();
    })
    .then(respBody => {
      this.setState({
        reviews: respBody.data
      })
    })
  }

createReview(review) {
    fetch('/api/reviews', {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => {
        console.log(resp)
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(resBody => {
        this.setState((prevState, props) => {
          return {
            reviews: prevState.reviews.concat(resBody.data)
          }
        })
      })
  }

deleteReview(id) {
    fetch(`/api/reviews/${id}`, {
      method: 'DELETE'
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(respBody => {
        this.setState((prevState, props) => {
          return {
            reviews: prevState.reviews.filter(review => review.id !== id)
          }
        })
      })
  }

  updateReview(review, id) {
    fetch(`/api/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify(review),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(resp => {
        if (!resp.ok) throw new Error(resp.statusMessage);
        return resp.json();
      })
      .then(resBody => {
        this.setState((prevState, props) => {
          const { reviews } = prevState;
          const indx = reviews.findIndex(r => r.id === id);
          return {
            reviews: [
              ...reviews.slice(0, indx),
              resBody.data,
              ...reviews.slice(indx + 1)
            ]
          }
        })
      })
  }

 handleSubmit(review) {
    this.createReview(review);
  }
  handleDelete(id) {
    this.deleteReview(id);
  }

  handleEdit(review, id) {
    this.updateReview(review, id);
  }

 handleFilterSubmit(options) {
  console.log(options);
  this.fetchRestaurants(options.term, options.location);
 }

  componentDidMount() {
    this.fetchReviews();
  }
  render() {
    return (
      <Router>
      <div className="App">
      <nav>
        <ul>
          <li><Link to="/reviews">Reviews </Link></li>
        </ul>
      </nav>

      <Switch>
      <Route exact path="/" render={() => (<div><RestaurantFilter onSubmit = {this.handleFilterSubmit}  /> <RestaurantList restaurants={this.state.restaurants} /> </div>)} />
      <Route exact path="/reviews" render={() => <ReviewList reviews={this.state.reviews} onDelete={this.handleDelete} onEdit={this.handleEdit}/> } />
      <Route exact path="/new" render={()=> <ReviewForm onSubmit={this.handleSubmit} />} />
      </Switch>

      </div>

      </Router>
    );
  }
}

export default App;
