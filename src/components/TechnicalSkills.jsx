import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'

import { technicalSkills } from '../shared/constants'

const SkillsPage = () => {
  return (
    <div style={{ height: '100%' }}>
      <h2>Technical Skills</h2>
      <ul className='row'>
        {technicalSkills.map(({ label,link }) => (
          <StyledListItem key={label} link={link}>
            {label}
          </StyledListItem>
        ))}
      </ul>
    </div>
  );
};

export default SkillsPage;

const ListItem = ({ link, children, className }) => {
  return (
    <li className={className}>
      <a 
        href={link} 
        target='blank' 
        rel="noopener noreferrer"
        title={link}
      >
        {children} &emsp;
      </a>
    </li>
  );
};

ListItem.propTypes = {
  link: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string
};

const StyledListItem = styled(ListItem)`
  a {
    text-decoration: none
  }
`;

