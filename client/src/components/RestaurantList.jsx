import React from 'react';
// import Restaurant from './Restaurant';
import { Link, Redirect } from 'react-router-dom';

export default function RestaurantList(props) {
  return (
    <div class="list">
      {props.restaurants.map(restaurant => (
        <div class="restaurant">
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

