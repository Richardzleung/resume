import React from 'react';
import HomePageHero from 'styles/landingPage.module.css';

const HomeBase = () => {
  return (
    <div className={HomePageHero.layout}>
      <section className='relative'>
        <div className={`column flex-center vh-100 ${HomePageHero.background}`}/>
        <h1 className={`center ${HomePageHero.titleContainer}`}>
          <span className={HomePageHero.heroTitle}>Front-end Developer</span>
          <span className={HomePageHero.heroSubTitle}>Hello! My name is Richard and I&apos;m a full-stack web developer.</span>
        </h1>
        <div className={HomePageHero.scribble}/>
      </section>
      <div className={HomePageHero.heroImg}/>
    </div>
  );
};

export default HomeBase;