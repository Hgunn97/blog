import React, { Component } from 'react';
import BlogItem from './BlogItem';
import './blog.css';

class Blog extends Component {
  render() {
    return (
      <section className="section allPostSection">
        <div>
          {/*{ this.props.blog.posts.map(({fields}, i) =>*/}
          {/*    <BlogItem key={i} {...fields} />*/}
          {/*)}*/}
          <p>Blog Items will be here</p>
          <BlogItem />
        </div>
      </section>
    );
  }
}

export default Blog;
