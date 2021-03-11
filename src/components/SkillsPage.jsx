import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  display: flex;
`;
const A = styled.a`
  text-decoration: none;
`;

// Modular function to reduce repeptive code: target, rel, title
// eslint-disable-next-line react/prop-types
const Link = ({ href, link }) => (
  <li>
    <A 
      href={href} 
      target='blank' 
      rel="noopener noreferrer"
      title={href}
    >
      {link}
    </A>
  </li>
);
// TODO fix urls
const SkillsPage = () => (
  <div>
    <List>
      <Link href='https://github.com/Richardzleung/resume' link='Javascript' />
      <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' link='Typescript' />
      <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' link='CSS' />
      <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' link='HTML5' />
      <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' link='React' />
      <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' link='React Native' />
      <Link href='https://www.codewars.com/users/Richardzleung' link='Data structures & Algorithms' />
      <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' link='Test Driven Development' />
      <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' link='NoSQL' />
    </List>
  </div> 
);

export default SkillsPage;

