import Track from '../pages/Track';
import Charts from '../pages/Charts';
import FAQ from '../pages/FAQ';
import MainPage from '../pages/MainPage/MainPage';
import NotFound from '../pages/NotFound';
import { IRoutes, Paths } from './constantsTypes';
import Artist from '../pages/Artist';
import Album from '../pages/Album';

export const API_KEY = 'apikey=f65d8f74ef058c97d0b0180f0efc5ac2';

const CORS_URL = 'https://cors-anywhere.herokuapp.com';

const BASE_URL = 'https://api.musixmatch.com/ws/1.1';

export const URL = `${CORS_URL}/${BASE_URL}`;

const BASE_COUNTRIES_URL = 'https://restcountries.com/v2';

export const ALL_COUNTRIES = `${BASE_COUNTRIES_URL}/all?fields=name,alpha2Code`;

export const ENTER_BUTTON = 'Enter';

export const ERROR_MESSAGE = 'Oops! Something went wrong!';

export const MENU_LINKS = [
  { path: Paths.MAIN_PAGE, linkName: '' },
  { path: Paths.CHARTS, linkName: 'Charts' },
  { path: Paths.FAQ, linkName: 'FAQ' },
];

export const ROUTES: IRoutes[] = [
  { path: '', index: true, element: MainPage },
  { path: 'charts', element: Charts },
  { path: 'tracks/:trackID', element: Track },
  { path: 'artists/:artistID', element: Artist },
  { path: 'album/:albumID', element: Album },
  { path: 'FAQ', element: FAQ },
  { path: '*', element: NotFound },
];

export const ITEMS_PER_PAGE = 10;

export const MAX_PAGE_COUNT = 100;
