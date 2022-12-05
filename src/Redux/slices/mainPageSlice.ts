import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../helpers/constantsTypes';
import { fetchTracks } from '../thunks/fetchTracks';

interface IMainPage {
  tracks: ITrackA[];
  artists: IArtistA[];
  totalTracksOrArtists: null | number;
  status: null | string;
  error: null | string;
}

export interface ITrackA {
  track: ITrack;
}

interface ITrack {
  album_id: number;
  album_name: string;
  artist_name: string;
  track_id: number;
  track_name: string;
  num_favourite: number;
}

export interface IArtistA {
  artist: IArtist;
}

interface IArtist {
  artist_id: number;
  artist_name: string;
  artist_country: string;
  begin_date: string;
  end_date: string;
  artist_alias_list: IAliases[];
}

interface IAliases {
  artist_alias: string;
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
    builder.addCase(fetchTracks.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action) => {
      if (action.payload.track_list) {
        state.tracks = action.payload.track_list;
        state.artists = [];
      } else {
        state.tracks = [];
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
