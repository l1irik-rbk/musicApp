import React from 'react';
import { IArtist } from '../helpers/constantsTypes';

const ArtistsInfo = ({ artist }: { artist: IArtist | null }): JSX.Element => {
  return (
    <>
      {artist && (
        <>
          <ul>
            <li>Country: {artist.artist_country}</li>
            <li>
              {artist.begin_date} - {artist.end_date}
            </li>
          </ul>
          {artist.artist_alias_list && (
            <>
              <h6>Aliases:</h6>
              <ul>
                {artist.artist_alias_list.map(({ artist_alias }) => (
                  <li key={artist_alias}>{artist_alias}</li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ArtistsInfo;
