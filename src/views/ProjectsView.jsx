import React, { forwardRef } from 'react';
import Grid from '@material-ui/core/Grid';

import Card from 'components/Card'

const ProjectsPage = forwardRef((props,ref) => (
  <div ref={ref} className='vh-100' {...props}>
    <h2 style={{
      textAlign: 'left'
    }}>
      Projects
    </h2>
    <div
      style={{
        flexGrow: 1,
        marginLeft: '5rem',
        padding: '2ch'
      }}
    >
    <Grid container spacing={2} >
      <Grid container item xl='auto' spacing={3}>
        <Card projectID="RATE_REPOSITORIES_APP"/>
        <Card projectID="PATIENATOR_APP"/>
      </Grid>
    </Grid>
    </div>
  </div>
));

ProjectsPage.displayName = 'ProjectsPage'

export default ProjectsPage;