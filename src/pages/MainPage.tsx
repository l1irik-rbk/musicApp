import React, { useState } from 'react';
import { ENTER_BUTTON } from '../helpers/constants';
import { useAppDispatch } from '../Redux/hooks';
import { fetchTracks } from '../Redux/thunks/fetchTracks';

const MainPage = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('rap god');

  const dispatch = useAppDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const findValue = () => {
    dispatch(fetchTracks(searchValue));
  };

  const onKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ENTER_BUTTON) dispatch(fetchTracks(searchValue));
  };

  return (
    <div>
      <div>
        <input value={searchValue} onChange={handleSearch} onKeyDown={onKeyPressed} />
        <button onClick={findValue}>Search</button>
      </div>
    </div>
  );
};

export default MainPage;
