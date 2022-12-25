import React from 'react';
import { Link } from 'react-router-dom';

import { IArtistA } from '../../helpers/constantsTypes';

import * as A from '../../theme/Components/UI/StyledMain';

const ArtistsList = React.memo(({ artists }: { artists: IArtistA[] }): JSX.Element => {
  return (
    <>
      {artists.map(({ artist }) => (
        <A.Card key={artist.artist_id}>
          <A.CardTitle marginBottom="0">
            <Link to={`/artists/${artist.artist_id}`}>{artist.artist_name}</Link>
          </A.CardTitle>
        </A.Card>
      ))}
    </>
  );
});

export default ArtistsList;
