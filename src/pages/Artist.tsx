import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import ArtistsInfo from '../components/Artist/ArtistsInfo';
import { fetchAlbums } from '../Redux/thunks/fetchAlbums';
import Albums from '../components/Album/Albums';
import { fetchArtist } from '../Redux/thunks/fetchArtist';
import { ButtonContent, Status } from '../helpers/constantsTypes';
import Pagination from '../components/Controls/Pagination';
import {
  setAlbumsPageCount,
  setAlbumsPageNumber,
  setCurrentArtist,
  setCurrentArtistAlbums,
  setTotalAlbums,
} from '../Redux/slices/artistSlice';
import Spinner from '../components/UI/Spinner';
import Error from '../components/UI/Error';

import * as A from '../theme/Components/UI/StyledMain';

const Artist = (): JSX.Element => {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const { artistID } = useParams();

  const dispatch = useAppDispatch();
  const {
    currentArtist,
    statusArtist,
    errorArtist,
    albumsPageNumber: pageNumber,
    currentArtistAlbums,
  } = useAppSelector((state) => state.currentArtist);

  useEffect(() => {
    if (currentArtistAlbums) dispatch(setCurrentArtistAlbums(null));
    dispatch(setCurrentArtist(null));
    dispatch(setAlbumsPageNumber(0));
    dispatch(setTotalAlbums(null));
    dispatch(setAlbumsPageCount(null));

    dispatch(fetchArtist(Number(artistID)));
  }, []);

  const showAlbums = () => {
    dispatch(fetchAlbums({ artistID, pageNumber }));
    setDisabledBtn(!disabledBtn);
  };

  return (
    <>
      {errorArtist && <Error error={errorArtist} />}

      {statusArtist === Status.PENDING ? (
        <Spinner />
      ) : (
        <>
          <ArtistsInfo artist={currentArtist} />
          <A.Button onClick={showAlbums} disabled={disabledBtn}>
            {ButtonContent.ARTIST}
          </A.Button>
        </>
      )}

      {!!currentArtistAlbums?.length && <Pagination artistID={currentArtist?.artist_id} />}
      <Albums />
    </>
  );
};

export default Artist;
