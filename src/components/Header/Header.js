import React from 'react'
import './Header.css'
import Profile from '../../images/Profile.jpg'

function Header (){

    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <img className="profilePic" src={Profile} alt="Profile" />
                    <h1 className="title">
                        Hannah Gunn
                    </h1>
                    <h2 className="subtitle">
                        This is my personal blog
                    </h2>
                    <div className="linkContainer">
                        <a href="https://github.com/hgunn97" rel="noopener noreferrer" target="_blank" className="myLink mr-1">
                            <span className="icon">
                                <i className="fab fa-github"></i>
                            </span>
                            <span>Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/hannah-m-gunn/" rel="noopener noreferrer" target="_blank" className="myLink ml-1">
                            <span className="icon">
                                <i className="fab fa-linkedin"></i>
                            </span>
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="hero-foot">
                <div className="mb-2 container has-text-centered">
                    <a href='/' className="mr-1 button is-primary is-inverted">
                        <span>Posts</span>
                    </a>
                    <a href='/about' className="ml-1 button is-primary is-inverted">About</a>
                </div>
            </div>
        </section>
    )
}
export default Header
