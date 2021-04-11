import React from 'react';
import HomePageHero from 'styles/landingPage.module.css';
import heroImage from 'static/images/hero.svg';

const HomeBase = () => {
  return (
    <>
      <div className={`column flex-center vh-100 ${HomePageHero.background}`}/>
      <div className={HomePageHero.scribble}/>
      <div className={HomePageHero.layout}>
        <section className='relative'>
          <h1 className={`center ${HomePageHero.titleContainer}`}>
            <span className={HomePageHero.heroTitle}>Front-end Developer</span>
            <span className={HomePageHero.heroSubTitle}>Hello! My name is Richard and I&apos;m a full-stack web developer.</span>
          </h1>
        </section>
        <img src={heroImage} alt='hero-image' className={HomePageHero.img}/>
      </div>
    </>
  );
};

export default HomeBase;