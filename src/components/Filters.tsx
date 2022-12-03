import React from 'react';
import Select, { SingleValue } from 'react-select';

import { searchOptions, raitingOptions } from '../helpers/constants';
import { IOptions } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setRaitingOption, setSearchOption } from '../Redux/slices/filtersSlice';

const Filters = () => {
  const { raitingOption, searchOption } = useAppSelector((state) => state.filters);
  const dispatch = useAppDispatch();

  const handleSearchOption = (value: SingleValue<IOptions>) => {
    dispatch(setSearchOption(value));
  };

  const handleRaitingOption = (value: SingleValue<IOptions>) => {
    dispatch(setRaitingOption(value));
  };

  return (
    <div>
      <Select options={searchOptions} value={searchOption} onChange={handleSearchOption} />
      <Select options={raitingOptions} value={raitingOption} onChange={handleRaitingOption} />
    </div>
  );
};

export default Filters;
