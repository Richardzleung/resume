import React from 'react';
import styled from 'styled-components';

import { technicalSkills } from '../shared/constants'

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;
const A = styled.a`
  text-decoration: none;
`;

// Modular function to reduce repeptive props
// eslint-disable-next-line react/prop-types
const SkillItem = ({ link, skill }) => {
  return (
    <li >
      <A 
        href={link} 
        target='blank' 
        rel="noopener noreferrer"
        title={link}
      >
        {skill} &emsp;
      </A>
    </li>
  );
};

// TODO fix urls

const SkillsPage = () => {

  return (
  <div>
    <h2>Technical Skills</h2>
    <List >
      {technicalSkills.map(({ label,link }) => (
        <SkillItem key={label} skill={label} link={link}/>
      ))}
    </List>
  </div>
  );
};

export default SkillsPage;

