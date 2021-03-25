import React, { createContext, useState, useEffect } from 'react';
import Client from '../contentful';
import PropTypes from 'prop-types';

export const BlogContext = createContext({});

export const BlogProvider = (props) => {
  const [value, setValue] = React.useState([]);

  useEffect(() => {
    onLoad().then((items) => setValue(items));
  }, []);

  const onLoad = async () => {
    const items = await Client.getEntries().catch((e) => console.log('Error' + e.message));
    return items;
  };

  return <BlogContext.Provider value={value}>{props.children}</BlogContext.Provider>;
};

BlogProvider.propTypes = {
  children: PropTypes.node
};
