import styled from 'styled-components';

const Container = styled.div`
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  border-radius: 1rem;
  box-shadow: 
    0 1px 3px rgba(0,0,0,0.10), 
    0 1px 2px rgba(0,0,0,0.30);  
  max-width: 45ch;
  min-height: 45ch;
  padding: 10em 0;
  position: relative;
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
`;

const Content = styled.div`
  background: linear-gradient(
    hsl(0 0% 0% / .75),
    hsl(255 50% 50% / 1) 10%,
    hsl(0 0% 0% / 1)
  );
  line-height: 1.6;
  padding: 1.5em;
  position: absolute;
  bottom:0;
`;

const Title = styled.div`
  position: relative;
  width: max-content;
  

  &::after {
    background: red;
    content:'';
    height: 4px;
    left: 0;
    bottom: 0;
    position: absolute;
    width: 100%;
  }
`;

const Button = styled.a`
  cursor: pointer;
  border-radius: .25em;
  display: block;
  text-decoration: none;
  color: black;
  background-color: white;
  margin-bottom: .5em;
  padding: 0.5em 1.25em;
  position: relative;
  top: 1rem;
  &:hover,
  &:focus {
    background-color: pink;
  }
`;

export {
  Container,
  Content,
  Title,
  Button
}