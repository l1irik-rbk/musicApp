import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

import { fetchTracksOrArtists } from 'Redux/thunks';
import { useAppDispatch, useAppSelector } from 'Redux/hooks';
import { setSearchValue } from 'Redux/slices/filtersSlice';
import {
  setArtists,
  setPageCount,
  setPageNumber,
  setTotalTracksOrArtists,
  setTracks,
} from 'Redux/slices/mainPageSlice';

import { ENTER_BUTTON } from 'helpers/constants';

import * as C from 'theme/Components/UI/StyledContainers';
import * as S from 'theme/Components/Controls/StyledSearch';

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
    <C.ContentContainer alignItems="center" flexWrap="nowrap" gap="0" marginB="20px">
      <S.Input value={searchValue} onChange={handleSearch} onKeyDown={onKeyPressed} />
      <S.SearchButton onClick={findValue}>
        <IoSearchOutline />
      </S.SearchButton>
    </C.ContentContainer>
  );
};

export default Search;
