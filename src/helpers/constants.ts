import Charts from '../pages/Charts';
import MainPage from '../pages/MainPage';
import NotFound from '../pages/NotFound';
import { IOptions, IRoutes } from './constantsTypes';

export const API_KEY = 'apikey=f65d8f74ef058c97d0b0180f0efc5ac2';

const CORS_URL = 'https://cors-anywhere.herokuapp.com';

const BASE_URL = 'https://api.musixmatch.com/ws/1.1';

export const URL = `${CORS_URL}/${BASE_URL}`;

const BASE_COUNTRIES_URL = 'https://restcountries.com/v2';

export const ALL_COUNTRIES = `${BASE_COUNTRIES_URL}/all?fields=name,alpha2Code`;
// https://restcountries.com/v2/all?fields=name,alpha2Code
export const ENTER_BUTTON = 'Enter';

export const ERROR_MESSAGE = 'Oops! Something went wrong!';

export const MENU_LINKS = [
  { path: '/', linkName: 'Default' },
  { path: '/charts', linkName: 'Charts' },
];

export const ROUTES: IRoutes[] = [
  { path: '', index: true, element: MainPage },
  { path: 'charts', element: Charts },
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
