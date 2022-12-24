import React from 'react';

import { IArtist } from '../helpers/constantsTypes';
import * as A from '../theme/StyledMain';

const ArtistsInfo = ({ artist }: { artist: IArtist | null }): JSX.Element => {
  return (
    <>
      {artist && (
        <>
          <A.PageTitle>{artist.artist_name}</A.PageTitle>
          <A.PageSubTitle>
            {artist.begin_date} - {artist.end_date}
          </A.PageSubTitle>
          <A.PageItems>
            <A.PageItem>
              <span>Country:</span> {artist.artist_country}
            </A.PageItem>
          </A.PageItems>
          {artist.artist_alias_list && (
            <>
              <A.PageSubTitle textAlign={'start'} fontWeight={'700'}>
                Aliases:
              </A.PageSubTitle>
              <A.PageItems flexDirection={'row'} justifyContent={'flex-start'}>
                {artist.artist_alias_list.map(({ artist_alias }, index) => (
                  <A.PageItem key={artist_alias}>
                    {artist_alias}
                    {artist.artist_alias_list.length - 1 === index ? '' : ','}
                  </A.PageItem>
                ))}
              </A.PageItems>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ArtistsInfo;
