import { SingleValue } from 'react-select';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOptions, Status } from 'helpers/types';
import { fetchCountries } from 'Redux/thunks/fetchCountries';

interface IFilters {
  searchValue: string;
  searchOption: SingleValue<IOptions>;
  raitingOption: SingleValue<IOptions>;
  countriesOption: SingleValue<IOptions>;
  countries: {
    countriesOptions: IOptions[];
    status: null | string;
    error: null | string;
  };
}

export const searchOptions: IOptions[] = [
  { value: 'track', label: 'Tracks' },
  { value: 'artist', label: 'Artists' },
];

export const raitingOptions: IOptions[] = [
  { value: 'desc', label: 'The best' },
  { value: 'asc', label: 'The worst' },
];

export const defaultOptions = {
  searchOption: searchOptions[0],
  raitingOption: raitingOptions[0],
  countriesOption: { value: 'RU', label: 'Russian Federation' },
};

const initialState: IFilters = {
  searchValue: '',
  searchOption: defaultOptions.searchOption,
  raitingOption: defaultOptions.raitingOption,
  countriesOption: defaultOptions.countriesOption,
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
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
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

export const { setSearchValue, setSearchOption, setRaitingOption, setCountriesOption } =
  filtersSlice.actions;
