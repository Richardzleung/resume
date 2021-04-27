import React from 'react';
import PropTypes from 'prop-types';
import theme from 'styles/landingPage.module.css';
import background from 'static/images/landingBackground.svg';
import scribble from 'static/images/3.svg';
import scribble2 from 'static/images/82.svg'

// TODO get this animation working
const HomeBase = ({ scrollToProjectsView }) => (
  <>
    <section className={`vh-100 grid--col ${theme.background}`} >
      <img src={scribble} className={theme.scribble} alt='scribble'/>
      <img src={scribble2} className={theme.scribble2} alt='scribble 2'/>
      <h1 className={theme.titleContainer}>
        <span className={theme.name}>Richard Leung</span>
        <span className={theme.message}>Front-End Engineer in San Francisco.</span>
      </h1>
      <div className='scroll-down--container'>
        <button className='scroll-down' aria-label='scroll down' onClick={scrollToProjectsView}/>
      </div>
    </section>
    
    {/* <section className='grid--col'>
      <p className={theme.about}>
        Hi there! My name is Richard and I&apos;m temporarily unemployed. 
        That means I&apos;m looking for a job! I started writing a{' '}
        <a href="https://richardzleung.wordpress.com" className={theme.blog}>
          blog
        </a>{' '} under the name Wacko Bandit. I can be found searching for tacos.
      </p>
    </section> */}
  </>
);

HomeBase.propTypes = {
  scrollToProjectsView: PropTypes.func
};

export default HomeBase;