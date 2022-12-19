import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Error from '../components/Error';
import Spinner from '../components/Spinner';
import TrackInfo from '../components/TrackInfo';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setLyrics } from '../Redux/slices/trackSlice';
import { fetchLyrics } from '../Redux/thunks/fetchLyrics';
import { fetchTrack } from '../Redux/thunks/fetchTrack';

export const Button = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: inherit;
  border: 1px solid hsl(200deg 15% 8%);
  padding: 5px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  margin-bottom: 5px;
`;

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
          <Button onClick={showLiriks} disabled={disabledBtn}>
            Show liriks
          </Button>
        </>
      )}

      {statusLyrics === Status.PENDING ? (
        <Spinner />
      ) : (
        <div>
          {currentTrackLyrics?.lyrics_body.split('\n').map((string, index) => (
            <Paragraph key={index}>{string}</Paragraph>
          ))}
        </div>
      )}

      {errorTrack && <Error error={errorTrack} />}
      {errorLyrics && <Error error={errorLyrics} />}
    </>
  );
};

export default Track;
