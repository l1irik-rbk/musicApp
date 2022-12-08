import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/constantsTypes';
import { getAlbumTracks } from '../../utils/getAlbumTracks';
import { setTotalAlbumTracks } from '../slices/albumSlice';

export const fetchAlbumTracks = createAsyncThunk(
  'album/fetchAlbumTracks',
  async (albumID: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(getAlbumTracks(albumID));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      const totalAlbums: number = data.message.header.available;

      dispatch(setTotalAlbumTracks(totalAlbums));
      console.log(data.message);
      console.log(data.message.body.track_list);
      return data.message.body.track_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
