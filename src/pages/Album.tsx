import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AlbumInfo from '../components/AlbumInfo';
import Tracks from '../components/Tracks';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchAlbum } from '../Redux/thunks/fetchAlbum';
import { fetchAlbumTracks } from '../Redux/thunks/fetchAlbumTracks';

const Album = () => {
  const [disabledBtn, setDisabledBtn] = useState(false);

  const { albumID } = useParams();
  const dispatch = useAppDispatch();

  const {
    currentAlbum,
    statusAlbumTracks,
    errorAlbumTracks,
    statusCurrentAlbum,
    errorCurrentAlbum,
  } = useAppSelector((state) => state.currentAlbum);

  useEffect(() => {
    dispatch(fetchAlbum(albumID as string));
  }, []);

  const showAlbumTracks = () => {
    dispatch(fetchAlbumTracks(albumID));
    setDisabledBtn(!disabledBtn);
  };

  return (
    <div>
      {errorAlbumTracks && <div>{errorAlbumTracks}</div>}
      {errorCurrentAlbum && <div>{errorCurrentAlbum}</div>}

      {statusCurrentAlbum === Status.PENDING && (!errorAlbumTracks || !errorCurrentAlbum) ? (
        <div>Loading...</div>
      ) : (
        <>
          <AlbumInfo album={currentAlbum} />
          <button onClick={showAlbumTracks} disabled={disabledBtn}>
            Show album tracks
          </button>
        </>
      )}

      {statusAlbumTracks === Status.PENDING && (!errorAlbumTracks || !errorCurrentAlbum) ? (
        <div>Loading...</div>
      ) : (
        <Tracks />
      )}
    </div>
  );
};

export default Album;
