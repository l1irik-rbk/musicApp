import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '../../helpers/constants';
import { IFetchTracks, Status } from '../../helpers/constantsTypes';
import { findTracksOrArtists } from '../../utils/find';
import { setTotalTracksOrArtists } from '../slices/mainPageSlice';

export const fetchTracks = createAsyncThunk(
  'mainPage/fetchTracks',
  async (
    { searchValue, searchOption, raitingOption }: IFetchTracks,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axios.get(
        findTracksOrArtists(searchValue, searchOption!.value, raitingOption!.value)
      );
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      const totalTracks: number = data.message.header.available;
      dispatch(setTotalTracksOrArtists(totalTracks));

      console.log(data.message.body.track_list);
      console.log(data.message.body.artist_list);
      return data.message.body;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
