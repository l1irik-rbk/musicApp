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
          </Link>
        </div>
      ))}
    </>
  );
};

export default Artists;
