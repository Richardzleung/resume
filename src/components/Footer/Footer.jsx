import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { handles } from '../../shared/constants';

import useWindowSize from 'hooks/useWindowSize'

const useStyles = makeStyles(() => ({
  root: {
    margin: '2em',
    width: '100%',
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  icon: {
    width: '48px',
    height: '48px',
  }
}));

const Footer = () => {
  const classes = useStyles();
  const { isLargishScreen } = useWindowSize();

  return (
    <div className={classes.root} >
      <div className={classes.buttonBar}>
        {handles.map(({ label, link, title, icon }) => (
          <IconButton
            edge='start'
            aria-label={label}
            target='_blank'
            onClick={() => window.open(link)}
            key={label}
          >
            <div className='tooltip'>
              {icon}
              <span className='tooltiptext'>{title}</span>
            </div>
          </IconButton>
        ))}
      </div>
    </div>
)};

export default Footer;