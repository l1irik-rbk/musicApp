import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { IArtistA } from '../helpers/constantsTypes';

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

const ArtistsList = ({ artists }: { artists: IArtistA[] }): JSX.Element => {
  return (
    <>
      {artists.map(({ artist }) => (
        <StyledTrack key={artist.artist_id}>
          <Link to={`/artists/${artist.artist_id}`}>
            <Title>{artist.artist_name}</Title>
          </Link>
        </StyledTrack>
      ))}
    </>
  );
};

export default ArtistsList;
