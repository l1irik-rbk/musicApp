import React from 'react';
import { Link } from 'react-router-dom';
import { Status } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';
import AlbumInfo from './AlbumInfo';
import Spinner from './Spinner';

const Albums = () => {
  const { currentArtistAlbums, statusAlbums, errorAlbums } = useAppSelector(
    (state) => state.currentArtist
  );

  return (
    <div>
      {!!currentArtistAlbums.length && statusAlbums === Status.FULFILLED && (
        <>
          <h5>Albums:</h5>
          {currentArtistAlbums.map(({ album }) => (
            <div key={album.album_id}>
              <Link to={`/album/${album.album_id}`}>
                <AlbumInfo album={album} />
              </Link>
            </div>
          ))}
        </>
      )}

      {statusAlbums === Status.PENDING && <Spinner />}
      {errorAlbums && <div>{errorAlbums}</div>}
    </div>
  );
};

export default Albums;
