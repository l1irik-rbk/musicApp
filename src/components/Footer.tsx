import React from 'react';
import styled from 'styled-components';
import { Container } from './Header';

const Footer = () => {
  return (
    <StyledFooter>
      <Container>Footer</Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  margin-top: 20px;
  font-size: 14px;
  line-height: 16px;
  padding: 20px 0;
  background-color: hsl(207, 26%, 17%);
  text-align: center;
`;
