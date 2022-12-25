import React from 'react';
import { Link } from 'react-router-dom';

import { ITrackA } from '../../helpers/constantsTypes';
import MusicLinks from './MusicLinks';
import * as A from '../../theme/Components/UI/StyledMain';

const TracksList = React.memo(({ tracks }: { tracks: ITrackA[] | null }): JSX.Element => {
  return (
    <>
      {tracks &&
        tracks.map(({ track }) => (
          <A.Card key={track.track_id}>
            <A.CardTitle>
              <Link to={`/tracks/${track.track_id}`}>
                {track.track_name} - {track.artist_name}
              </Link>
            </A.CardTitle>
            <MusicLinks trackName={track.track_name} />
          </A.Card>
        ))}
    </>
  );
});

export default TracksList;
