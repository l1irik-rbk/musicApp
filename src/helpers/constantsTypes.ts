import { SingleValue } from 'react-select';

export enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
  OK = 'OK',
  SUCCESS = 200,
}

export interface IRoutes {
  path?: string;
  index?: boolean;
  element: () => JSX.Element;
}

export interface IOptions {
  value: string;
  label: string;
}

export interface IFetchTracks {
  searchValue: string;
  searchOption: SingleValue<IOptions>;
  raitingOption: SingleValue<IOptions>;
}

export interface ICountry {
  name: string;
  alpha2Code: string;
}
