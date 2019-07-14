import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../actions/postAction';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit(event) {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    }

    this.props.createPost(post);

  }

  render() {
    return (
      <div className="postForm">
        <h1 className="postForm__header">Add a Post</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="postForm__title">
            <label className="postForm__title--label">Title</label>
            <input className="postForm__title--input" type="text"
            onChange={this.handleChange}
            name="title"
            value={this.state.title}
            />
          </div>
          <div className="postForm__body">
            <label className="postForm__body--label">Body</label>
            <textarea name="body"
            className="postForm__body--input"
            value={this.state.body}
            onChange={this.handleChange}
            />
          </div>
          <button className="postForm__button" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm);
