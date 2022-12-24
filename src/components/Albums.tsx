import React from 'react';

import { Status } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';
import AlbumInfo from './AlbumInfo';
import Error from './Error';
import Spinner from './Spinner';

import * as C from '../theme/UI/StyledContainers';
import * as A from '../theme/UI/StyledMain';

const Albums = (): JSX.Element => {
  const { currentArtistAlbums, currentArtist, statusAlbums, errorAlbums } = useAppSelector(
    (state) => state.currentArtist
  );
  console.log('currentArtist', currentArtist);

  return (
    <>
      {!!currentArtistAlbums.length && statusAlbums === Status.FULFILLED && (
        <>
          <A.PageTitle>{currentArtist!.artist_name} albums</A.PageTitle>
          <C.ContentContainer>
            {currentArtistAlbums.map(({ album }) => (
              <A.Card key={album.album_id}>
                <AlbumInfo album={album} />
              </A.Card>
            ))}
          </C.ContentContainer>
        </>
      )}

      {statusAlbums === Status.PENDING && <Spinner />}
      {errorAlbums && <Error error={errorAlbums} />}
    </>
  );
};

export default Albums;
