import * as contentful from 'contentful';

export default contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.NODE_ENV === 'production' ?
    process.env.REACT_APP_PUBLIC_TOKEN
    : process.env.REACT_APP_PREVIEW_TOKEN,
  host: process.env.NODE_ENV === 'production' ? "cdn.contentful.com" : "preview.contentful.com"
});
