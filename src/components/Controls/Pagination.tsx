import React from 'react';
import { useLocation } from 'react-router-dom';

import { Ipagination, Paths } from '../../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { setAlbumsPageNumber } from '../../Redux/slices/artistSlice';
import { setPageNumber } from '../../Redux/slices/mainPageSlice';
import { fetchAlbums } from '../../Redux/thunks/fetchAlbums';
import { fetchTracksOrArtists } from '../../Redux/thunks/fetchTracksOrArtists';

import * as S from '../../theme/Components/Controls/StyledPagination';

const Pagination = ({ artistID }: Ipagination): JSX.Element => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { pageCount, pageNumber } = useAppSelector((state) => state.mainPage);
  const { searchValue, searchOption, raitingOption } = useAppSelector((state) => state.filters);
  const { albumsPageCount, albumsPageNumber } = useAppSelector((state) => state.currentArtist);

  const path = location.pathname;

  const handlePageClick = (selectedItem: { selected: number }) => {
    const pageNumber: number = selectedItem.selected;

    if (path.includes(Paths.ARTISTS)) {
      dispatch(setAlbumsPageNumber(albumsPageNumber));
      dispatch(fetchAlbums({ artistID, pageNumber }));

      return;
    }

    dispatch(setPageNumber(pageNumber));
    dispatch(fetchTracksOrArtists({ searchValue, searchOption, raitingOption, pageNumber }));
  };

  return (
    <div>
      <S.StyledReactPaginate
        pageCount={
          path.includes(Paths.ARTISTS) ? (albumsPageCount as number) : (pageCount as number)
        }
        forcePage={
          path.includes(Paths.ARTISTS) ? (albumsPageNumber as number) : (pageNumber as number)
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        breakLabel="..."
        previousLabel="<"
        nextLabel=">"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
