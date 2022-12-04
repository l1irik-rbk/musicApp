import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';

import { IOptions, Paths } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import {
  raitingOptions,
  searchOptions,
  setCountriesOption,
  setRaitingOption,
  setSearchOption,
} from '../Redux/slices/filtersSlice';
import { fetchCountries } from '../Redux/thunks/fetchCountries';

const Filters = (): JSX.Element => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const {
    raitingOption,
    searchOption,
    countriesOption,
    countries: { countriesOptions, error },
  } = useAppSelector((state) => state.filters);

  useEffect(() => {
    if (!countriesOptions.length && location.pathname === Paths.CHARTS) dispatch(fetchCountries());
  }, []);

  const handleSearchOption = (value: SingleValue<IOptions>) => {
    dispatch(setSearchOption(value));
  };

  const handleRaitingOption = (value: SingleValue<IOptions>) => {
    dispatch(setRaitingOption(value));
  };

  const handleCountriesOption = (value: SingleValue<IOptions>) => {
    dispatch(setCountriesOption(value));
  };

  return (
    <div>
      <Select
        options={searchOptions}
        value={searchOption}
        onChange={handleSearchOption}
        isSearchable={false}
      />

      {location.pathname !== Paths.CHARTS && (
        <Select
          options={raitingOptions}
          value={raitingOption}
          onChange={handleRaitingOption}
          isSearchable={false}
        />
      )}

      {location.pathname === Paths.CHARTS && (
        <Select
          options={countriesOptions as IOptions[]}
          value={countriesOption}
          onChange={handleCountriesOption}
          noOptionsMessage={() => error}
        />
      )}
    </div>
  );
};

export default Filters;
