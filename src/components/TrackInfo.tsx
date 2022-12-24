import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import MusicLinks from './MusicLinks';
import { ITrack } from '../helpers/constantsTypes';
import * as A from '../theme/StyledMain';

const TrackInfo = ({ track }: { track: ITrack | null }): JSX.Element => {
  console.log(track);
  return (
    <>
      {track && (
        <>
          <A.PageTitle>
            {track.track_name} - {track.artist_name}
          </A.PageTitle>
          <A.PageItems>
            <A.PageItem>
              <Link to={`/album/${track.album_id}`}>
                <span> Album:</span> {track.album_name}
              </Link>
            </A.PageItem>
            <A.PageItem>
              <span>
                Likes <IoHeartOutline />:
              </span>{' '}
              {track.num_favourite}
            </A.PageItem>
            <A.PageItem>
              <MusicLinks trackName={track.track_name} />
            </A.PageItem>
          </A.PageItems>
        </>
      )}
    </>
  );
};

export default TrackInfo;
