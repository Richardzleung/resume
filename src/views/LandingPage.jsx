import React from 'react';
import PropTypes from 'prop-types';
import HomePageHero from 'styles/landingPage.module.css';
import heroImage from 'static/images/hero.svg';
import scribble from 'static/images/3.svg';

const HomeBase = ({ scrollToProjectsView }) => {
  return (
    <section className='vh-100 grid--col' >
      <div className={HomePageHero.background}/>
      <img src={scribble} className={HomePageHero.scribble} alt='scribble-img'/>
      <h1 className={HomePageHero.titleContainer}>
        <span className={HomePageHero.heroTitle}>Front-end Developer</span>
        <span className={HomePageHero.heroSubTitle}>Hello! My name is Richard and I&apos;m a full-stack web developer.</span>
      </h1>
      <img src={heroImage} alt='hero' className={HomePageHero.img}/>
      <button className='scroll-down' aria-label='scroll-down-btn' onClick={scrollToProjectsView}/>
    </section>
  );
};

HomeBase.propTypes = {
  scrollToProjectsView: PropTypes.func
};

export default HomeBase;