import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Error, Spinner } from 'components/UI';
import { AlbumInfo } from 'components/Album';
import { Tracks } from 'components/Track';

import { fetchAlbum, fetchAlbumTracks } from 'Redux/thunks';
import { setAlbumTracks, setCurrentAlbum } from 'Redux/slices/albumSlice';
import { useAppDispatch, useAppSelector } from 'Redux/hooks';

import { ButtonContent, Status } from 'helpers/types';

import * as A from 'theme/Components/UI/StyledMain';
import * as C from 'theme/Components/UI/StyledContainers';

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
    <>
      {errorAlbumTracks && <Error error={errorAlbumTracks} />}
      {errorCurrentAlbum && <Error error={errorCurrentAlbum} />}

      {statusCurrentAlbum === Status.PENDING && (!errorAlbumTracks || !errorCurrentAlbum) ? (
        <Spinner />
      ) : (
        <>
          <AlbumInfo album={currentAlbum} />
          <A.Button onClick={showAlbumTracks} disabled={disabledBtn}>
            {ButtonContent.ALBUM}
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
    </>
  );
};

export default Album;
