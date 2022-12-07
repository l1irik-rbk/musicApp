import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE } from '../../helpers/constants';
import { Status } from '../../helpers/constantsTypes';
import { getArtistAlbums } from '../../utils/getArtistAlbums';
import { setTotalAlbumTracks } from '../slices/albumSlice';

export const fetchAlbumTracks = createAsyncThunk(
  'artists/fetchAlbumTracks',
  async (albumID: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(getArtistAlbums(artistID));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      const totalAlbums: number = data.message.header.available;

      dispatch(setTotalAlbumTracks(totalAlbums));

      console.log(data.message.body);
      // return data.message.body.album_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
