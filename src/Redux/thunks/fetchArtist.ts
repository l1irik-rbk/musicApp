import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/constantsTypes';
import { getArtist } from '../../utils/getArtist';

export const fetchArtist = createAsyncThunk(
  'artists/fetchArtist',
  async (artistID: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(getArtist(artistID));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      console.log(data.message.body.artist);
      return data.message.body.artist;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
