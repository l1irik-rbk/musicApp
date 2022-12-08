import React from 'react';
import { Link } from 'react-router-dom';
import { ITrackA } from '../helpers/constantsTypes';
import TrackInfo from './TrackInfo';

const TracksList = ({ tracks }: { tracks: ITrackA[] }) => {
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

export default TracksList;
