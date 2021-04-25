import React from 'react';
import PropTypes from 'prop-types';
import HomePageHero from 'styles/landingPage.module.css';
import scribble from 'static/images/3.svg';

// TODO get this animation working
const HomeBase = ({ scrollToProjectsView }) => (
  <>
    <section className='vh-100 grid--col' >
      <div className={HomePageHero.background}/>
      <img src={scribble} className={HomePageHero.scribble} alt='scribble-img'/>
      <h1 className={HomePageHero.titleContainer}>
        <span className={HomePageHero.heroTitle}>Front-end Developer</span>
        <span className={HomePageHero.heroSubTitle}>Hello! My name is Richard and I&apos;m a full-stack web developer.</span>
      </h1>
    </section>
    <div className='scroll-down--container'>
      <button className='scroll-down' aria-label='scroll down' onClick={scrollToProjectsView}/>
    </div>
  </>
);

HomeBase.propTypes = {
  scrollToProjectsView: PropTypes.func
};

export default HomeBase;