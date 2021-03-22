import React from 'react'
import styled from 'styled-components';

import Form from '../components/Form/Form'

const Div=styled.div`
  outline: solid;
  width: 500px;
  margin: auto;
  background-color: white;
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