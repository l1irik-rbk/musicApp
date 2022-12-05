import React from 'react';
import { Link } from 'react-router-dom';

import { useAppSelector } from '../Redux/hooks';
import TrackInfo from './TrackInfo';

const Tracks = (): JSX.Element => {
  const { tracks } = useAppSelector((state) => state.mainPage);

  return (
    <>
      {tracks.map(({ track }) => (
        <div key={track.track_id}>
          <Link to={`/tracks/${track.track_id}`}>
            <TrackInfo track={track} />
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
