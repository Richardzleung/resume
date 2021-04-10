import React, { forwardRef } from 'react';
// import Tilt from 'components/Tilt';
import Card from 'components/Card';
import projectStyles from 'styles/projectsPage.module.css';

const ProjectsPage = forwardRef((props,ref) => (
  <div ref={ref} className='vh-100' {...props}>
    <h3>
      Projects
    </h3>
    <div className={projectStyles.grid}>
      <Card projectID="RATE_REPOSITORIES_APP" className={projectStyles.card}/>
      <Card projectID="PATIENATOR_APP" className={projectStyles.card}/>
    </div>
  </div>
));

ProjectsPage.displayName = 'ProjectsPage'

export default ProjectsPage;