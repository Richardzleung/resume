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
  z-index: 1;

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
        transition: top 100ms 200ms cubic-bezier(0.33333, 0.66667, 0.66667, 1),
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
  z-index: 2;

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