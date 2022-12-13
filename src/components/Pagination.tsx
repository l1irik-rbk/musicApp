import React, { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';

import { Ipagination, Paths } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setAlbumsPageNumber } from '../Redux/slices/artistSlice';
import { setPageNumber } from '../Redux/slices/mainPageSlice';
import { fetchAlbums } from '../Redux/thunks/fetchAlbums';
import { fetchTracksOrArtists } from '../Redux/thunks/fetchTracksOrArtists';

const Pagination = ({ artistID }: Ipagination) => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { pageCount, pageNumber } = useAppSelector((state) => state.mainPage);
  const { searchValue, searchOption, raitingOption } = useAppSelector((state) => state.filters);
  const { albumsPageCount, albumsPageNumber } = useAppSelector((state) => state.currentArtist);
  const {} = useAppSelector((state) => state.currentAlbum);

  const path = location.pathname;
  console.log(albumsPageCount, albumsPageNumber);
  useEffect(() => {
    console.log(albumsPageCount, albumsPageNumber);
  }, [albumsPageCount, albumsPageNumber]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    const pageNumber: number = selectedItem.selected;
    console.log('pageNumber', pageNumber);
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
      {}
      <ReactPaginate
        pageCount={
          path.includes(Paths.ARTISTS) ? (albumsPageCount as number) : (pageCount as number)
        }
        forcePage={
          path.includes(Paths.ARTISTS) ? (albumsPageNumber as number) : (pageNumber as number)
        }
        onPageChange={handlePageClick}
        breakLabel="..."
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
