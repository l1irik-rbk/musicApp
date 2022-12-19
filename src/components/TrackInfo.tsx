import React from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ITrack } from '../helpers/constantsTypes';
import MusicLinks from './MusicLinks';

const Title = styled.h2`
  font-size: 30px;
  text-align: center;
  margin-bottom: 10px;

  @media (min-width: 767px) {
    font-size: 35px;
    margin-bottom: 20px;
  }
`;

const TrackItems = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TrackItem = styled.li`
  font-size: 20px;
  margin-bottom: 5px;
  transition: all 0.5s;

  &:first-child:hover {
    color: hsl(0deg 1% 60%);
  }

  & span {
    font-weight: 700;

    & svg {
      position: relative;
      top: 3px;
    }
  }

  @media (min-width: 767px) {
    font-size: 25px;
    margin-bottom: 10px;
  }
`;

const TrackInfo = ({ track }: { track: ITrack | null }): JSX.Element => {
  console.log(track);
  return (
    <>
      {track && (
        <>
          <Title>
            {track.track_name} - {track.artist_name}
          </Title>
          <TrackItems>
            <TrackItem>
              <Link to={`/album/${track.album_id}`}>
                <span> Album:</span> {track.album_name}
              </Link>
            </TrackItem>
            <TrackItem>
              <span>
                Likes <IoHeartOutline />:
              </span>{' '}
              {track.num_favourite}
            </TrackItem>
            <TrackItem>
              <MusicLinks trackName={track.track_name} />
            </TrackItem>
          </TrackItems>
        </>
      )}
    </>
  );
};

export default TrackInfo;
