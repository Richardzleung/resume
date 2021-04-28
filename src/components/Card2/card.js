import styled from 'styled-components';

const Container = styled.div`
  background-image: ${props => props.image};
  background-size: cover;
  max-width: 35ch;
  padding: 10rem 0;
`;

const Content = styled.div`
  background: linear-gradient(
    hsl(0 0% 0% / 1),
    hsl(0 0% 0% / 0)
  );
  padding: 1.5em;
`;

export {
  Container,
  Content
}