import { API_KEY, URL } from '../helpers/constants';

export const getAlbumTracks = (
  albumID: string | number | null | undefined,
  page: number | undefined | null
) => `${URL}/album.tracks.get?album_id=${albumID}&page=${page}&page_size=10&${API_KEY}`;
