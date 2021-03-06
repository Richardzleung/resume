import styled from 'styled-components';

const Container = styled.article`
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  border-radius: .75rem;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.10), 
    0 1px 2px rgba(0,0,0,0.30);
  height: 100%;
  line-height: 1.6;
  margin-top: 1.5em;
  max-width: 42ch;
  min-height: 42ch;
  overflow: hidden;
  position: relative;
  width: 100%;
  
  @media (hover) {
    &:hover,
    &:focus-within {
      .card-title::after {
        transform: scaleX(1);
      }
      .card-content {
        transform: translateY(0);
        transition-delay: 275ms;
      }
    }
  }
`;

const Content = styled.div`
  --padding: 1.25rem;
  bottom:0;
  padding: var(--padding);
  position: absolute;
  width: 100%;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 1000px rgba(255, 255, 255, 1);
    filter: blur(10px);
    z-index: -1;
    /* margin: 0 -1rem -1rem; */
  }

  @media (hover) {
    transform: translateY(70%);
    transition: transform 500ms ease, opacity 500ms ease;
  }
`;

const Title = styled.div`
  font-size: 1.55rem;
  font-weight: 620;
  position: relative;
  width: max-content;
  
  &::after {
    background: red;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    bottom: -2px;
    content:'';
    height: 4px;
    left: calc(var(--padding) * -1);
    
    position: absolute;
    width: calc(100% + 2em);
  }

  @media (hover) {
    &::after {
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 500ms ease;
    }
  }
`;

const Button = styled.a`
  background-color: white;
  border-radius: .25em;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.10), 
    0 1px 2px rgba(0,0,0,0.30);
  cursor: pointer;
  display: block;
  margin-bottom: .5em;
  padding: 0.25em 0.5em;
  position: relative;
  top: 1rem;
  width: max-content;
  
  &:hover,
  &:focus {
    background-color: pink;
  }
`;

const Body = styled.div`
  color: black;
  font-weight: 525;
  padding-top: .25rem;
  padding-left: .5rem;
  text-align: left;
`;

export {
  Container,
  Content,
  Title,
  Button,
  Body
}