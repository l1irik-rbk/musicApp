import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrentTrackLyricks, ITrack, Status } from '../../helpers/constantsTypes';
import { fetchLyrics } from '../thunks/fetchLyrics';
import { fetchTrack } from '../thunks/fetchTrack';

interface ICurrentTrack {
  currentTrackLyrics: ICurrentTrackLyricks | null;
  currentTrack: ITrack | null;
  statusLyrics: null | string;
  errorLyrics: null | string;
  statusTrack: null | string;
  errorTrack: null | string;
}

const initialState: ICurrentTrack = {
  currentTrackLyrics: null,
  currentTrack: null,
  statusLyrics: null,
  errorLyrics: null,
  statusTrack: null,
  errorTrack: null,
};

export const currentTrackSlice = createSlice({
  name: 'currentTrackSlice',
  initialState,
  reducers: {
    setLyrics: (state, action: PayloadAction<ICurrentTrackLyricks | null>) => {
      state.currentTrackLyrics = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLyrics.pending, (state) => {
      state.statusLyrics = Status.PENDING;
      state.errorLyrics = null;
    });
    builder.addCase(fetchLyrics.fulfilled, (state, action: PayloadAction<ICurrentTrackLyricks>) => {
      state.currentTrackLyrics = action.payload;
      state.statusLyrics = Status.FULFILLED;
    });
    builder.addCase(fetchLyrics.rejected, (state, action) => {
      state.statusLyrics = Status.REJECTED;
      state.errorLyrics = action.payload as string;
    });
    builder.addCase(fetchTrack.pending, (state) => {
      state.statusTrack = Status.PENDING;
      state.errorTrack = null;
    });
    builder.addCase(fetchTrack.fulfilled, (state, action) => {
      state.currentTrack = action.payload;
      state.statusTrack = Status.FULFILLED;
    });
    builder.addCase(fetchTrack.rejected, (state, action) => {
      state.statusTrack = Status.REJECTED;
      state.errorTrack = action.payload as string;
    });
  },
});

export const { setLyrics } = currentTrackSlice.actions;
