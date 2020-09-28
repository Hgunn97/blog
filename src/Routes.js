import React from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './components/About/About'
import Blog from './components/Blog/Blog'
import BlogPost from './components/Blog/BlogPost'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Blog} />
        <Route exact path='/about' component={About} />
        <Route path='/:blogPost' component={BlogPost}/>
    </Switch>
)

export default Routes