import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE, ITEMS_PER_PAGE } from '../../helpers/constants';
import { IFetchAlbumTracks, Status } from '../../helpers/constantsTypes';
import { getAlbumTracks } from '../../utils/getAlbumTracks';
import { setTotalPageCount } from '../../utils/setTotalPageCount';
import {
  IAlbumTracks,
  setAlbumTracksPageCount,
  setAlbumTracksPageNumber,
  setTotalAlbumTracks,
} from '../slices/albumSlice';

export const fetchAlbumTracks = createAsyncThunk(
  'album/fetchAlbumTracks',
  async ({ albumID, pageNumber }: IFetchAlbumTracks, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        currentAlbum: { albumTracksPageCount, totalAlbumTracks },
      } = getState() as { currentAlbum: IAlbumTracks };

      const response = await axios.get(getAlbumTracks(albumID, pageNumber));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      if (!albumTracksPageCount || !totalAlbumTracks) {
        const totalAlbumTracks: number = data.message.header.available;
        const newAlbumsPageCount: number = Math.ceil(totalAlbumTracks / ITEMS_PER_PAGE);
        const pageCount = setTotalPageCount(newAlbumsPageCount);

        dispatch(setAlbumTracksPageNumber(0));
        dispatch(setTotalAlbumTracks(totalAlbumTracks));
        dispatch(setAlbumTracksPageCount(pageCount));
      }

      console.log(data.message);
      console.log(data.message.body.track_list);
      return data.message.body.track_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
