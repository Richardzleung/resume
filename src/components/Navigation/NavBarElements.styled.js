import styled from 'styled-components';

const StyledBurger = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  width: 2rem;
  z-index: 20;

  div {
    background-color: ${({ theme }) => theme.night};
    border-radius: 10px;
    height: 0.25rem;
    margin: 0.25rem;
    transform-origin: 4.65px;
    transition: opacity 0.3s ease;
    transition: transform 0.3s ease;
    width: 2rem;

    &:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => open ? 0 : 1};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  // * Not so small screen
  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    display: none;
  }
`;

// * Small Screen default
const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.base};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  padding: 0 2rem 2rem;
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  scroll-padding: 1rem 0 0 0;
  width: auto;
  z-index: 10;

  button {
    border: 0;
    background-color: inherit;
  }

  a, button, span{
    cursor: pointer;
    font: inherit;
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 800;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.indigo};
    text-align: left;
    text-decoration: none;
    transition: color 0.3s linear;
  }
  

  // * largish Screen
  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    /* background-color: hsl(240, 100%, 70%); */
    background-color: initial;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    min-height: initial;
    right: 0;
    padding: .25rem;
    transform: translateX(0);
    width: 100%;

    a, span {
      background: linear-gradient(to right, midnightblue, midnightblue 50%, white 50%);
      background-clip: text;
      background-size: 200% 100%;
      background-position: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      font-size: 1.3rem;
      font-weight: 600;
      letter-spacing: .05em;
      overflow: hidden;
      padding: .5em;
      transition: background-position 275ms ease;
    }
    a:hover, span:hover {
      background-position: 0 100%;
    }
    button {
      padding: 0;
    }
  }
`;

export { StyledBurger, StyledMenu }