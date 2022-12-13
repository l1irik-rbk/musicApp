import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IArtist, ICurrentArtistAlbums, Status } from '../../helpers/constantsTypes';
import { fetchAlbums } from '../thunks/fetchAlbums';
import { fetchArtist } from '../thunks/fetchArtist';

export interface ICurrentArtist {
  currentArtistAlbums: ICurrentArtistAlbums[];
  currentArtist: IArtist | null;
  totalAlbums: null | number;
  albumsPageCount: null | number;
  albumsPageNumber: null | number;
  statusAlbums: null | string;
  errorAlbums: null | string;
  statusArtist: null | string;
  errorArtist: null | string;
}

const initialState: ICurrentArtist = {
  currentArtistAlbums: [],
  currentArtist: null,
  totalAlbums: null,
  albumsPageCount: null,
  albumsPageNumber: null,
  statusAlbums: null,
  errorAlbums: null,
  statusArtist: null,
  errorArtist: null,
};

export const currentArtistSlice = createSlice({
  name: 'currentArtistSlice',
  initialState,
  reducers: {
    setTotalAlbums: (state, action: PayloadAction<number | null>) => {
      state.totalAlbums = action.payload;
    },
    setAlbumsPageCount: (state, action: PayloadAction<number | null>) => {
      state.albumsPageCount = action.payload;
    },
    setAlbumsPageNumber: (state, action: PayloadAction<number | null>) => {
      state.albumsPageNumber = action.payload;
    },
    setCurrentArtistAlbums: (state, action: PayloadAction<ICurrentArtistAlbums[]>) => {
      state.currentArtistAlbums = action.payload;
    },
    setCurrentArtist: (state, action: PayloadAction<null>) => {
      state.currentArtist = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.pending, (state) => {
      state.statusAlbums = Status.PENDING;
      state.errorAlbums = null;
    });
    builder.addCase(
      fetchAlbums.fulfilled,
      (state, action: PayloadAction<ICurrentArtistAlbums[]>) => {
        state.currentArtistAlbums = action.payload;
        state.statusAlbums = Status.FULFILLED;
      }
    );
    builder.addCase(fetchAlbums.rejected, (state, action) => {
      state.statusAlbums = Status.REJECTED;
      state.errorAlbums = action.payload as string;
    });
    builder.addCase(fetchArtist.pending, (state) => {
      state.statusArtist = Status.PENDING;
      state.errorArtist = null;
    });
    builder.addCase(fetchArtist.fulfilled, (state, action: PayloadAction<IArtist>) => {
      state.currentArtist = action.payload;
      state.statusArtist = Status.FULFILLED;
    });
    builder.addCase(fetchArtist.rejected, (state, action) => {
      state.statusArtist = Status.REJECTED;
      state.errorArtist = action.payload as string;
    });
  },
});

export const {
  setTotalAlbums,
  setAlbumsPageCount,
  setAlbumsPageNumber,
  setCurrentArtistAlbums,
  setCurrentArtist,
} = currentArtistSlice.actions;
