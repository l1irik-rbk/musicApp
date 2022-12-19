import React from 'react';
import ReactPaginate from 'react-paginate';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Ipagination, Paths } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setAlbumsPageNumber } from '../Redux/slices/artistSlice';
import { setPageNumber } from '../Redux/slices/mainPageSlice';
import { fetchAlbums } from '../Redux/thunks/fetchAlbums';
import { fetchTracksOrArtists } from '../Redux/thunks/fetchTracksOrArtists';

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  color: inherit;
  justify-content: center;
  margin-bottom: 20px;

  & li a {
    cursor: pointer;
    padding: 0.65rem 0.8rem;
    position: relative;
    display: block;
    color: inherit;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  & a:hover {
    background-color: hsl(0deg 0% 88%);
    border-color: hsl(0deg 0% 88%);
  }

  & li:not(:first-child) a {
    margin-left: -1px;
  }

  & li.active a {
    z-index: 3;
    color: #fff;
    background-color: hsl(207, 26%, 17%);
    border-color: hsl(207, 26%, 17%);
  }

  & li.active a:hover {
    color: #fff;
  }

  & li.disabled a {
    color: hsl(207deg 7% 82%);
    pointer-events: none;
    background-color: #fff;
    border-color: #dee2e6;
  }
`;

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
      <StyledReactPaginate
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
