import { API_KEY, ITEMS_PER_PAGE, URL } from '../helpers/constants';

export const findTracksOrArtists = (
  searchValue: string,
  searchOption: string,
  raitingOption: string,
  pageNumber: number | null
) =>
  `${URL}/${searchOption}.search?q_${searchOption}=${searchValue}&page_size=${ITEMS_PER_PAGE}&page=${
    (pageNumber as number) + 1
  }&s_${searchOption}_rating=${raitingOption}&${API_KEY}`;
