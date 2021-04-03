import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton';
import { handles } from '../../shared/constants';

import useWindowSize from '../../hooks/useWindowSize'

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
    marginTop: '2rem',
    minHeight: '10rem',
    position: 'absolute',
    width: '100%',
    bottom: 0
  },
  buttonBar: {
    paddingTop: '2.125rem',
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
  const { width } = useWindowSize();

  const isSmallScreen = width < 768;

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
            <Tooltip title={isSmallScreen ? '' : title} disableFocusListener >
              <SvgIcon fontSize='large' className={classes.icon}>
                <path d={icon} />
              </SvgIcon>
            </Tooltip>
            
          </IconButton>
        ))}
      </div>
    </div>
)};

export default Footer;