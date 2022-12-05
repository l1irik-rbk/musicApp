import { API_KEY, URL } from '../helpers/constants';

export const getTrackLyrics = (trackID: number) =>
  `${URL}/track.lyrics.get?track_id=${trackID}&${API_KEY}`;
