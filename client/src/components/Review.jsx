import React from 'react';
import { Link } from 'react-router-dom';
import './ReviewList.css';

export default function Review({ review, onDelete, onEdit}) {
  return (
    <div className='reviewLi'>
      <h3> {review.rest_name} <button onClick={onDelete}>X</button></h3>
        <p> Review: {review.content} </p>
        <p> Rating: {review.rating} </p>
      <Link to={`/reviews/${review.id}/edit`}>Edit</Link>
    </div>
  )
}

