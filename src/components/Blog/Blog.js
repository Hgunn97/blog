import React, { Component } from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import { Loader } from '../Loader/Loader'
import './blog.css'

class Blog extends Component {
    render() {
        return (
            <section className="section allPostSection">
                { this.props.blog.loading
                    ? <Loader className="has-text-primary"></Loader>
                    : <div>
                        { this.props.blog.posts.map(({fields}, i) =>
                            <BlogItem key={i} {...fields} />
                        )}
                    </div>
 }
            </section>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
      blog: state.blog
    }
  }
  export default connect(mapStateToProps)(Blog)