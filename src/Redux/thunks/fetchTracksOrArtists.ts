import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ERROR_MESSAGE, ITEMS_PER_PAGE } from 'helpers/constants';
import { IFetchTracksOrArtists, Status } from 'helpers/types';
import { findTracksOrArtists } from 'services/findTracksOrArtists';
import { setTotalPageCount } from 'utils/setTotalPageCount';
import { IMainPage, setPageCount, setTotalTracksOrArtists } from 'Redux/slices/mainPageSlice';

export const fetchTracksOrArtists = createAsyncThunk(
  'mainPage/fetchTracks',
  async (
    { searchValue, searchOption, raitingOption, pageNumber }: IFetchTracksOrArtists,
    { rejectWithValue, dispatch, getState }
  ) => {
    try {
      const {
        mainPage: { pageCount, totalTracksOrArtists },
      } = getState() as { mainPage: IMainPage };

      const response = await axios.get(
        findTracksOrArtists(searchValue, searchOption!.value, raitingOption!.value, pageNumber)
      );
      const { data } = response;

      if (response.statusText !== Status.OK || data.message.header.status_code !== Status.SUCCESS) {
        throw new Error(ERROR_MESSAGE);
      }

      if (!pageCount || !totalTracksOrArtists) {
        const newTotalTracks: number = data.message.header.available;
        const newPageCount: number = Math.ceil(newTotalTracks / ITEMS_PER_PAGE);
        const pageCount = setTotalPageCount(newPageCount);

        dispatch(setTotalTracksOrArtists(newTotalTracks));
        dispatch(setPageCount(pageCount));
      }

      return data.message.body;
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
