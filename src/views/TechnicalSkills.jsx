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
        <h2>Technologies</h2>
        <h3>Front-End</h3>
        <FrontEndSkillsList/>
        <h3>Back-End</h3>
        <BackEndSkillsList/>
        <h3>Databases</h3>
        <DatabaseSkillsList/>
        <h3>Mobile</h3>
        <MobileSkillsList/>
      </div>
    );
  }
  const isFrontEndDisplayActive = skillToDisplay === 'front-end';
  const isBackEndDisplayActive = skillToDisplay === 'back-end';
  const isDatbaseDisplayActive = skillToDisplay === 'database';
  const isMobileDisplayActive = skillToDisplay === 'mobile';

  // * For larger views--display skills via button
  return (
    <div className='vh-50 column flex-col-center-X technology--container'>
      <h1>Technologies</h1>
      <div className='hide-on-small-screen' role='tablist'>
        <Button onClick={() => setSkillToDisplay('front-end')}>Front-End</Button>
        <Button onClick={() => setSkillToDisplay('back-end')}>Back-End</Button>
        <Button onClick={() => setSkillToDisplay('database')}>Databases</Button>
        <Button onClick={() => setSkillToDisplay('mobile')}>Mobile</Button>
      </div>
      {isFrontEndDisplayActive && <FrontEndSkillsList />}
      {isBackEndDisplayActive && <BackEndSkillsList />}
      {isDatbaseDisplayActive && <DatabaseSkillsList />}
      {isMobileDisplayActive && <MobileSkillsList />}
    </div>
  );
};

export default SkillsPage;