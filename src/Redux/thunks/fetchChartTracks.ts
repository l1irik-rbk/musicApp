import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/constantsTypes';
import { getChartTracks } from '../../utils/getChartTracks';

export const fetchChartTracks = createAsyncThunk(
  'chartTracks/fetchChartTracks',
  async ({ lang }: { lang: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(getChartTracks(lang));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      console.log(data.message.body.track_list);
      return data.message.body.track_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
