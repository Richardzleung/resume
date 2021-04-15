import React from 'react';
import webdeveloper from 'static/images/web-developer.svg';

const AboutPage = React.forwardRef((props, ref) => (
  <div className='vh-50 column flex-center' ref={ref}>
    <h2 className='about--header' >I am Richard Leung</h2>
    <div className='row flex-center-XY about--content'>
      <img src={webdeveloper} alt='web developer image' id='web-developer--image'/>
      <p className='about--text-content'>
        Full stack developer at unemployment ville. Not a joke. I&apos;m seriously unemployed and will be updating this once I&apos;m not-hopefully in the near future. 
        I love spending time reading Sci-fi novels, optimizing the small details and learning new things! 
        I also enjoy working in teams and pride myself on my communication skills.
      </p>
    </div>
  </div>
));

AboutPage.displayName = 'AboutPage';

export default AboutPage;