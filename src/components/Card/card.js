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
  max-width: 45ch;
  min-height: 45ch;
  padding: 10em 0;
  position: relative;
  transition: transform 500ms ease;
  width: 100%;
  overflow: hidden;

  &:hover {
    transform: scale(1.02);

    .card-title::after {
      transform: scaleX(1);
    }
    .card-content {
      transform: translateY(0);
    }
  }
`;

const Content = styled.div`
  --padding: 1.25rem;
  background: linear-gradient(
    hsl(0 0% 0% / .75),
    hsl(25 0% 00% / 0.3) 20%,
    hsl(0 0% 0% / 1)
  );
  bottom:0;
  padding: var(--padding);
  position: absolute;
  transform: translateY(67%);
  transition: transform 500ms ease, opacity 500ms ease;
`;

const Title = styled.div`
  font-size: 1.5rem;
  position: relative;
  width: max-content;
  
  &::after {
    background: red;
    bottom: -2px;
    content:'';
    height: 4px;
    left: calc(var(--padding) * -1);
    position: absolute;
    /* transform: scaleX(0);
    transform-origin: left;
    transition: transform 600ms ease; */
    width: calc(100% + 3em);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 500ms ease;
  }
`;

const Button = styled.a`
  background-color: white;
  border-radius: .25em;
  /* clear: left; */
  cursor: pointer;
  display: block;
  /* float: left;  */
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
  color: rgb(255 255 255/0.8);
`;

export {
  Container,
  Content,
  Title,
  Button,
  Body
}