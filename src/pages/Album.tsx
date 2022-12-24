import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import AlbumInfo from '../components/Album/AlbumInfo';
import Error from '../components/UI/Error';
import Spinner from '../components/UI/Spinner';
import Tracks from '../components/Track/Tracks';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchAlbum } from '../Redux/thunks/fetchAlbum';
import { fetchAlbumTracks } from '../Redux/thunks/fetchAlbumTracks';
import { setAlbumTracks, setCurrentAlbum } from '../Redux/slices/albumSlice';
import * as A from '../theme/UI/StyledMain';
import * as C from '../theme/UI/StyledContainers';

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
