import React from 'react';

import { Status } from '../helpers/constantsTypes';
import { useAppSelector } from '../Redux/hooks';
import Filters from '../components/Filters';
import Tracks from '../components/Tracks';
import Artists from '../components/Artists';
import Pagination from '../components/Pagination';

import Search from '../components/Search';
import Spinner from '../components/Spinner';
import Error from '../components/Error';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.7rem;

  @media (min-width: 767px) {
    gap: 1rem;
  }
`;

const MainPage = (): JSX.Element => {
  const { status, error, artists, tracks } = useAppSelector((state) => state.mainPage);

  return (
    <>
      <Filters />
      <Search />

      {(!!artists.length || !!tracks.length) && <Pagination />}
      {status === Status.FULFILLED && (
        <ContentWrapper>
          <Tracks />
          <Artists />
        </ContentWrapper>
      )}

      {status === Status.PENDING && <Spinner />}
      {error && <Error error={error} />}
    </>
  );
};

export default MainPage;
