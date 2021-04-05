import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebAssetIcon from '@material-ui/icons/WebAsset';
import IconButton from '@material-ui/core/IconButton';

import { projects } from '../../shared/constants.js';

const useStyles = makeStyles(() => ({
  card: {
    margin: '1em',
    // maxWidth: '40%'
  },
  image: {
    // width: '20vw',
    // height: '20vh',
  },
}));

// eslint-disable-next-line react/prop-types
const MyCard = ({ projectID }) => {
  const classes = useStyles();
  const { 
    image, 
    dependencies, 
    projectLiveSite,
    gitHubProjectLink,
    title,
    description
  } = projects.find(({ id }) => id === projectID);

  return (
    <Card className={classes.card}>
        <CardActionArea>
          <CardMedia component="img" alt="Contemplative Reptile" image={image} title="project image" />
          <CardContent >
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="caption" color="textSecondary" component="p">
              {description}
            </Typography>
            <RenderDependencyList dependencyList={dependencies}/>
          </CardContent>
        </CardActionArea>
        <CardActions className='row flex-center'>
          <IconButton edge='start' aria-label='source code' size='medium' onClick={() => window.open(gitHubProjectLink)}>
            <GitHubIcon titleAccess={gitHubProjectLink}  />
          </IconButton>
          <IconButton edge='start' aria-label='live site' size='medium' onClick={() => window.open(projectLiveSite)}>
            <WebAssetIcon titleAccess={projectLiveSite}  />
          </IconButton>
        </CardActions>
      </Card>
  )
}

// eslint-disable-next-line react/prop-types
const RenderDependencyList = ({ dependencyList }) => {
  const classes = useStyles();
  // eslint-disable-next-line react/prop-types
  const listItems = dependencyList.map(dependency => 
    <li key={dependency} className={classes.list}>
      {dependency}
    </li>
  );

  return (
    <ul className='row'>
      {listItems}
    </ul>
  )
}

export default MyCard;