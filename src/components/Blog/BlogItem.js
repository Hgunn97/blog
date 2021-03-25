import React from 'react';
import * as Markdown from 'react-markdown';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './blog.css';

const BlogItem = (props) => (
  <div className="box blogBox">
    <article className="media">
      <div className="media-content">
        <div className="content">
          <h1>Title</h1>
          {/*<Markdown source={props.content.split(" ").splice(0,60).join(" ").concat('...')} />*/}
        </div>
        <div className="level">
          <div className="level-left">
            <Link
              className="level-item button is-small is-primary"
              to={{
                pathname: `/`,
                state: { props }
              }}
            >
              Read More
            </Link>
          </div>
          <div className="level-right">
            <p className="level-item is-size-7 has-text-primary">
              {/*{moment(props.published).calendar(null, {*/}
              {/*sameDay: '[Today]',*/}
              {/*lastDay: '[Yesterday]',*/}
              {/*lastWeek: '[Last] dddd',*/}
              {/*sameElse: 'Do MMM YY'*/}
              {/*})}*/}
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
);
export default BlogItem;
