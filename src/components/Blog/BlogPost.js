import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './blog.css';
import { BlogContext } from '../../context/context';

const BlogPost = () => {
  const blogItems = useContext(BlogContext);
  const [loading, setLoading] = React.useState(true);
  const [currentItem, setCurrentItem] = React.useState();

  React.useEffect(() => {
    const currentLink = window.location.pathname.split('/').pop();
    if (!blogItems.items) setLoading(true);
    else {
      blogItems.items.map((item) => {
        if (item.fields.link === currentLink) setCurrentItem(item.fields), setLoading(false);
      });
    }
  });

  const highlight = ({ value, language }) => {
    return (
      <SyntaxHighlighter language={language} style={okaidia}>
        {value}
      </SyntaxHighlighter>
    );
  };

  return (
    <section className="blogSection">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
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
                {moment(currentItem.published).calendar(null, {
                  sameDay: '[Today]',
                  lastDay: '[Yesterday]',
                  lastWeek: '[Last] dddd',
                  sameElse: 'MMM Do YYYY'
                })}
              </p>
            </div>
          </div>
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h1></h1>
                <ReactMarkdown source={currentItem.content} renderers={{ code: highlight }} />
              </div>
            </div>
          </article>
        </>
      )}
    </section>
  );
};
export default BlogPost;
