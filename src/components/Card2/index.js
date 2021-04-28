import React from 'react'

import { Container, Content } from './card';

const Card = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
);

Card.Content = function({ children, ...rest }){
  <Content {...rest}>
    {children}
  </Content>
}

export default Card;