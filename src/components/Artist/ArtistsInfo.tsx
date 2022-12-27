import React from 'react';

import { IArtist } from '../../helpers/types';
import { updateDateFormat } from '../../utils/updateDateFormat';
import { useAppSelector } from '../../Redux/hooks';
import { NO_DATE } from '../../helpers/constants';

import * as A from '../../theme/Components/UI/StyledMain';

const ArtistsInfo = React.memo(({ artist }: { artist: IArtist | null }): JSX.Element => {
  const { countriesOptions } = useAppSelector((state) => state.filters.countries);

  const beginDate = updateDateFormat(artist?.begin_date);
  const endDate = updateDateFormat(artist?.end_date);

  const country = artist?.artist_country;
  const artistCountry = countriesOptions.filter(
    (countryOpt) => countryOpt.value.toLowerCase() === country?.toLowerCase()
  )[0];

  const aliases = artist?.artist_alias_list.length ? artist?.artist_alias_list : '';

  console.log(artistCountry, country);

  console.log(artist);
  return (
    <>
      {artist && (
        <>
          <A.PageTitle>{artist.artist_name}</A.PageTitle>
          <A.PageSubTitle>
            {beginDate !== NO_DATE ? beginDate : ''} {endDate !== NO_DATE ? `- ${endDate}` : ''}
          </A.PageSubTitle>

          <A.PageItems>
            {country && (
              <A.PageItem>
                <span>Country:</span> {artistCountry ? artistCountry.label : country}
              </A.PageItem>
            )}
          </A.PageItems>
          {aliases && (
            <>
              <A.PageSubTitle textAlign="start" fontWeight="700">
                Aliases:
              </A.PageSubTitle>
              <A.PageItems flexDirection="row" justifyContent="flex-start">
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
});

export default ArtistsInfo;
