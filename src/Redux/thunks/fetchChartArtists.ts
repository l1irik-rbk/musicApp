import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/constantsTypes';
import { getChartArtists } from '../../services/getChartArtists';

export const fetchChartArtists = createAsyncThunk(
  'chartArtists/fetchChartArtists',
  async ({ lang }: { lang: string }, { rejectWithValue }) => {
    try {
      const response = await axios.get(getChartArtists(lang));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      console.log(data.message.body.artist_list);

      return data.message.body.artist_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
