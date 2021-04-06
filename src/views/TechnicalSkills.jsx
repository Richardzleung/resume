import React from 'react';

import { 
  FrontEndSkillsList,
  BackEndSkillsList, 
  MobileSkillsList, 
  DatabaseSkillsList 
} from 'components/Technologies';

const SkillsPage = () => {
  return (
    <div className='vh-100'>
      <h2>Technologies</h2>
      <h3>Front-End</h3>
        <FrontEndSkillsList />
      <h3>Back-End</h3>
        <BackEndSkillsList />
      <h3>Databases</h3>
        <DatabaseSkillsList />
      <h3>Mobile</h3>
        <MobileSkillsList />
    </div>
  );
};

export default SkillsPage;