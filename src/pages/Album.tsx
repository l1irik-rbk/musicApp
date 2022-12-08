import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tracks from '../components/Tracks';
import { useAppDispatch } from '../Redux/hooks';
import { fetchAlbumTracks } from '../Redux/thunks/fetchAlbumTracks';

const Album = () => {
  const { albumID } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAlbumTracks(Number(albumID)));
  }, []);

  return (
    <div>
      Album {albumID}
      <Tracks />
    </div>
  );
};

export default Album;
