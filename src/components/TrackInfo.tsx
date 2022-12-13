import React from 'react';
import { Link } from 'react-router-dom';
import { ITrack } from '../helpers/constantsTypes';

const TrackInfo = ({ track }: { track: ITrack | null }): JSX.Element => {
  console.log(track);
  return (
    <>
      {track && (
        <>
          <h3>
            {track.track_name} - {track.artist_name}
          </h3>
          <ul>
            <Link to={`/album/${track.album_id}`}>
              <li>Album: {track.album_name}</li>
            </Link>
            <li>{track.num_favourite} people added to favorites</li>
          </ul>
        </>
      )}
    </>
  );
};

export default TrackInfo;
