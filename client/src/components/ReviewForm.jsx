import React, { Component } from 'react';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      rating: '',
      username: ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitReview} >
          <label>
          <h3> Review </h3>
          <textarea
            name='content'
            value={this.state.content}
            onChange={this.handleInputChange}
        />
        </label>
          <input type="text" value={this.state.rating} name='rating' placeholder="Rating" />
          <input type="text" value={this.state.username} name="username" placeholder="Username" />
        </form>
        </div>
      )
  }
}
