import React, { forwardRef } from 'react';

import Card from 'components/Card';
import projectStyles from 'styles/projectsPage.module.css';
import { projects } from 'shared/constants';

const ProjectsPage = forwardRef((props,ref) => (
  <section ref={ref} className={`vh-100 ${projectStyles.container}`} {...props}>
    <h2 className={projectStyles.header}>
      Projects
    </h2>
    <div className='row space-evenly'>
      {projects.map(({ id, description, title, image, src, dependencies }) => (
        <Card image={image ? image : src} key={id}>
          <Card.Content >
            <Card.Title >
              {title}
            </Card.Title> 
            <Card.Body>
              {description}
              <ul style={{ listStylePosition: 'inside' }}>
                {dependencies.map((dependency, i) => (
                  <li key={i}>
                    {dependency}
                  </li>
                ))}
              </ul>
            </Card.Body> 
            <Card.Button/>
          </Card.Content>
        </Card>
      ))}
    </div>
  </section>
));

ProjectsPage.displayName = 'ProjectsPage'

export default ProjectsPage;