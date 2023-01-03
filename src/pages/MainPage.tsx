import React from 'react';

import { Error, Spinner } from 'components/UI';
import { Filters, Pagination, Search } from 'components/Controls';
import { Tracks } from 'components/Track';
import { Artists } from 'components/Artist';

import { useAppSelector } from 'Redux/hooks';

import { Status } from 'helpers/types';

import * as C from 'theme/Components/UI/StyledContainers';

const MainPage = (): JSX.Element => {
  const { status, error, artists, tracks } = useAppSelector((state) => state.mainPage);

  return (
    <>
      <C.ControlsContainer>
        <Filters />
        <Search />
      </C.ControlsContainer>

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
