import React from 'react';

import { IoMusicalNotes } from 'react-icons/io5';

import { MENU_LINKS } from '../../helpers/constants';
import { Paths } from '../../helpers/types';

import * as C from '../../theme/Components/UI/StyledContainers';
import * as S from '../../theme/Components/UI/StyledHeader';

const Header = (): JSX.Element => {
  return (
    <S.Header>
      <C.Container>
        <S.Menu>
          <S.ItemsList>
            {MENU_LINKS.map(({ path, linkName }) => (
              <S.ListItem key={path}>
                {path === Paths.MAIN_PAGE ? (
                  <S.CustomLink to={path}>
                    <IoMusicalNotes />
                  </S.CustomLink>
                ) : (
                  <S.CustomLink to={path}>{linkName}</S.CustomLink>
                )}
              </S.ListItem>
            ))}
          </S.ItemsList>
        </S.Menu>
      </C.Container>
    </S.Header>
  );
};

export default Header;
