import React from 'react';

import { MUSIC_LINKS } from '../helpers/constants';
import * as S from '../theme/Components/StyledMusicLinks';
import * as C from '../theme/UI/StyledContainers';

const MusicLinks = ({ trackName }: { trackName: string }): JSX.Element => {
  return (
    <C.MusicLinksContainer>
      {MUSIC_LINKS.map((link, index) => (
        <S.MusicLink
          href={`${link.href}${trackName}`}
          target={link.target}
          rel={link.rel}
          key={index}
        >
          {<link.content />}
        </S.MusicLink>
      ))}
    </C.MusicLinksContainer>
  );
};

export default MusicLinks;
