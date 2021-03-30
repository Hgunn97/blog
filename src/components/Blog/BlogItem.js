import React, { useState } from 'react';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { DateTime } from 'luxon';
import './blog.css';

const BlogItem = (props) => {
  return (
    <div className="box blogBox">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <h1>{props.title}</h1>
            <Markdown source={props.content.split(' ').splice(0, 60).join(' ').concat('...')} />
          </div>
          <div className="level">
            <div className="level-left">
              <Link
                className="level-item button is-small is-primary"
                to={{
                  pathname: `/${props.link}`
                }}
              >
                Read More
              </Link>
            </div>
            <div className="level-right">
              <p className="level-item is-size-7 has-text-primary">
                {DateTime.fromISO(props.published).toLocaleString(DateTime.DATE_MED)}
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default BlogItem;
