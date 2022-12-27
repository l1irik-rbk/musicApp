import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/types';
import { getAlbum } from '../../services/getAlbum';

export const fetchAlbum = createAsyncThunk(
  'album/fetchAlbum',
  async (albumID: string | number, { rejectWithValue }) => {
    try {
      const response = await axios.get(getAlbum(albumID));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      console.log(data.message.body.album);
      return data.message.body.album;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
