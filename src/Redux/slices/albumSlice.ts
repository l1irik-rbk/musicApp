import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAlbum, ITrackA, Status } from 'helpers/types';
import { fetchAlbumTracks } from 'Redux/thunks/fetchAlbumTracks';
import { fetchAlbum } from 'Redux/thunks/fetchAlbum';

export interface IAlbumTracks {
  albumTracks: ITrackA[];
  currentAlbum: null | IAlbum;
  statusAlbumTracks: null | string;
  errorAlbumTracks: null | string;
  statusCurrentAlbum: null | string;
  errorCurrentAlbum: null | string;
}

const initialState: IAlbumTracks = {
  albumTracks: [],
  currentAlbum: null,
  statusAlbumTracks: null,
  errorAlbumTracks: null,
  statusCurrentAlbum: null,
  errorCurrentAlbum: null,
};

export const albumSlice = createSlice({
  name: 'albumSlice',
  initialState,
  reducers: {
    setAlbumTracks: (state, action: PayloadAction<ITrackA[]>) => {
      state.albumTracks = action.payload;
    },
    setCurrentAlbum: (state, action: PayloadAction<null | IAlbum>) => {
      state.currentAlbum = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbumTracks.pending, (state) => {
      state.statusAlbumTracks = Status.PENDING;
      state.errorAlbumTracks = null;
    });
    builder.addCase(fetchAlbumTracks.fulfilled, (state, action: PayloadAction<ITrackA[]>) => {
      state.albumTracks = action.payload;
      state.statusAlbumTracks = Status.FULFILLED;
    });
    builder.addCase(fetchAlbumTracks.rejected, (state, action) => {
      state.statusAlbumTracks = Status.REJECTED;
      state.errorAlbumTracks = action.payload as string;
    });
    builder.addCase(fetchAlbum.pending, (state) => {
      state.statusCurrentAlbum = Status.PENDING;
      state.errorCurrentAlbum = null;
    });
    builder.addCase(fetchAlbum.fulfilled, (state, action: PayloadAction<IAlbum>) => {
      state.currentAlbum = action.payload;
      state.statusCurrentAlbum = Status.FULFILLED;
    });
    builder.addCase(fetchAlbum.rejected, (state, action) => {
      state.statusCurrentAlbum = Status.REJECTED;
      state.errorCurrentAlbum = action.payload as string;
    });
  },
});

export const { setAlbumTracks, setCurrentAlbum } = albumSlice.actions;
