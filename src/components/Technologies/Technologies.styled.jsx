import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { backEndSkills, frontEndSkills, mobileSkills, databaseSkills } from 'shared/constants';

const List = ({ className, array  }) => {
  const listItems = array.map(({ label,link = '', icon = '' }) => 
    <li key={label}>
      {icon}
      <a 
        href={link} 
        target='blank' 
        rel="noopener noreferrer"
        title={link}
      >
        {label} 
      </a>
      &emsp;
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
  flex-direction: row;
  list-style: none;
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


