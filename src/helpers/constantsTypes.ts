import { SingleValue } from 'react-select';

export enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
  OK = 'OK',
  SUCCESS = 200,
}

export enum Paths {
  MAIN_PAGE = '/',
  CHARTS = '/charts',
  ALBUM = '/album',
  ARTISTS = '/artists',
  FAQ = '/FAQ',
}

export enum ButtonContent {
  ALBUM = 'Show album tracks',
  ARTIST = 'Show albums',
  TRACK = 'Show liriks',
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

export interface IFetchTracksOrArtists {
  searchValue: string;
  searchOption: SingleValue<IOptions>;
  raitingOption: SingleValue<IOptions>;
  pageNumber: number | null;
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
  track_edit_url: string;
}

export interface IArtistA {
  artist: IArtist;
}

export interface IArtist {
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

export interface ICurrentArtistAlbums {
  album: IAlbum;
}

export interface IAlbum {
  album_id: number;
  artist_name: string;
  album_name: string;
  album_release_date: string;
  primary_genres: { music_genre_list: { music_genre: { music_genre_name: string } }[] };
}

export interface Ipagination {
  artistID?: number;
}

export interface IFetchAlbums {
  artistID: number | string | null | undefined;
  pageNumber: number | null;
}
