import React from 'react';

import { Status } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';
import Filters from '../components/Controls/Filters';
import Artists from '../components/Artist/Artists';
import Pagination from '../components/Controls/Pagination';
import Search from '../components/Controls/Search';
import Tracks from '../components/Track/Tracks';
import Spinner from '../components/UI/Spinner';
import Error from '../components/UI/Error';
import * as C from '../theme/Components/UI/StyledContainers';

const MainPage = (): JSX.Element => {
  const { status, error, artists, tracks } = useAppSelector((state) => state.mainPage);

  return (
    <>
      <Filters />
      <Search />

      {(!!artists.length || !!tracks.length) && <Pagination />}
      {status === Status.FULFILLED && (
        <C.ContentContainer>
          <Tracks />
          <Artists />
        </C.ContentContainer>
      )}

      {status === Status.PENDING && <Spinner />}
      {error && <Error error={error} />}
    </>
  );
};

export default MainPage;
