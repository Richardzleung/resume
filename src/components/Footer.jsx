/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'black',
    marginTop: '2rem',
    minHeight: '10rem',
    scrollBehavior: 'smooth'
  },
  buttonBar: {
    paddingTop: '2.125rem',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  facebook: {
    fontSize: '2.1125em',
    color: 'white',
  },
  github: {
    fontSize: '1.94em',
    color: 'white',
  }
}));

const GitHubButton = ({ styles }) => (
  <IconButton 
    // edge='start'
    aria-label='GitHub.com' 
    size='medium' 
    >
    <Tooltip title='Richardzleung' disableTouchListener>
      <GitHubIcon 
        className={styles} 
        titleAccess='https://github.com/Richardzleung' 
        onClick={() => window.open('https://github.com/Richardzleung')}/>
    </Tooltip>
  </IconButton>
);

const FaceBookButton = ({ styles }) => (
  <IconButton 
    // edge='start' 
    aria-label='Facebook.com'
    size='medium'
  > 
    <Tooltip title='RichardLeung13' disableTouchListener>
      <FacebookIcon
        className={styles} 
        titleAccess='https://www.facebook.com/richardleung13' 
        onClick={() => window.open('https://www.facebook.com/richardleung13')}/>
    </Tooltip>
  </IconButton>
);

const Footer = () => {
  const classes = useStyles();

  return (
  <div className={classes.root} id='footer'>
    <div className={classes.buttonBar}>
      <GitHubButton styles={classes.github}/>
      <FaceBookButton styles={classes.facebook}/>
    </div>
  </div>
  
)};

export default Footer;