import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { getChartTracks } from '../../utils/getChartTracks';

export const fetchChartTracks = createAsyncThunk(
  'chartTracks/fetchChartTracks',
  async (searchValue: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(getChartTracks());
      const { data } = response;
      if (response.statusText !== 'OK') {
        throw new Error('Server Error!');
      }
      console.log(data.message.body.track_list);
      console.log(data.message.body.track_list[0]);
      // return data.message.body.track_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
