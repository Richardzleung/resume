import React, { useState } from 'react';
import useWindowSize from 'hooks/useWindowSize';
import Button from 'components/TechButton';

import { 
  FrontEndSkillsList,
  BackEndSkillsList, 
  MobileSkillsList, 
  DatabaseSkillsList 
} from 'components/Technologies';

const SkillsPage = () => {
  const [skillToDisplay, setSkillToDisplay] = useState('front-end');
  const { isLargishScreen } = useWindowSize();

  // * Mobile view-- display all skills
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
  const isFrontEndDisplayActive = skillToDisplay === 'front-end';
  const isBackEndDisplayActive = skillToDisplay === 'back-end';
  const isDatbaseDisplayActive = skillToDisplay === 'database';
  const isMobileDisplayActive = skillToDisplay === 'mobile';

  // * For larger views--display skills via button
  return (
    <div className='vh-50 column flex-col-center-X' id='technology--container'>
      <h1>Technologies</h1>
      <div className='hide-on-small-screen'>
        <Button isSelected={isFrontEndDisplayActive} onClick={() => setSkillToDisplay('front-end')}>Front-End</Button>
        <Button isSelected={isBackEndDisplayActive} onClick={() => setSkillToDisplay('back-end')}>Back-End</Button>
        <Button isSelected={isDatbaseDisplayActive} onClick={() => setSkillToDisplay('database')}>Databases</Button>
        <Button isSelected={isMobileDisplayActive} onClick={() => setSkillToDisplay('mobile')}>Mobile</Button>
      </div>
      {isFrontEndDisplayActive && <FrontEndSkillsList />}
      {isBackEndDisplayActive && <BackEndSkillsList />}
      {isDatbaseDisplayActive && <DatabaseSkillsList />}
      {isMobileDisplayActive && <MobileSkillsList />}
    </div>
  );
};

export default SkillsPage;