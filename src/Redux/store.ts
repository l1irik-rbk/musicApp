import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { chartArtistsSlice } from './slices/chartArtistsSlice';
import { chartTracksSlice } from './slices/chartTracksSlice';
import { filtersSlice } from './slices/filtersSlice';
import { mainPageSlice } from './slices/mainPageSlice';
import { currentTrackSlice } from './slices/trackSlice';

const rootReducer = combineReducers({
  filters: filtersSlice.reducer,
  mainPage: mainPageSlice.reducer,
  chartTracks: chartTracksSlice.reducer,
  chartArtists: chartArtistsSlice.reducer,
  currentTrack: currentTrackSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
