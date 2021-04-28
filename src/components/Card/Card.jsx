import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { FiGithub, FiExternalLink } from "react-icons/fi";
import IconButton from '@material-ui/core/IconButton';

import { projects } from 'shared/constants.js';
import projectStyles from 'styles/projectsPage.module.css';

// eslint-disable-next-line react/prop-types
const MyCard = ({ projectID, ...props }) => {
  const { 
    image = 'image missing', 
    dependencies = 'dependency missing', 
    projectLiveSite = 'link missing',
    gitHubProjectLink = 'link missing',
    title = 'title missing',
    description = 'description missing',
    srcset='',
    src =''
  } = projects.find(({ id }) => id === projectID);

  return (
    <Card {...props}>
        <CardActionArea>
          <CardMedia 
            className={projectStyles.thumbnail}
            component="img" 
            alt={title}
            image={image} 
            loading='lazy'
            sizes='(max-width: 1080px) 100vw, 1080px'
            srcSet={srcset}
            src={src}
          />
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
            <FiGithub />
          </IconButton>
          <IconButton edge='start' aria-label='live site' size='medium' onClick={() => window.open(projectLiveSite)}>
            <FiExternalLink />
          </IconButton>
        </CardActions>
      </Card>
  )
}

const RenderDependencyList = ({ dependencyList }) => (
  <ul className='row'>
    {dependencyList.map(dependency => 
      <li key={dependency} className='dependency--item'>
        {dependency}
      </li>
      )}
  </ul>
);

RenderDependencyList.propTypes = {
  dependencyList: PropTypes.array.isRequired
};

export default MyCard;