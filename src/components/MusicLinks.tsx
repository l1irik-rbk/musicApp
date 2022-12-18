import React from 'react';

import styled from 'styled-components';
import { MUSIC_LINKS } from '../helpers/constants';

const MusicLink = styled.a`
  & svg {
    font-size: 1rem;
  }

  @media (min-width: 767px) {
    & svg {
      font-size: 20px;
    }
  }
`;

const MusicLinksContainer = styled.div`
  display: flex;
  align-items: center;

  & a + a {
    margin-left: 10px;
  }
`;

const MusicLinks = ({ trackName }: { trackName: string }): JSX.Element => {
  return (
    <MusicLinksContainer>
      {MUSIC_LINKS.map((link, index) => (
        <MusicLink
          href={`${link.href}${trackName}`}
          target={link.target}
          rel={link.rel}
          key={index}
        >
          {<link.content />}
        </MusicLink>
      ))}
    </MusicLinksContainer>
  );
};

export default MusicLinks;
