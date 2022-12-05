import { SingleValue } from 'react-select';

export enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
  OK = 'OK',
  SUCCESS = 200,
}

export enum Paths {
  DEFAULT = '/',
  CHARTS = '/charts',
  FAQ = '/FAQ',
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

export interface ITrackA {
  track: ITrack;
}

export interface ITrack {
  album_id: number;
  album_name: string;
  artist_name: string;
  track_id: number;
  track_name: string;
  num_favourite: number;
}

export interface IArtistA {
  artist: IArtist;
}

interface IArtist {
  artist_id: number;
  artist_name: string;
  artist_country: string;
  begin_date: string;
  end_date: string;
  artist_alias_list: IAliases[];
}

interface IAliases {
  artist_alias: string;
}

export interface ICurrentTrackLyricks {
  lyrics_id: number;
  lyrics_body: string;
  lyrics_copyright: string;
}
