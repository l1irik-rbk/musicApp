import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICurrentTrackLyricks, ITrack, Status } from '../../helpers/constantsTypes';
import { fetchLyrics } from '../thunks/fetchLyrics';
import { fetchTrack } from '../thunks/fetchTrack';

interface ICurrentTrack {
  currentTrackLyrics: ICurrentTrackLyricks | null;
  currentTrack: ITrack | null;
  status: null | string;
  error: null | string;
}

const initialState: ICurrentTrack = {
  currentTrackLyrics: null,
  currentTrack: null,
  status: null,
  error: null,
};

export const currentTrackSlice = createSlice({
  name: 'currentTrackSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLyrics.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchLyrics.fulfilled, (state, action: PayloadAction<ICurrentTrackLyricks>) => {
      state.currentTrackLyrics = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchLyrics.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
    builder.addCase(fetchTrack.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchTrack.fulfilled, (state, action) => {
      state.currentTrack = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchTrack.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const {} = currentTrackSlice.actions;
