import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postAction';

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const postItems = this.props.posts.map((post) => {
      return (<div className="post" key={post.id}>
        <h3 className="postTitle">{post.title}</h3>
        <p className="postBody">{post.body}</p>
      </div>)
    });
    return (
      <div>
        <h1>POSTS</h1>
        {postItems}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object
}

const mapStateToProps = state =>>> ({
  posts: state.posts.items
});

export default connect(null, { fetchPosts })(Posts);
