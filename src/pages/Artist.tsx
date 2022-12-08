import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import ArtistsInfo from '../components/ArtistsInfo';
import { fetchAlbums } from '../Redux/thunks/fetchAlbums';
import Albums from '../components/Albums';
import { fetchArtist } from '../Redux/thunks/fetchArtist';

const Artist = () => {
  const { artistID } = useParams();

  const dispatch = useAppDispatch();
  const { currentArtist } = useAppSelector((state) => state.currentArtist);

  useEffect(() => {
    dispatch(fetchArtist(Number(artistID)));
    dispatch(fetchAlbums(Number(artistID)));
  }, []);

  return (
    <div>
      <ArtistsInfo artist={currentArtist} />
      <Albums />
    </div>
  );
};

export default Artist;
