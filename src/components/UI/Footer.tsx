import React from 'react';

import * as C from '../../theme/UI/StyledContainers';
import * as S from '../../theme/UI/StyledFooter';

const Footer = (): JSX.Element => {
  return (
    <S.StyledFooter>
      <C.Container>
        <C.ContentContainer alignItems="center">
          <S.FooterText>(c)2022-2023</S.FooterText>
          <S.FooterLink href="https://github.com/l1irik-rbk">
            <S.FooterImage
              src="https://avatars.githubusercontent.com/u/36926728"
              alt="avatar l1irik-rbk"
            />
          </S.FooterLink>
        </C.ContentContainer>
      </C.Container>
    </S.StyledFooter>
  );
};

export default Footer;
