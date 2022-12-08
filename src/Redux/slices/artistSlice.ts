import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IArtist, ICurrentArtistAlbums, Status } from '../../helpers/constantsTypes';
import { fetchAlbums } from '../thunks/fetchAlbums';
import { fetchArtist } from '../thunks/fetchArtist';

interface ICurrentArtist {
  currentArtistAlbums: ICurrentArtistAlbums[];
  currentArtist: IArtist | null;
  totalAlbums: null | number;
  status: null | string;
  error: null | string;
}

const initialState: ICurrentArtist = {
  currentArtistAlbums: [],
  currentArtist: null,
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
    builder.addCase(fetchArtist.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchArtist.fulfilled, (state, action: PayloadAction<IArtist>) => {
      state.currentArtist = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchArtist.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const { setTotalAlbums } = currentArtistSlice.actions;
