import React from 'react';
import Filters from '../components/Filters';

import { Status } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';
import Tracks from '../components/Tracks';
import Artists from '../components/Artists';
import Pagination from '../components/Pagination';

import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Error from '../components/Error';

const MainPage = (): JSX.Element => {
  const { status, error, artists, tracks } = useAppSelector((state) => state.mainPage);

  return (
    <>
      <Filters />
      <Search />

      {(!!artists.length || !!tracks.length) && <Pagination />}
      {status === Status.FULFILLED && (
        <div>
          <Tracks />
          <Artists />
        </div>
      )}

      {/* <Spinner /> */}

      {status === Status.PENDING && <Spinner />}
      {error && <Error error={error} />}
    </>
  );
};

export default MainPage;
