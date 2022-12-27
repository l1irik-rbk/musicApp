import React from 'react';

import { Status } from '../../helpers/constantsTypes';
import { useAppSelector } from '../../Redux/hooks';
import AlbumInfo from './AlbumInfo';
import Error from '../UI/Error';
import Spinner from '../UI/Spinner';

import * as C from '../../theme/Components/UI/StyledContainers';
import * as A from '../../theme/Components/UI/StyledMain';

const Albums = (): JSX.Element => {
  const { currentArtistAlbums, currentArtist, statusAlbums, errorAlbums } = useAppSelector(
    (state) => state.currentArtist
  );
  console.log('currentArtistAlbums', currentArtistAlbums);
  return (
    <>
      {!!currentArtistAlbums?.length && statusAlbums === Status.FULFILLED && (
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

      {currentArtistAlbums && !currentArtistAlbums?.length && statusAlbums === Status.FULFILLED && (
        <C.ContentContainer>
          <A.PageSubTitle>No albums for this artist!</A.PageSubTitle>
        </C.ContentContainer>
      )}

      {statusAlbums === Status.PENDING && <Spinner />}
      {errorAlbums && <Error error={errorAlbums} />}
    </>
  );
};

export default Albums;
