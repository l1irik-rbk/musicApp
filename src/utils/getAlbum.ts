import { API_KEY, URL } from '../helpers/constants';

export const getAlbum = (albumID: string | number) =>
  `${URL}/album.get?album_id=${albumID}&${API_KEY}`;
