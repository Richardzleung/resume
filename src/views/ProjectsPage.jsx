import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '../components/Card/Card'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginLeft: '5rem',
    padding: '2ch'
  },
}));

const ProjectsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} >
        <Grid container item xl='auto' spacing={3}>
          <Card projectID="RATE_REPOSITORIES_APP"/>
          <Card projectID="PATIENATOR_APP"/>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsPage;