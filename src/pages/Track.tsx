import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TrackInfo from '../components/TrackInfo';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchLyrics } from '../Redux/thunks/fetchLyrics';
import { fetchTrack } from '../Redux/thunks/fetchTrack';

const Track = () => {
  const { trackID } = useParams();

  const dispatch = useAppDispatch();
  const { currentTrackLyrics, currentTrack, status, error } = useAppSelector(
    (state) => state.currentTrack
  );

  useEffect(() => {
    dispatch(fetchTrack(Number(trackID)));
    dispatch(fetchLyrics(Number(trackID)));
  }, []);

  return (
    <div>
      {status === Status.PENDING ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentTrack && <TrackInfo track={currentTrack} />}
          <div>
            {currentTrackLyrics?.lyrics_body.split('\n').map((string, index) => (
              <p key={index}>{string}</p>
            ))}
          </div>
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default Track;
