import React from 'react';
// import Restaurant from './Restaurant';
import { Link, Redirect, Route } from 'react-router-dom';
import ReviewForm from './ReviewForm';

export default function RestaurantList(props) {
  return (
    <div className="list">
      {props.restaurants.map(restaurant => (
        <div className="restaurant" key={restaurant.id}>
        <img src={restaurant.image_url} height='300' />
        <h3> {restaurant.name} </h3>
        <h4>Location: {restaurant.location.address1} {restaurant.location.city} {restaurant.location.zip_code} </h4>
        <h5> Rating: {restaurant.rating} </h5>
        <h5> Price range: {restaurant.price} </h5>
        </div>
        ))}
    </div>
    )
  }

