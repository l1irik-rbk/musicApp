import React from 'react';
import { useLocation } from 'react-router-dom';

import ArtistsList from './ArtistsList';

import { useAppSelector } from 'Redux/hooks';

import { Paths } from 'helpers/types';

const Artists = (): JSX.Element => {
  const location = useLocation();

  const { artists } = useAppSelector((state) => state.mainPage);
  const { chartArtists } = useAppSelector((state) => state.chartArtists);

  return (
    <ArtistsList artists={location.pathname.includes(Paths.CHARTS) ? chartArtists : artists} />
  );
};

export default Artists;
