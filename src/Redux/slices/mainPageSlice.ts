import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Status } from '../../helpers/constants';
import { fetchTracks } from '../thunks/fetchTracks';

interface IMainPage {
  tracks: [];
  totalTracks: null | number;
  status: null | string;
  error: null | string;
}

const initialState: IMainPage = {
  tracks: [],
  status: null,
  error: null,
  totalTracks: null,
};

export const mainPageSlice = createSlice({
  name: 'mainPageSlice',
  initialState,
  reducers: {
    setTotalTracks: (state, action) => {
      state.totalTracks = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTracks.pending, (state) => {
      state.status = Status.PENDING;
      state.error = null;
    });
    builder.addCase(fetchTracks.fulfilled, (state, action: PayloadAction<[]>) => {
      state.tracks = action.payload;
      state.status = Status.FULFILLED;
    });
    builder.addCase(fetchTracks.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.error = action.payload as string;
    });
  },
});

export const { setTotalTracks } = mainPageSlice.actions;
