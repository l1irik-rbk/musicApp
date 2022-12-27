import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { ALL_COUNTRIES, ERROR_MESSAGE } from '../../helpers/constants';
import { ICountry, Status } from '../../helpers/types';

export const fetchCountries = createAsyncThunk(
  'filters/fetchCountries',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(ALL_COUNTRIES);
      const { data } = response;

      if (response.statusText !== Status.OK) {
        throw new Error(ERROR_MESSAGE);
      }

      return data.map((country: ICountry) => ({ value: country.alpha2Code, label: country.name }));
    } catch (error) {
      return rejectWithValue((error as AxiosError).message);
    }
  }
);
