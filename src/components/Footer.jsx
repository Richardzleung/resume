import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import CopyrightIcon from '@material-ui/icons/Copyright';
import FacebookIcon from '@material-ui/icons/Facebook';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'grey',
    minHeight: '13rem'
  },
  buttonBar: {
    paddingTop: '2.125rem',
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  facebook: {
    fontSize: '2em'
  },
  github: {
    fontSize: '1.85em'
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '3.25rem',
  },
  copywrite: {
    color: 'red',
  },
  copywriteIcon: {
    verticalAlign: 'middle',
    fontSize: 'large',
    marginBottom: '.25rem'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
  <div className={classes.root}>
    <div className={classes.buttonBar}>
      <IconButton 
        edge='start'
        color='inherit' 
        aria-label='GitHub.com' 
        size='medium' 
      >
        <GitHubIcon className={classes.github} onClick={() => window.open('https://github.com/Richardzleung')}/>
      </IconButton>
      <IconButton 
        edge='start' 
        color='inherit' 
        aria-label='Facebook.com'
        size='medium'
      >
        <FacebookIcon className={classes.facebook} onClick={() => window.open('https://www.facebook.com/richardleung13')}/>
      </IconButton>
    </div>
    <Typography className={classes.name} variant='subtitle1'>
      Richard Leung <span className={classes.copywrite}><CopyrightIcon className={classes.copywriteIcon}/> 2021 </span>
    </Typography>
  </div>
  
)};

export default Footer;