import { API_KEY, URL } from '../helpers/constants';

export const getChart = () => `${URL}/chart.artists.get?page_size=10&page=1&country=us&${API_KEY}`;
