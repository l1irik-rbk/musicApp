import React, { useEffect } from 'react';
import { SingleValue } from 'react-select';
import Filters from '../components/Filters';
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
      <div></div>
    </div>
  );
};

export default Charts;
