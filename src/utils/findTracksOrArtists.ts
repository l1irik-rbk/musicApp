import { API_KEY, URL } from '../helpers/constants';

export const findTracksOrArtists = (
  searchValue: string,
  searchOption: string,
  raitingOption: string
) =>
  `${URL}/${searchOption}.search?q_${searchOption}=${searchValue}&page_size=10&page=1&s_${searchOption}_rating=${raitingOption}&${API_KEY}`;
