import React, { useEffect } from 'react';

import Artists from '../components/Artist/Artists';
import Error from '../components/UI/Error';
import Filters from '../components/Controls/Filters';
import Spinner from '../components/UI/Spinner';
import Tracks from '../components/Track/Tracks';
import { IOptions, Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchChartArtists } from '../Redux/thunks/fetchChartArtists';
import { fetchChartTracks } from '../Redux/thunks/fetchChartTracks';

import * as C from '../theme/Components/UI/StyledContainers';

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
