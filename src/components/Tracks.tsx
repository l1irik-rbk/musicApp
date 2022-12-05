import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../Redux/hooks';

const Tracks = (): JSX.Element => {
  const { tracks } = useAppSelector((state) => state.mainPage);

  return (
    <>
      {tracks.map(({ track }) => (
        <div key={track.track_id}>
          <Link to={`/tracks/${track.track_id}`}>
            <h3>
              {track.track_name} - {track.artist_name}
            </h3>

            <ul>
              <li>Album: {track.album_name}</li>
              <li>{track.num_favourite} people added to favorites</li>
            </ul>
          </Link>
          <a
            href={`https://music.yandex.ru/search?text=${track.track_name} ${track.artist_name}`}
            target="_blank"
            rel="noreferrer"
          >
            Я
          </a>
        </div>
      ))}
    </>
  );
};

export default Tracks;
