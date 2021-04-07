import React from 'react';

const AboutPage = React.forwardRef((props, ref) => (
  <div className='vh-100 column flex-center' ref={ref}>
    <h3>I am Richard Leung</h3>
    <p>
      Full stack developer at unemployment ville. Not a joke. I&apos;m seriously unemployed and will be updating this once I&apos;m not-hopefully in the near future. 
      I love spending time reading Sci-fi novels, optimizing the small details and learning new things! 
      I also enjoy working in teams and pride myself on my communication skills.
    </p>
  </div>
));

AboutPage.displayName = 'AboutPage';

export default AboutPage;