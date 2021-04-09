import React from 'react';
import HomePageHero from 'styles/landingPage.module.css';

const HomeBase = () => {
  return (
    <section>
      <div className={`column flex-center vh-100 ${HomePageHero.background}`}/>
      <div className='center'>
        <h1 className={HomePageHero.titleContainer}>
          <div className={HomePageHero.scribble}/>
          <span className={HomePageHero.heroTitle}>Front-end Developer</span>
          <span className={HomePageHero.heroSubTitle}>Hello! My name is Richard and I&apos;m a full-stack web developer.</span>
        </h1>
      </div>
    </section>
  );
};

export default HomeBase;