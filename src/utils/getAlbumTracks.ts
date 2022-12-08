import { API_KEY, URL } from '../helpers/constants';

export const getAlbumTracks = (albumID: number) =>
  `${URL}/album.tracks.get?album_id=${albumID}&page=1&page_size=10&${API_KEY}`;
