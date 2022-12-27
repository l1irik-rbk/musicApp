import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/types';
import { getAlbumTracks } from '../../services/getAlbumTracks';

export const fetchAlbumTracks = createAsyncThunk(
  'album/fetchAlbumTracks',
  async (albumID: string | number | null | undefined, { rejectWithValue }) => {
    try {
      const response = await axios.get(getAlbumTracks(albumID));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      return data.message.body.track_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
