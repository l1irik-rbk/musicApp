import React from 'react';
import ReactPaginate from 'react-paginate';

import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setPageNumber } from '../Redux/slices/mainPageSlice';
import { fetchTracksOrArtists } from '../Redux/thunks/fetchTracksOrArtists';

const Pagination = () => {
  const { pageCount, pageNumber } = useAppSelector((state) => state.mainPage);
  const { searchValue, searchOption, raitingOption } = useAppSelector((state) => state.filters);

  const dispatch = useAppDispatch();

  const handlePageClick = (selectedItem: { selected: number }) => {
    const pageNumber: number = selectedItem.selected;
    dispatch(setPageNumber(pageNumber));
    dispatch(fetchTracksOrArtists({ searchValue, searchOption, raitingOption, pageNumber }));
    console.log('pageNumber', pageNumber);
  };

  return (
    <div>
      <ReactPaginate
        pageCount={pageCount as number}
        onPageChange={handlePageClick}
        forcePage={pageNumber as number}
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
