import * as contentful from 'contentful'
import * as actions from './blog/actions'
import * as key from './keys'

const client = contentful.createClient({
    space: key.spaceID,
    accessToken:  key.accessToken
})

export function loadBlog() {
    return dispatch => {
      dispatch(actions.blogLoading())
      return client.getEntries()
        .then(({items}) => {
          dispatch(actions.loadBlogSuccess(items))
        })
        .catch(error => {
          console.log(error)
          dispatch(actions.blogLoading(false))
        })
    }
  }