import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import { backEndSkills, frontEndSkills, mobileSkills, databaseSkills } from 'shared/constants';

const List = ({ className, array, on='',...props }) => {
  const nodeRef = useRef(null)
  return(
    <CSSTransition
      in={on}
      classNames='techTransitions'
      timeout={500}
      nodeRef={nodeRef}
    >
      <>
      {on && 
      <ul className={className} {...props} ref={nodeRef} >
        {array.map(({ label,link ='add link', icon }, i) => 
        // i know this index is technically bad for keys but i ain't modifying the array so its ok
          <li key={i} >
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
      }
      </>
    </CSSTransition>
)};

List.propTypes = {
  array: PropTypes.array,
  className: PropTypes.string,
  on: PropTypes.bool
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

const FrontEndSkillsList = props => <StyledList array={frontEndSkills} {...props}/>
const BackEndSkillsList = props => <StyledList array={backEndSkills} {...props}/>
const MobileSkillsList =  props => <StyledList array={mobileSkills} {...props}/>
const DatabaseSkillsList = props => <StyledList array={databaseSkills} {...props}/>

export { 
  FrontEndSkillsList, 
  BackEndSkillsList, 
  MobileSkillsList, 
  DatabaseSkillsList 
}


