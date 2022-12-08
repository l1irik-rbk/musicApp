import React from 'react';
import { Link } from 'react-router-dom';
import { Status } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';

const Albums = () => {
  const { currentArtistAlbums, status, error } = useAppSelector((state) => state.currentArtist);

  return (
    <div>
      {!!currentArtistAlbums.length && (
        <>
          <h5>Albums:</h5>
          {currentArtistAlbums.map(({ album }) => (
            <div key={album.album_id}>
              <Link to={`/album/${album.album_id}`}>
                <p>Album name: {album.album_name}</p>
                <p>Release_date: {album.album_release_date}</p>
                {!!album.primary_genres.music_genre_list.length && (
                  <>
                    <h6>Genres:</h6>
                    <ul>
                      {album.primary_genres.music_genre_list.map((genre) => (
                        <li key={genre.music_genre.music_genre_name}>
                          {genre.music_genre.music_genre_name}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </Link>
            </div>
          ))}
        </>
      )}

      {status === Status.PENDING && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Albums;
