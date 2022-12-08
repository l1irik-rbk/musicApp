import React, { useEffect } from 'react';
import Artists from '../components/Artists';

import Filters from '../components/Filters';
import Tracks from '../components/Tracks';
import { IOptions } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchChartArtists } from '../Redux/thunks/fetchChartArtists';
import { fetchChartTracks } from '../Redux/thunks/fetchChartTracks';

const Charts = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { searchOption, countriesOption } = useAppSelector((state) => state.filters);

  useEffect(() => {
    const lang = { lang: (countriesOption as IOptions).value };
    searchOption?.value === 'track'
      ? dispatch(fetchChartTracks(lang))
      : dispatch(fetchChartArtists(lang));
  }, [searchOption, countriesOption]);

  return (
    <div>
      <Filters />
      {searchOption?.value === 'track' ? <Tracks /> : <Artists />}
    </div>
  );
};

export default Charts;
