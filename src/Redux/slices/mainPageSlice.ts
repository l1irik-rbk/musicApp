import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../helpers/constantsTypes';
import { fetchTracks } from '../thunks/fetchTracks';

interface IMainPage {
  tracks: [] | null;
  artists: [] | null;
  totalTracks: null | number;
  status: null | string;
  error: null | string;
}

const initialState: IMainPage = {
  tracks: null,
  artists: null,
  status: null,
  error: null,
  totalTracks: null,
};

export const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState,
  reducers: {
    setTotalTracksOrArtists: (state, action: PayloadAction<number>) => {
      state.totalTracks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      if (action.payload.track_list) {
        state.tracks = action.payload.track_list;
        state.artists = null;
      } else {
        state.tracks = null;
        state.artists = action.payload.artist_list;
      }
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchTracks.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const { setTotalTracksOrArtists } = mainPageSlice.actions;
