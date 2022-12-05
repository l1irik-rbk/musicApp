import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../helpers/constantsTypes';
import { fetchLyrics } from '../thunks/fetchLyrics';

interface ITrack {
  currentTrack: ICurrentTrack | null;
  status: null | string;
  error: null | string;
}

interface ICurrentTrack {
  lyrics_id: number;
  lyrics_body: string;
  lyrics_copyright: string;
}

const initialState: ITrack = {
  currentTrack: null,
  status: null,
  error: null,
};

export const currentTrackSlice = createSlice({
  name: 'currentTrackSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLyrics.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchLyrics.fulfilled, (state, action: PayloadAction<ICurrentTrack>) => {
      state.currentTrack = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchLyrics.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const {} = currentTrackSlice.actions;
