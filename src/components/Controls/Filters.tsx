import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Select, { SingleValue, StylesConfig } from 'react-select';
import styled from 'styled-components';

import { IOptions, Paths } from '../../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import {
  raitingOptions,
  searchOptions,
  setCountriesOption,
  setRaitingOption,
  setSearchOption,
} from '../../Redux/slices/filtersSlice';
import { fetchCountries } from '../../Redux/thunks/fetchCountries';

type IsMulti = false;

export const selectStyles: StylesConfig<IOptions, IsMulti> = {
  control: (provided) => ({
    ...provided,
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: 'inherit',
    padding: '0.25rem',
    width: '300px',
    borderRadius: 'none',
  }),
  option: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
};

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 20px;
`;

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
    <Controls>
      <Select
        styles={selectStyles}
        options={searchOptions}
        value={searchOption}
        onChange={handleSearchOption}
        isSearchable={false}
      />

      {location.pathname !== Paths.CHARTS && (
        <Select
          styles={selectStyles}
          options={raitingOptions}
          value={raitingOption}
          onChange={handleRaitingOption}
          isSearchable={false}
        />
      )}

      {location.pathname === Paths.CHARTS && (
        <Select
          styles={selectStyles}
          options={countriesOptions as IOptions[]}
          value={countriesOption}
          onChange={handleCountriesOption}
          noOptionsMessage={() => error}
        />
      )}
    </Controls>
  );
};

export default Filters;
