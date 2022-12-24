import React from 'react';
import { useAppSelector } from '../Redux/hooks';
import * as S from '../theme/Components/StyledTrackLyrics';

const TrackLyrics = () => {
  const { currentTrackLyrics } = useAppSelector((state) => state.currentTrack);

  return (
    <>
      {currentTrackLyrics?.lyrics_body.split('\n').map((string, index) => (
        <S.LyricsParagraph key={index}>{string}</S.LyricsParagraph>
      ))}
    </>
  );
};

export default TrackLyrics;
