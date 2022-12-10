import { API_KEY, URL } from '../helpers/constants';

export const findTracksOrArtists = (
  searchValue: string,
  searchOption: string,
  raitingOption: string,
  pageNumber: number | null
) =>
  `${URL}/${searchOption}.search?q_${searchOption}=${searchValue}&page_size=10&page=${
    (pageNumber as number) + 1
  }&s_${searchOption}_rating=${raitingOption}&${API_KEY}`;

// https://api.musixmatch.com/ws/1.1/artist.search?q_artist=eminem&page_size=10&page=107&s_artist_rating=desc&apikey=f65d8f74ef058c97d0b0180f0efc5ac2
