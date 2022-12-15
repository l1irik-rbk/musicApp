import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/constantsTypes';
import { getTrackLyrics } from '../../utils/getTrackLyrics';

export const fetchLyrics = createAsyncThunk(
  'tracks/fetchLyrics',
  async (trackID: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(getTrackLyrics(trackID));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      console.log(data.message.body);
      return data.message.body.lyrics;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
