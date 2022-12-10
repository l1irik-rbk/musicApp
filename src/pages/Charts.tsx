import React, { useEffect } from 'react';
import Artists from '../components/Artists';

import Filters from '../components/Filters';
import Tracks from '../components/Tracks';
import { IOptions, Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchChartArtists } from '../Redux/thunks/fetchChartArtists';
import { fetchChartTracks } from '../Redux/thunks/fetchChartTracks';

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
    <div>
      <Filters />

      {statusTracks === Status.FULFILLED && <>{searchOption?.value === 'track' && <Tracks />}</>}
      {statusArtists === Status.FULFILLED && <>{searchOption?.value === 'artist' && <Artists />}</>}
      {statusArtists === Status.PENDING && <div>Loading...</div>}
      {statusTracks === Status.PENDING && <div>Loading...</div>}
      {errorArtists && <div>{errorArtists}</div>}
      {errorTracks && <div>{errorTracks}</div>}
    </div>
  );
};

export default Charts;
