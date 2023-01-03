import { API_KEY, URL } from 'helpers/constants';

export const getAlbumTracks = (albumID: string | number | null | undefined) =>
  `${URL}/album.tracks.get?album_id=${albumID}&page=1&page_size=100&${API_KEY}`;
