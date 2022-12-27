import { IArtistA } from '../helpers/types';

export const filterArtists = (artists: IArtistA[], artistID: number) =>
  artists.filter(({ artist }) => artist.artist_id === Number(artistID))[0].artist;
