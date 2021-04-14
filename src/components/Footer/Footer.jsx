import React from 'react';
import { handles } from '../../shared/constants';
import Button from './FooterElements';

const Footer = () => {
  return (
    <div id='footer--container'>
      <div className='row space-evenly'>
        {handles.map(({ label, link, title, icon }) => (
          <Button
            edge='start'
            aria-label={label}
            target='_blank'
            onClick={() => window.open(link)}
            key={label}
          >
            {icon}
          </Button>
        ))}
      </div>
    </div>
)};

export default Footer;