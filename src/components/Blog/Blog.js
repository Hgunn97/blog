import React, { Component } from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import { Loader } from '../Loader/Loader'

class Blog extends Component {
    render() {
        return (
            <div>
                <p>This is the blog page</p>
                { this.props.blog.loading
                    ? <Loader className="has-text-primary"></Loader>
                    : <div>
                        { this.props.blog.posts.map(({fields}, i) =>
                            <BlogItem key={i} {...fields} />
                        )}
                    </div>
 }
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      blog: state.blog
    }
  }
  export default connect(mapStateToProps)(Blog)