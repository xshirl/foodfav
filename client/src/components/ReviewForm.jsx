import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectHome: false,
      review: Object.assign({
       rest_name:'',
       content: '',
       user_id:'',
       rest_id: ''
     }, props.initialValue)
   };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmitReview = this.handleSubmitReview.bind(this);
  }

  handleInputChange(e) {
    // see https://reactjs.org/docs/forms.html#handling-multiple-inputs
    const {name, value} = e.target;
    console.log(name, value);
    this.setState((prevState, props) => ({
      review: {
        ...prevState.review,
        [name]: value
      }
    }))
  }

  handleSubmitReview(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.review);
    this.setState({
      redirectHome: true
    });
  }

  render() {
    const { rest_name, content, user_id, rest_id, id } = this.state.review
    return (
      <div>
        <form onSubmit={this.handleSubmitReview} className={id ? 'edit' : 'create'}>
        {this.state.redirectHome && <Redirect to='/' />}
        {!id && <h2>New Quote</h2>}
          <label>
          <h3> Review </h3>
          </label>
          <input type="text" value={this.state.rest_name} onChange={this.handleInputChange} name="rest_name" placeholder="Restaurant Name" />
          <textarea
            name='content'
            value={this.state.content}
            onChange={this.handleInputChange}
        />
          <input type="text" value={this.state.rating} onChange={this.handleInputChange} name='rating' placeholder="Rating" />
          <input type="text" value={this.state.user_id} onChange={this.handleInputChange} name="user_id" placeholder="User id" />
          <input type="text" value={this.state.rest_id} onChange={this.handleInputChange} name="user_id" placeholder="User id" />
          <button type='submit'>{id ? 'Edit' : 'Create'} Quote</button>
          <Link to='/'>Cancel</Link>

        </form>
        </div>
      )
  }
}
