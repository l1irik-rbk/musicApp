import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 20px;
  font-size: 14px;
  line-height: 16px;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.darkBgColor};
  text-align: center;
`;
