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
      <VanillaCard image={nativeProject}>
        <VanillaCard.Content>
          <VanillaCard.Title>
            Patientator
          </VanillaCard.Title> 
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis assumenda explicabo dolores fugit nemo, natus est at ducimus illum facere esse perspiciatis sint illo. Eligendi.
          <VanillaCard.Button/>
        </VanillaCard.Content>
      </VanillaCard>

      <VanillaCard image={rateApp}>
        <VanillaCard.Content>
          <VanillaCard.Title>
            Rate Repository App
          </VanillaCard.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus quasi explicabo alias, dicta doloribus?
          <VanillaCard.Button/>
        </VanillaCard.Content>
      </VanillaCard>

      <VanillaCard image={spotifyClone}>
        <VanillaCard.Content>
          <VanillaCard.Title>
            Spotify Redesign
          </VanillaCard.Title>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusamus quasi explicabo alias, dicta doloribus?
          <VanillaCard.Button/>
        </VanillaCard.Content>
      </VanillaCard>

    </div>
  </div>
));

ProjectsPage.displayName = 'ProjectsPage'

export default ProjectsPage;