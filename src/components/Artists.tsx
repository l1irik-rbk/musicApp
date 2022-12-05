import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../Redux/hooks';

const Artists = () => {
  const { artists } = useAppSelector((state) => state.mainPage);

  return (
    <>
      {artists.map(({ artist }) => (
        <div key={artist.artist_id}>
          <Link to={`/artists/${artist.artist_id}`}>
            <h3>{artist.artist_name}</h3>

            <ul>
              <li>Country: {artist.artist_country}</li>
              <li>
                {artist.begin_date} - {artist.end_date}
              </li>
            </ul>
            <h6>Aliases:</h6>
            <ul>
              {artist.artist_alias_list.map(({ artist_alias }) => (
                <li key={artist_alias}>{artist_alias}</li>
              ))}
            </ul>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Artists;
