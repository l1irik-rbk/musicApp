import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TrackInfo from '../components/TrackInfo';
import { ITrack, Paths, Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchLyrics } from '../Redux/thunks/fetchLyrics';
import { filterTrack } from '../utils/filterTrack';

const Track = () => {
  const { trackID } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { tracks } = useAppSelector((state) => state.mainPage);
  const { currentTrackLyrics, status, error } = useAppSelector((state) => state.currentTrack);

  const [track, setTrack] = useState<ITrack | null>(null);

  useEffect(() => {
    tracks.length ? setTrack(filterTrack(tracks, Number(trackID))) : navigate(Paths.MAIN_PAGE);
  }, []);

  useEffect(() => {
    if (track) dispatch(fetchLyrics(Number(trackID)));
  }, [track]);

  return (
    <div>
      {status === Status.PENDING ? (
        <div>Loading...</div>
      ) : (
        <>
          {track && <TrackInfo track={track} />}
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
