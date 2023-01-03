import React from 'react';

import { useAppSelector } from 'Redux/hooks';

import * as S from 'theme/Components/Track/StyledTrackLyrics';
import * as C from 'theme/Components/UI/StyledContainers';

const TrackLyrics = () => {
  const { currentTrackLyrics } = useAppSelector((state) => state.currentTrack);

  return (
    <C.LyricsContainer>
      {currentTrackLyrics?.lyrics_body.split('\n').map((string, index) => (
        <S.LyricsParagraph key={index}>{string}</S.LyricsParagraph>
      ))}
    </C.LyricsContainer>
  );
};

export default TrackLyrics;
