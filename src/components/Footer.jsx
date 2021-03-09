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
  },
  buttonBar: {
    paddingTop: '2.125rem',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  facebook: {
    fontSize: '2.2em',
    color: 'white'
  },
  github: {
    fontSize: '1.90em',
    color: 'white',
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <div className={classes.buttonBar}>
      <IconButton 
        edge='start'
        aria-label='GitHub.com' 
        size='medium' 
      >
        <Tooltip title='Richardzleung' disableTouchListener>
          <GitHubIcon titleAccess='https://github.com/Richardzleung' className={classes.github} onClick={() => window.open('https://github.com/Richardzleung')}/>
        </Tooltip>
      </IconButton>
      <IconButton 
        edge='start' 
        aria-label='Facebook.com'
        size='medium'
      > 
        <Tooltip title='RichardLeung13' disableTouchListener>
          <FacebookIcon titleAccess='https://www.facebook.com/richardleung13' className={classes.facebook} onClick={() => window.open('https://www.facebook.com/richardleung13')}/>
        </Tooltip>
      </IconButton>
    </div>
  </div>
  
)};

export default Footer;