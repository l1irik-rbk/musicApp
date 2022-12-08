import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ITrackA, Status } from '../../helpers/constantsTypes';
import { fetchAlbumTracks } from '../thunks/fetchAlbumTracks';

interface IAlbumTracks {
  albumTracks: ITrackA[];
  totalAlbumTracks: null | number;
  status: null | string;
  error: null | string;
}

const initialState: IAlbumTracks = {
  albumTracks: [],
  totalAlbumTracks: null,
  status: null,
  error: null,
};

export const albumSlice = createSlice({
  name: 'albumSlice',
  initialState,
  reducers: {
    setTotalAlbumTracks: (state, action: PayloadAction<number>) => {
      state.totalAlbumTracks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumTracks.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchAlbumTracks.fulfilled, (state, action: PayloadAction<ITrackA[]>) => {
      state.albumTracks = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchAlbumTracks.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const { setTotalAlbumTracks } = albumSlice.actions;
