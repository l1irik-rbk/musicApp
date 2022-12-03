import Charts from '../pages/Charts';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';
import { IOptions, IRoutes } from './constantsTypes';

export const API_KEY = 'apikey=f65d8f74ef058c97d0b0180f0efc5ac2';

const BASE_URL = 'https://api.musixmatch.com/ws/1.1';

const CORS_URL = 'https://cors-anywhere.herokuapp.com';

export const URL = `${CORS_URL}/${BASE_URL}`;

export const ENTER_BUTTON = 'Enter';

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

export const searchOptions: IOptions[] = [
  { value: 'track', label: 'Tracks' },
  { value: 'artist', label: 'Artists' },
];

export const raitingOptions: IOptions[] = [
  { value: 'desc', label: 'The best' },
  { value: 'asc', label: 'The worst' },
];
