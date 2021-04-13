import React from 'react';
import PropTypes from 'prop-types';
import HomePageHero from 'styles/landingPage.module.css';
import heroImage from 'static/images/hero.svg';

import 'styles/scrollDownButton.css';

const HomeBase = ({ scrollToProjectsView }) => {
  return (
    <section className='relative'>
      <div className={`column flex-center vh-100 ${HomePageHero.background}`}/>
      <div className={HomePageHero.scribble}/>
      <div className={HomePageHero.layout}>
        <h1 className={HomePageHero.titleContainer}>
          <span className={HomePageHero.heroTitle}>Front-end Developer</span>
          <span className={HomePageHero.heroSubTitle}>Hello! My name is Richard and I&apos;m a full-stack web developer.</span>
        </h1>
        <img src={heroImage} alt='hero-image' className={HomePageHero.img} aria-label='scribble-image'/>
      </div>
      <button className='scroll-down' onClick={scrollToProjectsView}/>
    </section>
  );
};

HomeBase.propTypes = {
  scrollToProjectsView: PropTypes.func
};

export default HomeBase;