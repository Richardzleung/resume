import React from 'react';
import styled from 'styled-components';

import '../css/Timeline.css'

const P = styled.p`
  margin-left: 2rem;
  width: 35rem;
  text-align: left;
`;

const AboutPage = () => (
  <div className='timeline-body'>
    <h3>I am Richard Leung</h3>
    <P>Full stack developer at unemployment ville. Not a joke. I&apos;m seriously unemployed and will be updating this once I&apos;m not-hopefully in the near future. 
      I love spending time reading Sci-fi novels, optimizing the small details and learning new things! 
      I also enjoy working in teams and pride myself on my communication skills.
    </P>
    <div className='timeline-container'>
      <p className='timeline-child' data-content='education'> 
        <ul>
          University of California, Davis
        </ul>
      </p>
      <p className='timeline-child' data-content='courses'>Shoober shooberino adorable doggo many pats, heckin good boys many pats pupper wrinkler, corgo maximum borkdrive. A frighten puggo wow very biscit.</p>
      <p className='timeline-child' data-content='filler'>Big ol h*ck adorable doggo vvv smol borking doggo with a long snoot for pats big ol, he made many woofs doing me a frighten puggo wow very biscit, ruff fat boi ruff long doggo. </p>
      <p className='timeline-child'>Long bois mlem I am bekom fat wrinkler puggo maximum borkdrive big ol pupper I am bekom fat, fluffer vvv adorable doggo lotsa pats snoot. I am bekom fat ur givin me a spook length boy wow very biscit very good spot.</p>
      <p className='timeline-child'>Doggo ipsum long bois lotsa pats blep. What a nice floof ruff super chub very good spot, the neighborhood pupper lotsa pats. Borkdrive shibe shoober what a nice floof, borking doggo.</p>
    </div>
  </div>
);

export default AboutPage;