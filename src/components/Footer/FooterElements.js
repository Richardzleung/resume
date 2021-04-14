import styled from 'styled-components'

const Button = styled.button`
  background-color: inherit;
  border: 0;
  cursor: pointer;
  margin-top: 1rem;

  &:focus {
    outline: 3px solid #CC5500;
    outline-offset: 5px;
  }
`;

export default Button;