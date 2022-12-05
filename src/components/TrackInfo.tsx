import React from 'react';
import { ITrack } from '../helpers/constantsTypes';

const TrackInfo = ({ track }: { track: ITrack | null }): JSX.Element => {
  return (
    <>
      {track && (
        <>
          <h3>
            {track.track_name} - {track.artist_name}
          </h3>
          <ul>
            <li>Album: {track.album_name}</li>
            <li>{track.num_favourite} people added to favorites</li>
          </ul>
        </>
      )}
    </>
  );
};

export default TrackInfo;
