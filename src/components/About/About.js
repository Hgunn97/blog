import React from 'react';
import './about.styles.scss';
import SanFran from '../../images/SanFran.JPG';
import TagManager from "react-gtm-module";

function About() {
  const tagManagerArgs = {
    dataLayer: {
      event: 'virtualPageView',
      pageURL: window.location.href || null,
      pageName: 'About',
    }
  }

  TagManager.dataLayer(tagManagerArgs)

  return (
    <section className="section aboutSection">
      <h1 className="title is-5">Hi, I'm Hannah</h1>
      <img src={SanFran} alt="" width="400" id="sanFran" />
      <div className="aboutContainerP1">
        <p className="mb-4">
          I've always thought about creating and writing a blog but never got round to it. Well now
          I've finally done it. First of all let me throw out a disclaimer, all opinions shared in
          this blog are my own, I'm also by no means an expert developer so there might be better
          ways to implement stuff I'm talking about. But anyway I wanted to create this so that I
          can build on my own knowledge and hopefully share that with other people. I'm going to try
          to create a new post at least once a month, but we will see what happens.
        </p>
      </div>
      <div className="aboutContainerP2">
        <p>
          That's me in the photo in front of the golden gate bridge. I love travelling, San
          Francisco is definitely my favourite place I've been too so far, Rome is a very close
          second though. I also love sports, I mainly watch football and support Arsenal, so life
          can be a bit hard sometimes. My other interest are playing ps4 games like God of war (that
          was incredible), drinking coffee and staying up to date with UK politics.
        </p>
      </div>
    </section>
  );
}

export default About;
