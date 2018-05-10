import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ReviewForm.css';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectHome: false,
            quote: Object.assign({
                title: '',
                date: '',
                content:'',
                rating: ''
            }, props.initialValue)
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        this.setState((prevState, props) => ({
            review: {
                ...prevState.review,
                [name]: value
            }
        }))
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.review);
        this.setState({
            redirectHOME: true
        });
    }

    render() {
        const { content } = this.state.review
        return (
            <form onSubmit={this.handleSubmit} className={id ? 'edit' : 'create'}>
                {this.state.redirectHome && <Redirect to='/' />}
                {!id && <h2>Review</h2>}
                <label>
                    <h3>Title:</h3>
                    <input
                        type = 'text'
                        name = 'title'
                        value = {title}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    <h3>Rating:</h3>
                    <input
                        type = 'text'
                        name = 'title'
                        value = {title}
                        onChange={this.handleInputChange}
                    />
                </label>
                <label>
                    <h3>Date:</h3>
                    <input
                        type = 'text'
                        name = 'date'
                        value = {date}
                        onChange = {this.handleInputChange}
                    />
                </label>
                <label>
                    <h3>Content:</h3>
                    <textarea
                        name = 'title'
                        value = {content}
                        onChange = {this.handleInputChange}
                    />
                </label>
                <button type='submit'>{id ? 'Edit' : 'Create'} Submit </button>
                <Link to='/'>Cancel</Link>
            </form>
        )
    }
}

export default QuoteForm;