import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import { backEndSkills, frontEndSkills, miscSkills, databaseSkills } from 'shared/constants';

// * renders the list
const List = ({ className, array, ...props }) => (
  <ul className={className} {...props} >
    {array.map(({ label, icon, style }, i) => (
    // i know this index is technically bad for keys but i ain't modifying the array so its ok
      <li key={i} style={style}>
        {icon}
        {label}
      </li>
    ))}
  </ul>
);

List.propTypes = {
  array: PropTypes.array,
  className: PropTypes.string,
  on: PropTypes.bool
}

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform:translateY(0px)
  }
`;

const StyledList = styled(List)`
  background-color: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style: none;
  outline: none;
  padding: 1rem 1rem 2rem;
  width: 90%;

  li {
    flex: 1 1 40%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: .75ch;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }
  // * largish screen
  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    position: relative;
    top: 2.75rem;

    li {
      flex: 0 1 auto;
      animation: ${appear} 1000ms backwards ease-out;
      padding-bottom:3rem;
    }
  }
`;

//* lists with each array passed in
const FrontEndSkillsList = props => <StyledList array={frontEndSkills} {...props}/>
const BackEndSkillsList = props => <StyledList array={backEndSkills} {...props}/>
const MiscSkillsList =  props => <StyledList array={miscSkills} {...props}/>
const DatabaseSkillsList = props => <StyledList array={databaseSkills} {...props}/>

export { 
  FrontEndSkillsList, 
  BackEndSkillsList, 
  MiscSkillsList, 
  DatabaseSkillsList 
}


