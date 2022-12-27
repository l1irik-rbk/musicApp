import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/types';
import { getTrack } from '../../services/getTrack';

export const fetchTrack = createAsyncThunk(
  'tracks/fetchTrack',
  async (trackID: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(getTrack(trackID));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      return data.message.body.track;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
