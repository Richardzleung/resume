import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import IconButton from '@material-ui/core/IconButton';


import native from '../static/images/native.png';
import patientator from '../static/images/patientator.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft: '5rem',
    padding: '2ch',
    flex: '0 1 auto'
  },
  grid: {
    width: 'auto'
  },
  card: {
    marginBottom: '2rem',
    minWidth: 0,
    maxWidth: '40%'
  },
  cardContent: {
    height: '17vh'
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  image: {
    width: '20vw',
    height: '20vh',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    display: 'flex',
    minWidth: 0
  }
}));

const RateReposDependancyList = (props) => (
  <ul {...props}>
    <li>React Native </li>
    <li>React Native Paper</li>
    <li>Formik</li>
    <li>Yup</li>
  </ul>
);

const PatientatorDependancyList = (props) => (
  <ul {...props}>
    <li>Typescript </li>
    <li>Express</li>
    <li>Cors</li>
  </ul>
);

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ image, DependencyList }) => {
  const classes = useStyles();
  return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            // height="210"
            image={image}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h6" component="h2">
              Rate Repository App
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              Make a review your favorite public GitHub repositories
            </Typography>
            <Typography align="left" minWidth={0}>
              <DependencyList className={classes.list}/>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardAction}>
          <IconButton 
              edge='start'
              aria-label='source code' 
              size='medium' 
            >
            <GitHubIcon titleAccess='https://github.com/Richardzleung'  onClick={() => window.open('https://github.com/Richardzleung')}/>
          </IconButton>
          <IconButton 
              edge='start'
              aria-label='live site' 
              size='medium' 
            >
            <WebAssetIcon titleAccess='https://github.com/Richardzleung'  onClick={() => window.open('https://github.com/Richardzleung')}/>
          </IconButton>
        </CardActions>
      </Card>
)};

const ProjectsPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2} minWidth='200rem' className={classes.grid}>
        <Grid container item xl='auto' spacing={3}>
          <ProjectCard image={native} DependencyList={RateReposDependancyList}/>
          <ProjectCard image={patientator} DependencyList={PatientatorDependancyList} />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectsPage;