import React from 'react'

import { Container, Content, Title, Button } from './card';

const Card = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

Card.Content = ({ children, ...rest }) => (
  <Content {...rest}>
    {children}
  </Content>
);

Card.Title = ({ children, ...rest }) => (
  <Title {...rest}>
    {children}
  </Title>
);


Card.Button =({ children, ...rest }) => (
  <Button {...rest}>
    {children}
  </Button>
);

Card.Content.displayName = 'Content';
Card.Title.displayName = 'Title';
Card.Button.displayName = 'Button';

export default Card;