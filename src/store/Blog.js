import * as contentful from 'contentful'
import * as actions from './blog/actions'

const client = contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export function loadBlog() {
  return async dispatch => {
    dispatch(actions.blogLoading())
    try {
      const {
        items
      } = await client.getEntries()
      dispatch(actions.loadBlogSuccess(items))
    } catch (error) {
      console.log(error)
      dispatch(actions.blogLoading(false))
    }
  }
}