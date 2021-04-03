import React from 'react'
import styled from 'styled-components';

import Form from '../components/Form/Form'

const Div=styled.div`
  width: 100%;
  margin: 5rem auto;
  background-color: white;
  z-index: -1;
`;

const ContactPage = () => {
  return (
    <Div>
      <h1>Contact</h1>
      <p>Have a question or want to work together?</p>
      <Form />
    </Div>
  );
};

export default ContactPage;