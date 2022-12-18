import { API_KEY, ITEMS_PER_PAGE, URL } from '../helpers/constants';

export const getArtistAlbums = (
  artistID: number | string | null | undefined,
  pageNumber: number | null | undefined
) =>
  `${URL}/artist.albums.get?artist_id=${artistID}&page=${
    !pageNumber ? 1 : (pageNumber as number) + 1
  }&page_size=${ITEMS_PER_PAGE}&s_release_date=desc&g_album_name=1&${API_KEY}`;
