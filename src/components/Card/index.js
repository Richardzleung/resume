import React from 'react'

import { Container, Content, Title, Button, Body } from './card';

const Card = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

Card.Content = ({ children, ...rest }) => (
  <Content {...rest} className='card-content'>
    {children}
  </Content>
);

Card.Title = ({ children, ...rest }) => (
  <Title {...rest} className='card-title'>
    {children}
  </Title>
);

Card.Body = ({ children, ... rest }) => (
  <Body {...rest}>
    {children}
  </Body>
)

Card.Button = props => (
  <Button {...props}>
    Learn More
  </Button>
);

Card.Content.displayName = 'Content';
Card.Title.displayName = 'Title';
Card.Button.displayName = 'Button';
Card.Body.displayName = 'Body';

export default Card;