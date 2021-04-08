import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { handles } from '../../shared/constants';

import useWindowSize from 'hooks/useWindowSize'

const Footer = () => {
  const { isLargishScreen } = useWindowSize();

  return (
    <div id='footer--container'>
      <div className='row space-evenly'>
        {handles.map(({ label, link, title, icon }) => (
          <IconButton
            edge='start'
            aria-label={label}
            target='_blank'
            onClick={() => window.open(link)}
            key={label}
          >
            <div className="tooltip">{icon}
              <div className="tooltip--bottom">
                <p>{title}</p>
              </div>
            </div>
          </IconButton>
        ))}
      </div>
    </div>
)};

export default Footer;