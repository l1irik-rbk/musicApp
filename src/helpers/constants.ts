import Charts from '../pages/Charts';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';

const API_KEY = 'apikey=f65d8f74ef058c97d0b0180f0efc5ac2';

const BASE_URL = 'https://api.musixmatch.com/ws/1.1';

export const CORS_URL = 'https://cors-anywhere.herokuapp.com';

const URL = `${CORS_URL}/${BASE_URL}`;

export const ENTER_BUTTON = 'Enter';

export const findTracks = (trackValue: string) =>
  `${URL}/track.search?q_track=${trackValue}&page_size=10&page=1&s_track_rating=desc&${API_KEY}`;

export const findArtists = (artistValue: string) =>
  `${URL}/track.search?q_artist=${artistValue}&page_size=10&page=1&s_track_rating=desc&${API_KEY}`;

export enum Status {
  PENDING = 'pending',
  FULFILLED = 'fulfilled',
  REJECTED = 'rejected',
}

export const MENU_LINKS = [
  { path: '/', linkName: 'Default' },
  { path: '/charts/artist', linkName: 'Artists chart' },
  { path: '/charts/tracks', linkName: 'Tracks chart' },
];

export const ROUTES: IRoutes[] = [
  { path: '', index: true, element: MainPage },
  { path: 'charts/:chartName', element: Charts },
  { path: '*', element: NotFound },
];

interface IRoutes {
  path?: string;
  index?: boolean;
  element: () => JSX.Element;
}
