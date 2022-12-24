import { API_KEY, URL } from '../helpers/constants';

export const getTrack = (trackID: number) => `${URL}/track.get?track_id=${trackID}&${API_KEY}`;
