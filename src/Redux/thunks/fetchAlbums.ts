import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { ERROR_MESSAGE, ITEMS_PER_PAGE } from '../../helpers/constants';
import { IFetchAlbums, Status } from '../../helpers/constantsTypes';
import { getArtistAlbums } from '../../services/getArtistAlbums';
import { setTotalPageCount } from '../../utils/setTotalPageCount';
import {
  ICurrentArtist,
  setAlbumsPageCount,
  setAlbumsPageNumber,
  setTotalAlbums,
} from '../slices/artistSlice';

export const fetchAlbums = createAsyncThunk(
  'artists/fetchAlbums',
  async ({ artistID, pageNumber }: IFetchAlbums, { rejectWithValue, dispatch, getState }) => {
    try {
      const {
        currentArtist: { albumsPageCount, totalAlbums },
      } = getState() as { currentArtist: ICurrentArtist };
      console.log('pageNumber', pageNumber);
      const response = await axios.get(getArtistAlbums(artistID, pageNumber));
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      if (!albumsPageCount || !totalAlbums) {
        const newTotalAlbums: number = data.message.header.available;
        const newAlbumsPageCount: number = Math.ceil(newTotalAlbums / ITEMS_PER_PAGE);
        const pageCount = setTotalPageCount(newAlbumsPageCount);

        dispatch(setAlbumsPageNumber(0));
        dispatch(setTotalAlbums(newTotalAlbums));
        dispatch(setAlbumsPageCount(pageCount));
      }

      console.log(data.message.body.album_list);
      return data.message.body.album_list;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
