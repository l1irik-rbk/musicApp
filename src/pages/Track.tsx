import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import TrackInfo from '../components/TrackInfo';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setLyrics } from '../Redux/slices/trackSlice';
import { fetchLyrics } from '../Redux/thunks/fetchLyrics';
import { fetchTrack } from '../Redux/thunks/fetchTrack';

const Track = () => {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const { trackID } = useParams();

  const dispatch = useAppDispatch();
  const { currentTrackLyrics, currentTrack, statusTrack, errorTrack, statusLyrics, errorLyrics } =
    useAppSelector((state) => state.currentTrack);

  const showLiriks = () => {
    setDisabledBtn(!disabledBtn);
    dispatch(fetchLyrics(Number(trackID)));
  };

  useEffect(() => {
    dispatch(setLyrics(null));
    dispatch(fetchTrack(Number(trackID)));
  }, []);

  return (
    <div>
      {statusTrack === Status.PENDING ? (
        <Spinner />
      ) : (
        <>
          {currentTrack && <TrackInfo track={currentTrack} />}
          <button onClick={showLiriks} disabled={disabledBtn}>
            Show liriks
          </button>
        </>
      )}

      {statusLyrics === Status.PENDING ? (
        <Spinner />
      ) : (
        <div>
          {currentTrackLyrics?.lyrics_body.split('\n').map((string, index) => (
            <p key={index}>{string}</p>
          ))}
        </div>
      )}

      {errorTrack && <div>{errorTrack}</div>}
      {errorLyrics && <div>{errorLyrics}</div>}
    </div>
  );
};

export default Track;
