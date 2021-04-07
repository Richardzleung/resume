import React, { useState } from 'react';

import { 
  FrontEndSkillsList,
  BackEndSkillsList, 
  MobileSkillsList, 
  DatabaseSkillsList 
} from 'components/Technologies';

const SkillsPage = () => {
  const [skillToDisplay, setSkillToDisplay] = useState('front-end');

  return (
    <div className='vh-100 column flex-col-center-X'>
      <h1>Technologies</h1>
      <div>
        <button onClick={() => setSkillToDisplay('front-end')}>Front-End</button>
        <button onClick={() => setSkillToDisplay('back-end')}>Back-End</button>
        <button onClick={() => setSkillToDisplay('database')}>Databases</button>
        <button onClick={() => setSkillToDisplay('mobile')}>Mobile</button>
      </div>
      
      {skillToDisplay === 'front-end' && <FrontEndSkillsList />}
      {skillToDisplay === 'back-end' && <BackEndSkillsList />}
      {skillToDisplay === 'database'&& <DatabaseSkillsList />}
      {skillToDisplay === 'mobile' && <MobileSkillsList />}
    </div>
  );
};

export default SkillsPage;