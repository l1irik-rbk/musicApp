import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ITrackA } from '../helpers/constantsTypes';
import MusicLinks from './MusicLinks';

const StyledTrack = styled.div`
  border: 1px solid hsl(207, 26%, 17%);
  border-radius: 1rem;
  padding: 10px;
  width: 300px;

  @media (min-width: 767px) {
    width: 500px;
  }
`;

const Title = styled.h3`
  display: inline-block;
  margin-bottom: 10px;
  transition: all 0.5s;

  &:hover {
    color: hsl(0deg 1% 60%);
  }

  @media (min-width: 767px) {
    font-size: 25px;
  }
`;

const TracksList = ({ tracks }: { tracks: ITrackA[] | null }): JSX.Element => {
  return (
    <>
      {tracks &&
        tracks.map(({ track }) => (
          <StyledTrack key={track.track_id}>
            <Link to={`/tracks/${track.track_id}`}>
              <Title>
                {track.track_name} - {track.artist_name}
              </Title>
            </Link>
            <MusicLinks trackName={track.track_name} />
          </StyledTrack>
        ))}
    </>
  );
};

export default TracksList;
