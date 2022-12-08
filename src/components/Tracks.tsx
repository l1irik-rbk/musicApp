import React from 'react';
import { useLocation } from 'react-router-dom';

import { useCurrentTracks } from '../hooks/useCurrentTracks';
import TracksList from './TracksList';

const Tracks = (): JSX.Element => {
  const location = useLocation();

  const tracks = useCurrentTracks(location.pathname);

  return <TracksList tracks={tracks} />;
};

export default Tracks;
