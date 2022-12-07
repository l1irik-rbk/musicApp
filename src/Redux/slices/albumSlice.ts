import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrentArtistAlbums, Status } from '../../helpers/constantsTypes';
import { fetchAlbums } from '../thunks/fetchAlbums';

interface IAlbumTracks {
  albumTracks: ICurrentArtistAlbums[];
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
    builder.addCase(fetchAlbums.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(
      fetchAlbums.fulfilled,
      (state, action: PayloadAction<ICurrentArtistAlbums[]>) => {
        state.albumTracks = action.payload;
        state.status = Status.FULFILLED;
      }
    );
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const { setTotalAlbumTracks } = albumSlice.actions;
