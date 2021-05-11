import styled from 'styled-components';

// got this from jonathon suh
const StyledBurger = styled.button`
  --hamburger-layer-spacing: .25rem;
  --hamgburger-width: 2rem;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: inline-block;
  position: absolute;
  right: 5%;
  top: 3%;
  z-index: 999;

  // hamburger container
  .hamburger-box {
    width: var(--hamgburger-width);
    height: var(--hamgburger-width);
    display: inline-block;
    position: relative;
  }

  // inside .hamburger box
  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: calc(1rem / -2);

    &,
    &::before,
    &::after {
      width: var(--hamgburger-width);
      height: var(--hamburger-layer-spacing);
      background-color: black;
      border-radius: 20px;
      position: absolute;
      transition: transform 150ms ease;
    }

    &::before,
    &::after {
      content: "";
      display: block;
    }

    &::before {
      top: var(--hamburger-layer-spacing)*2;
    }

    &::after {
      bottom: var(--hamburger-layer-spacing) * 2;
    }
  }

  // animation
  .hamburger--spring {
    .hamburger-inner {
      top: calc(var(--hamburger-layer-spacing) / 2);
      transition: background-color 0ms 130ms linear;

      &::before {
        top: calc(var(--hamburger-layer-spacing) + var(--hamburger-layer-spacing));
        transition: 
          top 100ms 200ms cubic-bezier(0.33333, 0.66667, 0.66667, 1),
          transform 130ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }

      &::after {
        top: calc(calc(var(--hamburger-layer-spacing) * 2) + calc(var(--hamburger-layer-spacing) * 2));
        transition: 
          top 200ms 200ms cubic-bezier(0.33333, 0.66667, 0.66667, 1),
          transform 130ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
      }
    }
  }

  // When it looks like 'X'
  .is-active {
    .hamburger-inner {
      transition-delay: 220ms;
      background-color: transparent !important;

      &::before {
        top: 0;
        transition: 
          top 100ms 150ms cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 130ms 220ms cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, var(--hamburger-layer-spacing), 0) rotate(45deg);
      }

      &::after {
        top: 0;
        transition: 
          top 200ms cubic-bezier(0.33333, 0, 0.66667, 0.33333),
          transform 130ms 220ms cubic-bezier(0.215, 0.61, 0.355, 1);
        transform: translate3d(0, var(--hamburger-layer-spacing), 0) rotate(-45deg);
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    display: none;
  }
`;

// * Small Screen default
const StyledMenu = styled.nav`
  background: ${({ theme }) => theme.base};
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  min-height: 100vh;
  padding: 5rem 2rem 2rem 5rem;
  position: fixed;
  left: 0;
  top: 0;
  transition: transform 0.3s ease-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  scroll-padding: 1rem 0 0 0;
  width: auto;
  z-index: 5;
  // button reset
  button {
    background-color: inherit;
    border: 0;
  }
  // container for side bar nav item
  button, a {
    margin-bottom: 2rem;
    position: relative;
    font-size: inherit;
    font-family: inherit;

    &::before {
      background-color: grey;
      box-shadow: 
        0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);;
      content: '';
      bottom: -.5rem;
      left: -10%;
      position: absolute;
      height: 4px;
      width: 90%;
    }

    &::after {
      content: attr(data-content);
      position: absolute;
      left: -30%;
      bottom: 11%;
    }
  }
  a, span {
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.25ch;
    color: ${({ theme }) => theme.indigo};
    text-decoration: none;
  }
  

  // * largish Screen
  @media (min-width: ${({ theme }) => theme.largishScreen}) {
    /* background-color: hsl(240, 100%, 70%); */
    background-color: initial;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 1.3rem;
    justify-content: flex-end;
    min-height: initial;
    right: 0;
    padding: 1rem 2rem 0 0;
    transform: translateX(0);
    width: 100%;
    z-index: 1;

    button::after, button::before, a::after,a::before {
      display: none;
    }

    a, span {
      background: linear-gradient(to right, midnightblue, midnightblue 50%, white 50%);
      background-clip: text;
      background-size: 200% 100%;
      background-position: 100%;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
      /* font-weight: 1000; */
      letter-spacing: .05em;
      overflow: hidden;
      padding: .5em;
      transition: background-position 275ms ease;
    }
    a:hover, span:hover {
      background-position: 0 100%;
    }
  }
`;

export { StyledBurger, StyledMenu }