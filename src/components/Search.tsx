import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import styled from 'styled-components';

import { ENTER_BUTTON } from '../helpers/constants';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { setSearchValue } from '../Redux/slices/filtersSlice';
import {
  setArtists,
  setPageCount,
  setPageNumber,
  setTotalTracksOrArtists,
  setTracks,
} from '../Redux/slices/mainPageSlice';
import { fetchTracksOrArtists } from '../Redux/thunks/fetchTracksOrArtists';

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a track or artist...',
})`
  font-family: inherit;
  font-size: inherit;
  width: 260px;
  height: 46px;
  border-radius: 0;
  border: 1px solid red;
  padding: 2px 9px;
  border-color: hsl(0, 0%, 80%);
  color: inherit;
`;

export const SearchButton = styled.button`
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border: 1px solid hsl(0, 0%, 80%);
  border-left: none;
  padding: 5.5px 5px;

  & svg {
    font-size: 30px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const Search = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { pageNumber } = useAppSelector((state) => state.mainPage);
  const { raitingOption, searchOption, searchValue } = useAppSelector((state) => state.filters);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const findValue = () => {
    dispatch(setTracks([]));
    dispatch(setArtists([]));
    dispatch(setPageNumber(0));
    dispatch(setTotalTracksOrArtists(null));
    dispatch(setPageCount(null));

    dispatch(fetchTracksOrArtists({ searchValue, searchOption, raitingOption, pageNumber }));
  };

  const onKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_BUTTON) {
      dispatch(setTracks([]));
      dispatch(setArtists([]));
      dispatch(setPageNumber(0));
      dispatch(setTotalTracksOrArtists(null));
      dispatch(setPageCount(null));

      dispatch(fetchTracksOrArtists({ searchValue, searchOption, raitingOption, pageNumber }));
    }
  };

  return (
    <InputContainer>
      <Input value={searchValue} onChange={handleSearch} onKeyDown={onKeyPressed} />
      <SearchButton onClick={findValue}>
        <IoSearchOutline />
      </SearchButton>
    </InputContainer>
  );
};

export default Search;
