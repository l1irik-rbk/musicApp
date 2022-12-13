import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Tracks from '../components/Tracks';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchAlbumTracks } from '../Redux/thunks/fetchAlbumTracks';

const Album = () => {
  const { albumID } = useParams();
  const dispatch = useAppDispatch();
  const {
    status,
    error,
    albumTracks,
    albumTracksPageNumber: pageNumber,
  } = useAppSelector((state) => state.currentAlbum);

  useEffect(() => {
    dispatch(fetchAlbumTracks({ albumID, pageNumber }));
  }, []);

  return (
    <div>
      {status === Status.PENDING ? (
        <div>Loading...</div>
      ) : (
        <>
          Album {albumID}
          <Tracks />
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Album;
