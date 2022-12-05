import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { ITrackA } from '../Redux/slices/mainPageSlice';
import { fetchLyrics } from '../Redux/thunks/fetchLyrics';

const Track = () => {
  const { trackID } = useParams();

  const dispatch = useAppDispatch();
  const { tracks } = useAppSelector((state) => state.mainPage);
  const { currentTrack } = useAppSelector((state) => state.currentTrack);

  const [track, setTrack] = useState(
    (tracks as ITrackA[]).filter(({ track }) => track.track_id === Number(trackID))
  );

  useEffect(() => {
    console.log(currentTrack?.lyrics_body.split('\n'));
    dispatch(fetchLyrics(Number(trackID)));
  }, []);

  return (
    <div>
      Track {trackID}
      <div>
        {currentTrack?.lyrics_body.split('\n').map((string, index) => (
          <p key={index}>{string}</p>
        ))}
      </div>
    </div>
  );
};

export default Track;
