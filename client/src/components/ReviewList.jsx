import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Review from './Review';
import ReviewForm from './ReviewForm';
import './ReviewList.css';

export default function ReviewList(props) {
  return (
    <ul className='reviewUl'>
      {props.reviews.map(review => (
        <Switch key={review.id}>
          <Route exact
            path={`/reviews/${review.id}/edit`}
            render={() => (
                <ReviewForm
                  onSubmit={updatedReview => props.onEdit(updatedReview, updatedReview.id)}
                  initialValue={review}
                />
            )}
          />
          <Route
            render={() => (
              <Review
                onDelete={()=> props.onDelete(review.id)}
                review={review}
              />
            )}
          />
        </Switch>
      ))}
    </ul>
  )
}


