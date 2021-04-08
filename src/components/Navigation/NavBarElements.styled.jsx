import styled from 'styled-components';

// * Small Screen
const StyledBurger = styled.button`
  border: none;
  cursor: pointer;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  width: 2rem;
  z-index: 20;

  div {
    background-color: ${({ open, theme }) => open ? theme.shadow : theme.night};
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

// * Small Screen
const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.base};
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding: 2rem;
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  width: auto;
  z-index: 10;
  a, .navbar-item {
    cursor: pointer;
    font-size: 1.4rem;
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    height: initial;
    right: 0;
    padding: 0;
    transform: translateX(0);
    width: 100%;

    .logo {
      flex: 1;
      color: pink;
      font-size: 2em;
      font-weight: 900;
    }

    a, .navbar-item {
      background: linear-gradient(to right, midnightblue, midnightblue 50%, royalblue 50%);
      background-clip: text;
      background-size: 200% 100%;
      background-position: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: royalblue;
      display: inline-block;
      font-size: 1.3em;
      font-weight: 600;
      letter-spacing: .05rem;
      overflow: hidden;
      padding: .5em;
      transition: background-position 275ms ease;
    }
    a:hover, .navbar-item:hover {
      background-position: 0 100%;
    }
  
    /* a.active, button.active {
      background: black;
      background-clip: text;
      text-decoration: underline;
      text-underline-offset: .35em;
      text-decoration-thickness: 5px;
    } */
  }
`;

export { StyledBurger, StyledMenu }