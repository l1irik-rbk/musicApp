import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { findTracks } from '../../helpers/constants';
import { setTotalTracks } from '../slices/mainPageSlice';

export const fetchTracks = createAsyncThunk(
  'mainPage/fetchTracks',
  async (searchValue: string, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(findTracks(searchValue));
      const { data } = response;

      if (response.statusText !== 'OK') {
        throw new Error('Server Error!');
      }

      const totalTracks = data.message.header.available;
      dispatch(setTotalTracks(totalTracks));

      console.log(data.message.body.track_list);
      console.log(data.message.body.track_list[0]);
      return data.message.body.track_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
