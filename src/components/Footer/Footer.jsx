import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton';
import { handles } from '../../shared/constants';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: 'white',
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
  },
  icon: {
    width: '48px',
    height: '48px',
    // viewBox: "0 0 24 24"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id='contact'>
      <div className={classes.buttonBar}>
        {handles.map(({ label, link, title, icon }) => (
          <IconButton
            edge='start'
            aria-label={label}
            target='_blank'
            onClick={() => window.open(link)}
            key={label}
          >
            <Tooltip disableFocusListener disableTouchListener title={title}>
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