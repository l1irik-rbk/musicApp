import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

import Header from './Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;

export const Main = styled.main`
  max-width: 1040px;
  padding: 0 10px;
  margin: 0 auto;
  width: 100%;
  position: relative;
`;
