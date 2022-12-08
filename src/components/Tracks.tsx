import React from 'react';
import { useLocation } from 'react-router-dom';

import { useAppSelector } from '../Redux/hooks';
import TracksList from './TracksList';

const Tracks = (): JSX.Element => {
  const location = useLocation();

  const { tracks } = useAppSelector((state) => state.mainPage);
  const { albumTracks } = useAppSelector((state) => state.currentAlbum);

  return <TracksList tracks={location.pathname.includes('/album') ? albumTracks : tracks} />;
};

export default Tracks;
