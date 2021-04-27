import React from 'react';
import PropTypes from 'prop-types';
import HomePageHero from 'styles/landingPage.module.css';
import scribble from 'static/images/3.svg';
import scribble2 from 'static/images/82.svg'

// TODO get this animation working
const HomeBase = ({ scrollToProjectsView }) => (
  <>
    <section className='vh-100 grid--col' >
      <span className={HomePageHero.background}/>
      <img src={scribble} className={HomePageHero.scribble} alt='scribble'/>
      <img src={scribble2} className={HomePageHero.scribble2} alt='scribble 2'/>
      <h1 className={HomePageHero.titleContainer}>
        <span className={HomePageHero.name}>Richard Leung</span>
        <span className={HomePageHero.message}>Front-End Engineer in San Francisco.</span>
      </h1>
      <div className='scroll-down--container'>
        <button className='scroll-down' aria-label='scroll down' onClick={scrollToProjectsView}/>
      </div>
    </section>
    <section className='grid--col'>
      <span className={HomePageHero.about}>
        Hi there! My name is Richard and I&apos;m temporarily unemployed. 
        That means I&apos;m looking for a job! I started writing a{' '}
        <a href="https://richardzleung.wordpress.com">blog</a>{' '}
        under the name Wacko Bandit. I can be found searching for tacos.
      </span>
    </section>
  </>
);

HomeBase.propTypes = {
  scrollToProjectsView: PropTypes.func
};

export default HomeBase;