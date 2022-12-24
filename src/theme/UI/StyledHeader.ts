import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  font-size: 20px;
  line-height: 24px;
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.darkBgColor};
`;

export const Menu = styled.nav``;

export const ItemsList = styled.ul`
  display: flex;
  align-items: center;

  & li + li {
    margin-left: 15px;
  }
`;

export const ListItem = styled.li`
  &:first-child a.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkBgColor};
  }
`;

export const CustomLink = styled(NavLink)`
  padding-bottom: 2px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.darkBgColor};
  transition: all 0.5s ease-out;

  &:hover {
    color: inherit;
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightColor};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightColor};
  }

  & svg {
    font-size: 24px;
    position: relative;
    top: 3px;
  }
`;
