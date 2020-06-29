import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Blog from './components/Blog/Blog'
import BlogPost from './components/Blog/BlogPost'
import Home from './components/Home/Home'

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route path='/blog/:blogPost' component={BlogPost}/>
    </Switch>
)

export default Routes