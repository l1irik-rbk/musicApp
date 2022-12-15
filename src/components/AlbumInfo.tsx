import React from 'react';
import { IAlbum } from '../helpers/constantsTypes';

const AlbumInfo = ({ album }: { album: IAlbum | null }): JSX.Element => {
  console.log('AlbumInfo', album);
  return (
    <>
      {album && (
        <>
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
        </>
      )}
    </>
  );
};

export default AlbumInfo;
