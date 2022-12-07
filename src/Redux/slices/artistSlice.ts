import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICurrentArtistAlbums, Status } from '../../helpers/constantsTypes';
import { fetchAlbums } from '../thunks/fetchAlbums';

interface ICurrentArtist {
  currentArtistAlbums: ICurrentArtistAlbums[];
  totalAlbums: null | number;
  status: null | string;
  error: null | string;
}

const initialState: ICurrentArtist = {
  currentArtistAlbums: [],
  totalAlbums: null,
  status: null,
  error: null,
};

export const currentArtistSlice = createSlice({
  name: 'currentArtistSlice',
  initialState,
  reducers: {
    setTotalAlbums: (state, action: PayloadAction<number>) => {
      state.totalAlbums = action.payload;
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
        state.currentArtistAlbums = action.payload;
        state.status = Status.FULFILLED;
      }
    );
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const { setTotalAlbums } = currentArtistSlice.actions;
