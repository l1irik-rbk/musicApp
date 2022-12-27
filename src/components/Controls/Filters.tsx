import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { SingleValue } from 'react-select';

import { IOptions, Paths } from '../../helpers/types';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import {
  raitingOptions,
  searchOptions,
  setCountriesOption,
  setRaitingOption,
  setSearchOption,
} from '../../Redux/slices/filtersSlice';
import { fetchCountries } from '../../Redux/thunks/fetchCountries';

import * as S from '../../theme/Components/Controls/StyledFilters';
import * as C from '../../theme/Components/UI/StyledContainers';

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
    <C.ContentContainer marginB="20px">
      <Select
        styles={S.SelectStyles}
        options={searchOptions}
        value={searchOption}
        onChange={handleSearchOption}
        isSearchable={false}
      />

      {location.pathname !== Paths.CHARTS && (
        <Select
          styles={S.SelectStyles}
          options={raitingOptions}
          value={raitingOption}
          onChange={handleRaitingOption}
          isSearchable={false}
        />
      )}

      {location.pathname === Paths.CHARTS && (
        <Select
          styles={S.SelectStyles}
          options={countriesOptions as IOptions[]}
          value={countriesOption}
          onChange={handleCountriesOption}
          noOptionsMessage={() => error}
        />
      )}
    </C.ContentContainer>
  );
};

export default Filters;
