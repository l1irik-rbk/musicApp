import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Error from '../components/UI/Error';
import Spinner from '../components/UI/Spinner';
import TrackInfo from '../components/Track/TrackInfo';
import TrackLyrics from '../components/Track/TrackLyrics';
import { ButtonContent, Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setLyrics } from '../Redux/slices/trackSlice';
import { fetchLyrics } from '../Redux/thunks/fetchLyrics';
import { fetchTrack } from '../Redux/thunks/fetchTrack';

import * as A from '../theme/Components/UI/StyledMain';

const Track = (): JSX.Element => {
  const [disabledBtn, setDisabledBtn] = useState(false);
  const { trackID } = useParams();

  const dispatch = useAppDispatch();
  const { currentTrackLyrics, currentTrack, statusTrack, errorTrack, statusLyrics, errorLyrics } =
    useAppSelector((state) => state.currentTrack);

  const showLiriks = () => {
    setDisabledBtn(!disabledBtn);
    console.log('trackID', trackID);
    dispatch(fetchLyrics(Number(trackID)));
  };

  useEffect(() => {
    if (currentTrackLyrics?.lyrics_body.length) dispatch(setLyrics(null));
    dispatch(fetchTrack(Number(trackID)));
  }, []);

  return (
    <>
      {statusTrack === Status.PENDING ? (
        <Spinner />
      ) : (
        <>
          {currentTrack && <TrackInfo track={currentTrack} />}
          <A.Button onClick={showLiriks} disabled={disabledBtn}>
            {ButtonContent.TRACK}
          </A.Button>
        </>
      )}

      {statusLyrics === Status.PENDING ? <Spinner /> : <TrackLyrics />}

      {errorTrack && <Error error={errorTrack} />}
      {errorLyrics && <Error error={errorLyrics} />}
    </>
  );
};

export default Track;
