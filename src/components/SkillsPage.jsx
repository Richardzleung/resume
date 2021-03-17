import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
  display: flex;
`;
const A = styled.a`
  text-decoration: none;
`;

// Modular function to reduce repeptive props
// eslint-disable-next-line react/prop-types
const Link = ({ href, skill }) => (
  <li>
    <A 
      href={href} 
      target='blank' 
      rel="noopener noreferrer"
      title={href}
    >
      {skill}
    </A>
  </li>
);

// TODO fix urls
const SkillsPage = () => (
  <List>
    <Link href='https://github.com/Richardzleung/resume' skill='Javascript' />
    <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part9/patientator-fullstack' skill='Typescript' />
    <Link href='https://github.com/Richardzleung/resume' skill='CSS' />
    <Link href='https://github.com/Richardzleung/resume' skill='HTML5' />
    <Link href='https://github.com/Richardzleung/resume' skill='React' />
    <Link href='https://github.com/Richardzleung/Fullstack-Open/blob/master/part6/anecdotes-redux' skill='Redux' />
    <Link href='https://github.com/Richardzleung/rate-repository-app' skill='React Native' />
    <Link href='https://www.codewars.com/users/Richardzleung' skill='Data structures & Algorithms' />
    <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part5' skill='Test Driven Development' />
    <Link href='https://github.com/Richardzleung/Fullstack-Open/tree/master/part5' skill='MongoDB' />
  </List>
);

export default SkillsPage;

