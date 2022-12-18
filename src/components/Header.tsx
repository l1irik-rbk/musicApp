import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMusicalNotes } from 'react-icons/io5';
import styled from 'styled-components';

import { MENU_LINKS } from '../helpers/constants';
import { Paths } from '../helpers/constantsTypes';

const Header = (): JSX.Element => {
  return (
    <StyledHeader>
      <Container>
        <StyledMenu>
          <ItemsList>
            {MENU_LINKS.map(({ path, linkName }) => (
              <ListItem key={path}>
                {path === Paths.MAIN_PAGE ? (
                  <CustomLink to={path}>
                    <IoMusicalNotes />
                  </CustomLink>
                ) : (
                  <CustomLink to={path}>{linkName}</CustomLink>
                )}
              </ListItem>
            ))}
          </ItemsList>
        </StyledMenu>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  font-size: 20px;
  line-height: 24px;
  padding: 20px 0;
  margin-bottom: 20px;
  background-color: hsl(207, 26%, 17%);
`;

const StyledMenu = styled.nav``;

const ItemsList = styled.ul`
  display: flex;
  align-items: center;

  & li + li {
    margin-left: 15px;
  }
`;

const ListItem = styled.li`
  &:first-child a.active {
    border-bottom: 2px solid hsl(207, 26%, 17%);
  }
`;

export const Container = styled.div`
  max-width: 1040px;
  padding: 0 10px;
  margin: 0 auto;
  color: hsl(0, 0%, 100%);
`;

export const CustomLink = styled(NavLink)`
  padding-bottom: 2px;
  border-bottom: 2px solid hsl(207, 26%, 17%);
  transition: all 0.5s ease-out;

  &:hover {
    color: inherit;
    border-bottom: 2px solid hsl(0, 0%, 98%);
  }

  &.active {
    border-bottom: 2px solid hsl(0, 0%, 98%);
  }
`;
