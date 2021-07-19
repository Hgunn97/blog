import React, { useContext } from 'react';
import { BlogContext } from '../../context/context';
import BlogItem from './BlogItem';
import './blog.styles.scss';
import TagManager from "react-gtm-module";

const Blog = () => {
  const blogItems = useContext(BlogContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    if (!blogItems.items) setLoading(true);
    else {
      setData(blogItems)
      setLoading(false);
    }
  });

  React.useEffect(() => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'virtualPageView',
        pageURL: window.location.href || null,
        pageName: 'Blog List',
      }
    }

    TagManager.dataLayer(tagManagerArgs)
    console.log("I have fired analytics from the blog list page")
  },[])

  return (
    <section className="section allPostSection">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.items.map(({ fields }, i) => (
            <BlogItem key={i} {...fields} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;
