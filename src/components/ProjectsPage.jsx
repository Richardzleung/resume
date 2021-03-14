import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import IconButton from '@material-ui/core/IconButton';


import native from '../static/images/native.png';
import patientator from '../static/images/patientator.png'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginLeft: '5rem',
    padding: '2ch'
  },
  card: {
    margin: '1em',
    maxWidth: '40%'
  },
  image: {
    width: '20vw',
    height: '20vh',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    display: 'flex'
  }
}));

const RateReposDependancyList = props => {
  const dependencies = ['React Native', 'Formik', 'Yup'];
  const listItems = dependencies.map((dependency) => 
    <li key={dependency}>{dependency}</li>
  );
  return(
    <ul {...props}>
      {listItems}
    </ul>
  );
};

const PatientatorDependancyList = props => {
  const dependencies = ['Typescript', 'Express', 'Cors'];
  const listItems = dependencies.map((dependency) => 
    <li key={dependency}>{dependency}</li>
  );
  return(
    <ul {...props}>
      {listItems}
    </ul>
  );
};

const ProjectCard = ({ image, gitHubProjectLink, DependencyList, projectLiveSite }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" alt="Contemplative Reptile" image={image} title="project image" />
        <CardContent >
          <Typography gutterBottom variant="h6" component="h2">
            Rate Repository App
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            Make a review your favorite public GitHub repositories
          </Typography>
          <DependencyList className={classes.list}/>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <IconButton edge='start' aria-label='source code' size='medium' onClick={() => window.open(gitHubProjectLink)}>
          <GitHubIcon titleAccess={gitHubProjectLink}  />
        </IconButton>
        <IconButton edge='start' aria-label='live site' size='medium' onClick={() => window.open(projectLiveSite)}>
          <WebAssetIcon titleAccess={projectLiveSite}  />
        </IconButton>
      </CardActions>
    </Card>
)};

ProjectCard.propTypes = {
  gitHubProjectLink: PropTypes.string.isRequired,
  projectLiveSite: PropTypes.string.isRequired,
  DependencyList: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired
}

const ProjectsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} >
        <Grid container item xl='auto' spacing={3}>
          <ProjectCard 
            image={native} 
            DependencyList={RateReposDependancyList} 
            gitHubProjectLink='https://github.com/Richardzleung/rate-repository-app'
            projectLiveSite='https://stormy-plains-60070.herokuapp.com'
          />
          <ProjectCard 
            image={patientator} 
            DependencyList={PatientatorDependancyList} 
            gitHubProjectLink='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack'
            projectLiveSite='https://mighty-fjord-81735.herokuapp.com'
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsPage;