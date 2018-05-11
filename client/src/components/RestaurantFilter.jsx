<<<<<<< HEAD
import React from 'react';

export default fuction RestaurantFilter(props) {
    return(
        <div class='filter'>
            <input type='text' value={props.term} onChange={props.onChange} name='term'
            />
            <input type='text' value={props.term} onChange={props.onChange} name='location'
            />
            <input type='submit' value='Submit'/>
        </div>
    )
}
=======
import React, { Component } from 'react';
import './RestaurantFilter.css';

export default class RestaurantFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit({
      term: this.refs.term.value,
      location: this.refs.location.value
    });
  }

  handleInput() {
      this.props.term = this.refs.term.value,
      this.props.location = this.refs.location.value
    console.log(this.props.term);
  }

  render() {
  return (
    <div>
    <h1> FoodFav </h1>
    <form onSubmit={this.handleSubmit} className='filter'>
      <input type='text' ref='term'  name='term' placeholder="Search term" />
      <input type='text' ref='location'  name="location" placeholder="Location" />
      <input type="submit" value="Submit" onClick="" />
    </form>
    </div>
    )
}
}
>>>>>>> 1db2c2f1fd59dfdb9a18ba5986abf46828baca23
