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
        <FrontEndSkillsList on={true}/>
        <h3>Back-End</h3>
        <BackEndSkillsList on={true}/>
        <h3>Databases</h3>
        <DatabaseSkillsList on={true}/>
        <h3>Mobile</h3>
        <MobileSkillsList on={true}/>
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
        <Button isSelected={isFrontEndDisplayActive} onClick={() => setSkillToDisplay('front-end')}>Front-End</Button>
        <Button isSelected={isBackEndDisplayActive} onClick={() => setSkillToDisplay('back-end')}>Back-End</Button>
        <Button isSelected={isDatbaseDisplayActive} onClick={() => setSkillToDisplay('database')}>Databases</Button>
        <Button isSelected={isMobileDisplayActive} onClick={() => setSkillToDisplay('mobile')}>Mobile</Button>
      </div>
      <FrontEndSkillsList on={isFrontEndDisplayActive}/>
      <BackEndSkillsList on={isBackEndDisplayActive}/>
      <DatabaseSkillsList on={isDatbaseDisplayActive}/>
      <MobileSkillsList on={isMobileDisplayActive}/>
    </div>
  );
};

export default SkillsPage;