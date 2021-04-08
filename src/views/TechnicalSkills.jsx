import React, { useState } from 'react';
import useWindowSize from 'hooks/useWindowSize';

import { 
  FrontEndSkillsList,
  BackEndSkillsList, 
  MobileSkillsList, 
  DatabaseSkillsList 
} from 'components/Technologies';

const SkillsPage = () => {
  const [skillToDisplay, setSkillToDisplay] = useState('front-end');
  const { isLargishScreen } = useWindowSize();

  // * For mobile views
  if(!isLargishScreen) {
    return (
      <div className='vh-100 column flex-col-center-X'>
        <h1>Technologies</h1>
        <h2>Front-End</h2>
        <FrontEndSkillsList />
        <h2>Back-End</h2>
        <BackEndSkillsList />
        <h2>Databases</h2>
        <DatabaseSkillsList />
        <h2>Mobile</h2>
        <MobileSkillsList />
      </div>
    );
  }
  // * For larger views
  return (
    <div className='vh-100 column flex-col-center-X'>
      <h1>Technologies</h1>
      <div className='hide-on-small-screen'>
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