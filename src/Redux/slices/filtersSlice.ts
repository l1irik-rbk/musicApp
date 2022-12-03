import { SingleValue } from 'react-select';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOptions, Status } from '../../helpers/constantsTypes';
import { fetchCountries } from '../thunks/fetchCountries';

interface IFilters {
  searchOption: SingleValue<IOptions>;
  raitingOption: SingleValue<IOptions>;
  countriesOption: SingleValue<IOptions>;
  countries: {
    countriesOptions: IOptions[];
    status: null | string;
    error: null | string;
  };
}

const initialState: IFilters = {
  searchOption: { value: 'track', label: 'Tracks' },
  raitingOption: { value: 'desc', label: 'The best' },
  countriesOption: { value: 'RU', label: 'Russian Federation' },
  countries: {
    countriesOptions: [],
    status: null,
    error: null,
  },
};

export const filtersSlice = createSlice({
  name: 'filtersSlice',
  initialState,
  reducers: {
    setSearchOption: (state, action: PayloadAction<SingleValue<IOptions>>) => {
      state.searchOption = action.payload;
    },
    setRaitingOption: (state, action: PayloadAction<SingleValue<IOptions>>) => {
      state.raitingOption = action.payload;
    },
    setCountriesOption: (state, action: PayloadAction<SingleValue<IOptions>>) => {
      state.countriesOption = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.countries.status = Status.PENDING;
      state.countries.error = null;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      state.countries.countriesOptions = action.payload;
      state.countries.status = Status.FULFILLED;
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      state.countries.status = Status.REJECTED;
      state.countries.error = action.payload as string;
    });
  },
});

export const { setSearchOption, setRaitingOption, setCountriesOption } = filtersSlice.actions;
