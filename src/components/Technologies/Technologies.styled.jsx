import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { backEndSkills, frontEndSkills, mobileSkills, databaseSkills } from 'shared/constants';

const List = ({ className, array  }) => {
  const listItems = array.map(({ label,link = '', icon = '' }) => 
    <li key={label}>
      <div className='skill-item'>
        {icon}
        <a 
          href={link} 
          target='blank' 
          rel="noopener noreferrer"
          title={link}
        >
          {label} 
        </a>
      </div>
    </li>
  );

  return (
    <ul className={className}>
      {listItems}
    </ul>
  );
};

List.propTypes = {
  array: PropTypes.array,
  className: PropTypes.string,
}

const StyledList = styled(List)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  outline: none;
  width: 100%;

  .skill-item {
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 1.20rem;
    line-height: 1.5em;
    margin-top: 15px;
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


