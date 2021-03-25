import React, { useContext } from 'react';
import { BlogContext } from '../../context/context';
import BlogItem from './BlogItem';
import './blog.css';

const Blog = () => {
  const blogItems = useContext(BlogContext);
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    if (!blogItems.items) setLoading(true);
    else setData(blogItems), setLoading(false);
  });

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
