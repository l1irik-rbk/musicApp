import React, { useState } from 'react';
import Filters from '../components/Filters';

import { ENTER_BUTTON } from '../helpers/constants';
import { Status } from '../helpers/constantsTypes';
import { useAppDispatch, useAppSelector } from '../Redux/hooks';
import { fetchTracks } from '../Redux/thunks/fetchTracks';

const MainPage = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('rap god');

  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.mainPage);
  const { raitingOption, searchOption } = useAppSelector((state) => state.filters);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const findValue = () => {
    dispatch(fetchTracks({ searchValue, searchOption, raitingOption }));
  };

  const onKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_BUTTON) dispatch(fetchTracks({ searchValue, searchOption, raitingOption }));
  };

  return (
    <div>
      <Filters />
      <div>
        <input value={searchValue} onChange={handleSearch} onKeyDown={onKeyPressed} />
        <button onClick={findValue}>Search</button>
      </div>

      <div>
        {status === Status.PENDING && <div>Loading...</div>}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};

export default MainPage;
