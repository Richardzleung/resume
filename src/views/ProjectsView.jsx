import React, { forwardRef } from 'react';
import VanillaCard from 'components/Card';
import projectStyles from 'styles/projectsPage.module.css';
import nativeProject from '../static/images/patientator/patientator.png';
import rateApp from '../static/images/rate-repository-thumbnail.svg';
import spotifyClone from '../static/images/spotify-clone.png';



const ProjectsPage = forwardRef((props,ref) => (
  <div ref={ref} className='vh-100 project--container' {...props}>
    <h3 className='project--header'>
      Projects
    </h3>
    <div className={projectStyles.grid}>
      {/* <Card projectID="RATE_REPOSITORIES_APP" className={projectStyles.card}/> */}
      <VanillaCard image={nativeProject}>
        <VanillaCard.Title>
          Patientator
        </VanillaCard.Title>
        <VanillaCard.Content>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis assumenda explicabo dolores fugit nemo, natus est at ducimus illum facere esse perspiciatis sint illo. Eligendi.
        </VanillaCard.Content>
        <VanillaCard.Button>
          Learn More
        </VanillaCard.Button>
      </VanillaCard>
      <VanillaCard image={rateApp}>
        <VanillaCard.Title>
          Rate Repository App
        </VanillaCard.Title>
        <VanillaCard.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus quasi explicabo alias, dicta doloribus?
        </VanillaCard.Content>
        <VanillaCard.Button>
          Learn More
        </VanillaCard.Button>
      </VanillaCard>
      <VanillaCard image={spotifyClone}>
        <VanillaCard.Title>
          Spotify Redesign
        </VanillaCard.Title>
        <VanillaCard.Content>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus quasi explicabo alias, dicta doloribus?
        </VanillaCard.Content>
        <VanillaCard.Button>
          Learn More
        </VanillaCard.Button>
      </VanillaCard>
    </div>
  </div>
));

ProjectsPage.displayName = 'ProjectsPage'

export default ProjectsPage;