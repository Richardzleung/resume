import React from 'react';
import styled from 'styled-components';

import '../css/Timeline.css'

const P = styled.p`
  margin-left: 2rem;
  width: 35rem;
  text-align: left;
`;

// eslint-disable-next-line react/prop-types
const TimeLineChild = ({ children }) => (
  <p className='timeline-child'>
    {children}
  </p>
);

const AboutPage = () => (
  <div className='timeline-body'>
    <h3>I am Richard Leung</h3>
    <P>
      Full stack developer at unemployment ville. Not a joke. I&apos;m seriously unemployed and will be updating this once I&apos;m not-hopefully in the near future. 
      I love spending time reading Sci-fi novels, optimizing the small details and learning new things! 
      I also enjoy working in teams and pride myself on my communication skills.
    </P>
      <TimeLineChild data-content='education'>University of California, Davis</TimeLineChild>
      <TimeLineChild data-content='courses'> </TimeLineChild>
      <TimeLineChild data-content='filler'> </TimeLineChild>
  </div>
);

export default AboutPage;