import React from 'react';
import { Link } from 'react-router-dom';

import { IAlbum } from '../../helpers/types';
import { updateDateFormat } from '../../utils/updateDateFormat';

import * as A from '../../theme/Components/UI/StyledMain';

const AlbumInfo = React.memo(({ album }: { album: IAlbum | null }): JSX.Element => {
  const releaseDate = updateDateFormat(album?.album_release_date);
  console.log('album', album);
  return (
    <>
      {album && (
        <>
          <A.PageItems>
            <A.PageItem>
              <Link to={`/album/${album.album_id}`}>
                <span>Album:</span> {album.album_name}
              </Link>
            </A.PageItem>
            <A.PageItem>
              <span>Release date:</span> {releaseDate}
            </A.PageItem>
          </A.PageItems>

          {!!album.primary_genres.music_genre_list.length && (
            <>
              <A.PageSubTitle textAlign="start" fontWeight="700">
                Genres:
              </A.PageSubTitle>
              <A.PageItems flexDirection="row" justifyContent="flex-start">
                {album.primary_genres.music_genre_list.map((genre, index) => (
                  <A.PageItem key={genre.music_genre.music_genre_name}>
                    {genre.music_genre.music_genre_name}
                    {album.primary_genres.music_genre_list.length - 1 === index ? '' : ','}
                  </A.PageItem>
                ))}
              </A.PageItems>
            </>
          )}
        </>
      )}
    </>
  );
});

export default AlbumInfo;
