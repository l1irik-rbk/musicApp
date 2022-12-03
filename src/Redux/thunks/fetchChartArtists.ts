import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { getChart } from '../../utils/getChart';

export const fetchChartArtists = createAsyncThunk(
  'chartArtists/fetchChartArtists',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(getChart());
      const { data } = response;

      if (response.statusText !== 'OK') {
        throw new Error('Server Error!');
      }
      console.log(data);
      // console.log(data.message.body.track_list);
      // console.log(data.message.body.track_list[0]);
      // return data.message.body.track_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
