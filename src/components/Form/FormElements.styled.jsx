import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    width: 30em;
    margin: 1em;
  }
`;
// TODO style this shit
const Notification = () => (
  <p>Form Submitted</p>
);

export { InputContainer, Notification };