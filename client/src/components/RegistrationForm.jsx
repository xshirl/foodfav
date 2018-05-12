import React, { Component } from 'react';

class Registration extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }
  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

handleInputChange(e) {
  const {name, value} = e.target;
  this.setState({
    [name]: value
  });
}
handleSubmit(e) {
  e.preventDefault();
  this.props.onSubmit(this.state);
  this.setState({
    username: '',
    email: '',
    password: ''
  });
}

render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Username:
        <input
        type='text'
        onChange={this.handleInputChange}
        value={this.state.username}
        name='username'
        />
      </label>
      <label>
        Email:
      <input
        type='text'
        onChange={this.handleInputChange}
        value={this.state.email}
        name='email'
      />
      </label>
      <label>
        Password:
      <input
        type='text'
        onChange={this.handleInputChange}
        value={this.state.password}
        name='password'
      />
      </label>
      <button type='submit'>Login</button>
    </form>
  )
}