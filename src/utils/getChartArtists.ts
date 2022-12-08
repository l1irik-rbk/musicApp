import { API_KEY, URL } from '../helpers/constants';

export const getChartArtists = (lang: string) =>
  `${URL}/chart.artists.get?page=1&page_size=100&country=${lang}&${API_KEY}`;
