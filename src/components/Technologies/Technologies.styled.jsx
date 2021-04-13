import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { backEndSkills, frontEndSkills, mobileSkills, databaseSkills } from 'shared/constants';

const List = ({ className, array  }) => (
  <ul className={className}>
    {array.map(({ label,link = '', icon = '' }) => 
    <li key={label}>
        <a 
          href={link} 
          target='blank' 
          rel="noopener noreferrer"
          title={link}
          className='skill-item'
        >
          {icon}
          {label} 
        </a>
    </li>
    )}
  </ul>
);

List.propTypes = {
  array: PropTypes.array,
  className: PropTypes.string,
}

const StyledList = styled(List)`
  background-color: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  outline: none;
  padding: 0 1em;
  width: 90%;

  li {
    flex: 1 1 50%;

    a {
      display: grid;
      height: 5rem;
      font-size: 1.20rem;
      line-height: 1.5em;
      margin-top: 2em;
      padding: 0 .5em;
      place-items: center;
      text-decoration: none;
      width:auto;
    }
  }
  
  

  // * largish screen
  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    li {
      flex: 0 1 auto;
    
    }
  }
`;

const FrontEndSkillsList = () => <StyledList array={frontEndSkills}/>

const BackEndSkillsList = () => <StyledList array={backEndSkills}/>

const MobileSkillsList =  () => <StyledList array={mobileSkills}/>

const DatabaseSkillsList = () => <StyledList array={databaseSkills}/>

export { 
  FrontEndSkillsList, 
  BackEndSkillsList, 
  MobileSkillsList, 
  DatabaseSkillsList 
}


