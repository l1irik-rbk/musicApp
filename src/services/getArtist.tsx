import { API_KEY, URL } from 'helpers/constants';

export const getArtist = (artistID: number) => `${URL}/artist.get?artist_id=${artistID}&${API_KEY}`;
