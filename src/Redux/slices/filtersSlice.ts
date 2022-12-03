import { SingleValue } from 'react-select';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IOptions } from '../../helpers/constantsTypes';

interface IFilters {
  searchOption: SingleValue<IOptions>;
  raitingOption: SingleValue<IOptions>;
}

const initialState: IFilters = {
  searchOption: { value: 'track', label: 'Tracks' },
  raitingOption: { value: 'desc', label: 'The best' },
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
  },
});

export const { setSearchOption, setRaitingOption } = filtersSlice.actions;
