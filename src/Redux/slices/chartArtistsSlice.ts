import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status } from '../../helpers/constantsTypes';
import { fetchChartArtists } from '../thunks/fetchChartArtists';

interface IChartArtists {
  chartArtists: [];
  status: null | string;
  error: null | string;
}

const initialState: IChartArtists = {
  chartArtists: [],
  status: null,
  error: null,
};

export const chartArtistsSlice = createSlice({
  name: 'chartArtistsSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChartArtists.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchChartArtists.fulfilled, (state, action: PayloadAction<[]>) => {
      state.chartArtists = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchChartArtists.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const {} = chartArtistsSlice.actions;
