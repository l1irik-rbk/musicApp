import { API_KEY, URL } from '../helpers/constants';

export const getChartTracks = (lang: string) =>
  `${URL}/chart.tracks.get?chart_name=top&page=1&page_size=100&country=${lang}&f_has_lyrics=1&${API_KEY}`;
