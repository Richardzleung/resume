import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import HomePageHero from 'styles/landingPage.module.css';
import scribble from 'static/images/3.svg';
import { CSSTransition } from 'react-transition-group';

// TODO get this animation working
const HomeBase = ({ scrollToProjectsView }) => {
  const scrollbtnRef = useRef();
  return (
    <section className='vh-100 grid--col' >
      <div className={HomePageHero.background}/>
      <img src={scribble} className={HomePageHero.scribble} alt='scribble-img'/>
      <h1 className={HomePageHero.titleContainer}>
        <span className={HomePageHero.heroTitle}>Front-end Developer</span>
        <span className={HomePageHero.heroSubTitle}>Hello! My name is Richard and I&apos;m a full-stack web developer.</span>
      </h1>
      <CSSTransition in={true} timeout={400} nodeRef={scrollbtnRef} classNames={{
        appear: HomePageHero.btnAppear,
        appearActive: HomePageHero.btnAppearActive,
        appearDone: HomePageHero.btnAppearDone,
        enter: HomePageHero.btnAppear,
        enterActive: HomePageHero.btnAppearActive,
        enterDone: HomePageHero.btnAppearDone
      }} appear={true}>
        <div ref={scrollbtnRef}>
          <button className='scroll-down' aria-label='scroll-down-btn' onClick={scrollToProjectsView}/>
        </div>
      </CSSTransition>
    </section>
  );
};

HomeBase.propTypes = {
  scrollToProjectsView: PropTypes.func
};

export default HomeBase;