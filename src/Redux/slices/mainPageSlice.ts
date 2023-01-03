import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IArtistA, ITrackA, Status } from 'helpers/types';
import { fetchTracksOrArtists } from 'Redux/thunks/fetchTracksOrArtists';

export interface IMainPage {
  tracks: ITrackA[];
  artists: IArtistA[];
  totalTracksOrArtists: null | number;
  pageCount: number | null;
  pageNumber: number | null;
  status: null | string;
  error: null | string;
}

const initialState: IMainPage = {
  tracks: [],
  artists: [],
  status: null,
  error: null,
  totalTracksOrArtists: null,
  pageCount: null,
  pageNumber: null,
};

export const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState,
  reducers: {
    setTotalTracksOrArtists: (state, action: PayloadAction<number | null>) => {
      state.totalTracksOrArtists = action.payload;
    },
    setPageCount: (state, action: PayloadAction<number | null>) => {
      state.pageCount = action.payload;
    },
    setPageNumber: (state, action: PayloadAction<number | null>) => {
      state.pageNumber = action.payload;
    },
    setTracks: (state, action: PayloadAction<ITrackA[]>) => {
      state.tracks = action.payload;
    },
    setArtists: (state, action: PayloadAction<IArtistA[]>) => {
      state.artists = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTracksOrArtists.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchTracksOrArtists.fulfilled, (state, action) => {
      if (action.payload.track_list) {
        state.tracks = action.payload.track_list;
        state.artists = [];
      } else {
        state.tracks = [];
        state.artists = action.payload.artist_list;
      }
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchTracksOrArtists.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const { setTotalTracksOrArtists, setPageCount, setPageNumber, setTracks, setArtists } =
  mainPageSlice.actions;
