import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown';
import './blog.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/rainbow.css';

const BlogPost = () => {
  useEffect(() => {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
    console.log('Done the use effect');
  });
  return (
    <section className="blogSection">
      <div className="columns is-mobile">
        <div className="column">
          <Link to="/">
            <span>
              <i className="fas fa-long-arrow-alt-left"></i>
            </span>
            <span className="ml-1">Back</span>
          </Link>
        </div>
        <div className="column is-three-quarters"></div>
        <div className="column">
          <p className="level-item has-text-link is-size-7">
            {/*{moment(props.published).calendar(null, {*/}
            {/*  sameDay: '[Today]',*/}
            {/*  lastDay: '[Yesterday]',*/}
            {/*  lastWeek: '[Last] dddd',*/}
            {/*  sameElse: 'MMM Do YYYY'*/}
            {/*})}*/}
          </p>
        </div>
      </div>
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h1></h1>
            {/*<Markdown source={props.content} />*/}
          </div>
        </div>
      </article>
    </section>
  );
};
export default BlogPost;
