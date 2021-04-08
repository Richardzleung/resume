import styled from 'styled-components';

const InputContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    width: 30em;
    margin: 1em;
  }
`;

export { InputContainer };