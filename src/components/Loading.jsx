import styled, { keyframes } from 'styled-components';

const smallBoxAnim = keyframes`
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(0.75);
  }
`;

const loaderAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const Loading = styled.div`
  width: 3em;
  height: 3em;
  display: grid;
  place-items: center;
  animation: ${loaderAnim} 1.25s infinite ease-in-out;
  position: relative;
  top: 50vh;
  left: 50vw;
  outline: 1px solid transparent;
  &::before {
    content: '';
    height: 3em;
    width: 3em;
    background-color: ${({ theme }) => theme.night};
    outline: 1px solid transparent;
    position: fixed;
  }
  &::after {
    content: '';
    height: 3em;
    width: 3em;
    background-color: ${({ theme }) => theme.lightBlush};
    position: fixed;
    z-index: 1;
    outline: 1px solid transparent;
    animation: ${smallBoxAnim} 1.25s alternate infinite ease-in-out;
  }
`;

export default Loading;