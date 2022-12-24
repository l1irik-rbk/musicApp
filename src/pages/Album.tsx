import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AlbumInfo from '../components/AlbumInfo';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import Tracks from '../components/Tracks';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchAlbum } from '../Redux/thunks/fetchAlbum';
import { fetchAlbumTracks } from '../Redux/thunks/fetchAlbumTracks';
import * as A from '../theme/StyledMain';
import * as C from '../theme/StyledContainers';
import { setAlbumTracks, setCurrentAlbum } from '../Redux/slices/albumSlice';

const Album = (): JSX.Element => {
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
    dispatch(setAlbumTracks([]));
    dispatch(setCurrentAlbum(null));

    dispatch(fetchAlbum(albumID as string));
  }, []);

  const showAlbumTracks = () => {
    dispatch(fetchAlbumTracks(albumID));
    setDisabledBtn(!disabledBtn);
  };

  return (
    <div>
      {errorAlbumTracks && <Error error={errorAlbumTracks} />}
      {errorCurrentAlbum && <Error error={errorCurrentAlbum} />}

      {statusCurrentAlbum === Status.PENDING && (!errorAlbumTracks || !errorCurrentAlbum) ? (
        <Spinner />
      ) : (
        <>
          <AlbumInfo album={currentAlbum} />
          <A.Button onClick={showAlbumTracks} disabled={disabledBtn}>
            Show album tracks
          </A.Button>
        </>
      )}

      {statusAlbumTracks === Status.PENDING && (!errorAlbumTracks || !errorCurrentAlbum) ? (
        <Spinner />
      ) : (
        <C.ContentContainer>
          <Tracks />
        </C.ContentContainer>
      )}
    </div>
  );
};

export default Album;
