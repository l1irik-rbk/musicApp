import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 20px;
  font-size: 14px;
  line-height: 16px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.darkBgColor};
  text-align: center;
`;

export const FooterText = styled.p`
  line-height: 20px;
`;

export const FooterLink = styled.a``;

export const FooterImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
