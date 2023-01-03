import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Status } from 'helpers/types';
import { fetchChartTracks } from '../thunks/fetchChartTracks';

interface IChartTracks {
  chartTracks: [];
  status: null | string;
  error: null | string;
}

const initialState: IChartTracks = {
  chartTracks: [],
  status: null,
  error: null,
};

export const chartTracksSlice = createSlice({
  name: 'chartTracksSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChartTracks.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchChartTracks.fulfilled, (state, action: PayloadAction<[]>) => {
      state.chartTracks = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchChartTracks.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const {} = chartTracksSlice.actions;
