import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArtistA, ITrackA, Status } from '../../helpers/constantsTypes';
import { fetchTracksOrArtists } from '../thunks/fetchTracksOrArtists';

interface IMainPage {
  tracks: ITrackA[];
  artists: IArtistA[];
  totalTracksOrArtists: null | number;
  status: null | string;
  error: null | string;
}

const initialState: IMainPage = {
  tracks: [],
  artists: [],
  status: null,
  error: null,
  totalTracksOrArtists: null,
};

export const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState,
  reducers: {
    setTotalTracksOrArtists: (state, action: PayloadAction<number>) => {
      state.totalTracksOrArtists = action.payload;
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

export const { setTotalTracksOrArtists } = mainPageSlice.actions;
