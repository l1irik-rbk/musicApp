import { ITrackA } from 'helpers/types';

export const filterTrack = (tracks: ITrackA[], trackID: number) =>
  tracks.filter(({ track }) => track.track_id === Number(trackID))[0].track;
