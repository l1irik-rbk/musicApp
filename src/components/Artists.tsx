import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paths } from '../helpers/constantsTypes';

import { useAppSelector } from '../Redux/hooks';
import ArtistsList from './ArtistsList';

const Artists = (): JSX.Element => {
  const location = useLocation();

  const { artists } = useAppSelector((state) => state.mainPage);
  const { chartArtists } = useAppSelector((state) => state.chartArtists);

  return (
    <ArtistsList artists={location.pathname.includes(Paths.CHARTS) ? chartArtists : artists} />
  );
};

export default Artists;
