import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';

import { searchOptions, raitingOptions } from '../helpers/constants';
import { IOptions } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import {
  setCountriesOption,
  setRaitingOption,
  setSearchOption,
} from '../Redux/slices/filtersSlice';
import { fetchCountries } from '../Redux/thunks/fetchCountries';

const Filters = () => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const {
    raitingOption,
    searchOption,
    countriesOption,
    countries: { countriesOptions, error },
  } = useAppSelector((state) => state.filters);

  useEffect(() => {
    if (!countriesOptions.length) dispatch(fetchCountries());
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
      <Select
        options={raitingOptions}
        value={raitingOption}
        onChange={handleRaitingOption}
        isSearchable={false}
      />

      {location.pathname === '/charts' && (
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
