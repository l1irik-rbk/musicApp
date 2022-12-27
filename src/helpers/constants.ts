import { FaSpotify, FaYandex } from 'react-icons/fa';
import { SiApplemusic } from 'react-icons/si';

import Track from '../pages/Track';
import Charts from '../pages/Charts';
import FAQ from '../pages/FAQ';
import MainPage from '../pages/MainPage';
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

export const ERROR_MESSAGE = 'Oops! Something went wrong! ';

export const MESSAGE_LYRICS = `Probably this track doesn't have lyrics. Try to add it on this `;

export const ERROR_MESSAGE_LYRICS = `${ERROR_MESSAGE} ${MESSAGE_LYRICS}`;

export const MUSCICMATCH = 'musixmatch.com';

export const NO_DATE = '00-00-0000';

export const ITEMS_PER_PAGE = 20;

export const MAX_PAGE_COUNT = 100;

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

export const MUSIC_LINKS = [
  {
    href: 'https://music.yandex.ru/search?text=',
    target: '_blank',
    rel: 'noreferrer',
    content: FaYandex,
  },
  {
    href: 'https://open.spotify.com/search/',
    target: '_blank',
    rel: 'noreferrer',
    content: FaSpotify,
  },
  {
    href: 'https://music.apple.com/us/search?term=',
    target: '_blank',
    rel: 'noreferrer',
    content: SiApplemusic,
  },
];

export const FAQ_ITEMS = [
  'You can find a track from the best to the worst in the ranking',
  'You can find and listen to the track in popular music services',
  'On the track page you can load the lyrics of the song',
  `If there is no lyrics for the song, then you can add the lyrics on the ${MUSCICMATCH}`,
  'You can find an artist from the best to the worst in the ranking',
  'On the artist page you can load albums',
  'On the album page you can see all the tracks',
  'You can view the charts by tracks and artists in each country (top 50)',
];
