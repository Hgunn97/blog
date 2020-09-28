import * as contentful from 'contentful'
import * as actions from './blog/actions'
import * as key from './keys'

const client = contentful.createClient({
  space: key.spaceID,
  accessToken: key.accessToken
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