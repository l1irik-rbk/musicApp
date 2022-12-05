import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TrackInfo from '../components/TrackInfo';
import { ITrackA } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchLyrics } from '../Redux/thunks/fetchLyrics';
import { fetchTrack } from '../Redux/thunks/fetchTrack';

const Track = () => {
  const { trackID } = useParams();

  const dispatch = useAppDispatch();
  const { tracks } = useAppSelector((state) => state.mainPage);
  const { currentTrackLyrics, currentTrackInfo } = useAppSelector((state) => state.currentTrack);

  const [track, setTrack] = useState(
    (tracks as ITrackA[]).filter(({ track }) => track.track_id === Number(trackID))
  );

  useEffect(() => {
    dispatch(fetchLyrics(Number(trackID)));
    dispatch(fetchTrack(Number(trackID)));
  }, []);

  return (
    <div>
      <TrackInfo track={currentTrackInfo} />
      <div>
        {currentTrackLyrics?.lyrics_body.split('\n').map((string, index) => (
          <p key={index}>{string}</p>
        ))}
      </div>
    </div>
  );
};

export default Track;
