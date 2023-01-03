import React, { useEffect } from 'react';

import { Error, Spinner } from 'components/UI';
import { Filters } from 'components/Controls';
import { Tracks } from 'components/Track';
import { Artists } from 'components/Artist';

import { fetchChartArtists, fetchChartTracks } from 'Redux/thunks';
import { useAppDispatch, useAppSelector } from 'Redux/hooks';

import { IOptions, Status } from 'helpers/types';

import * as C from 'theme/Components/UI/StyledContainers';

const Charts = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { searchOption, countriesOption } = useAppSelector((state) => state.filters);
  const { status: statusArtists, error: errorArtists } = useAppSelector(
    (state) => state.chartArtists
  );
  const { status: statusTracks, error: errorTracks } = useAppSelector((state) => state.chartTracks);

  useEffect(() => {
    const lang = { lang: (countriesOption as IOptions).value };
    searchOption?.value === 'track'
      ? dispatch(fetchChartTracks(lang))
      : dispatch(fetchChartArtists(lang));
  }, [searchOption, countriesOption]);

  return (
    <C.ContentContainer>
      <Filters />

      {statusTracks === Status.FULFILLED && <>{searchOption?.value === 'track' && <Tracks />}</>}
      {statusArtists === Status.FULFILLED && <>{searchOption?.value === 'artist' && <Artists />}</>}
      {statusArtists === Status.PENDING && <Spinner />}
      {statusTracks === Status.PENDING && <Spinner />}
      {errorArtists && <Error error={errorArtists} />}
      {errorTracks && <Error error={errorTracks} />}
    </C.ContentContainer>
  );
};

export default Charts;
