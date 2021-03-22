import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton';
import { handles } from '../../shared/constants.jsx';

const useStyles = makeStyles(() => ({
  root: {
    // backgroundColor: 'black',
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

const Footer = () => {
  const classes = useStyles();

  return (
  <div className={classes.root} id='contact'>
    <div className={classes.buttonBar}>
      {handles.map(({ name, link, title, icon }) => (
        <IconButton
          edge='start'
          aria-label={name}
          target='_blank'
          onClick={() => window.open(link)}
          key={name}
        >
          <Tooltip title={title}>
            {icon}
          </Tooltip>
        </IconButton>
      ))}
    </div>
  </div>
  
)};

export default Footer;