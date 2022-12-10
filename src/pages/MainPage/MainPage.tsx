import React, { useEffect } from 'react';
import Filters from '../../components/Filters';

import { ENTER_BUTTON } from '../../helpers/constants';
import { Status } from '../../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { fetchTracksOrArtists } from '../../Redux/thunks/fetchTracksOrArtists';
import Tracks from '../../components/Tracks';
import Artists from '../../components/Artists';
import Pagination from '../../components/Pagination';
import {
  setPageCount,
  setPageNumber,
  setTotalTracksOrArtists,
} from '../../Redux/slices/mainPageSlice';
import { setSearchValue } from '../../Redux/slices/filtersSlice';

const MainPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { status, error, pageNumber, artists, tracks } = useAppSelector((state) => state.mainPage);
  const { raitingOption, searchOption, searchValue } = useAppSelector((state) => state.filters);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const findValue = () => {
    setPageNumber(0);
    setTotalTracksOrArtists(null);
    setPageCount(null);

    dispatch(fetchTracksOrArtists({ searchValue, searchOption, raitingOption, pageNumber }));
  };

  const onKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_BUTTON) {
      setPageNumber(0);
      setTotalTracksOrArtists(null);
      setPageCount(null);

      dispatch(fetchTracksOrArtists({ searchValue, searchOption, raitingOption, pageNumber }));
    }
  };

  return (
    <div>
      <Filters />
      <div>
        <input value={searchValue} onChange={handleSearch} onKeyDown={onKeyPressed} />
        <button onClick={findValue}>Search</button>
      </div>

      <div>
        {(!!artists.length || !!tracks.length) && <Pagination />}
        {status === Status.FULFILLED && (
          <>
            <Tracks />
            <Artists />
          </>
        )}
        {status === Status.PENDING && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default MainPage;
