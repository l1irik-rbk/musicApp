import React from 'react';
import Filters from '../components/Filters';

import { Status } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';
import Tracks from '../components/Tracks';
import Artists from '../components/Artists';
import Pagination from '../components/Pagination';

import Search from '../components/Search';

const MainPage = (): JSX.Element => {
  const { status, error, artists, tracks } = useAppSelector((state) => state.mainPage);

  return (
    <>
      <Filters />
      <Search />

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
    </>
  );
};

export default MainPage;
