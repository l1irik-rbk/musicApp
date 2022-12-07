import { API_KEY, URL } from '../helpers/constants';

export const getArtistAlbums = (artistID: number) =>
  `${URL}/artist.albums.get?artist_id=${artistID}&page=1&page_size=10&s_release_date=desc&g_album_name=1&${API_KEY}`;
