import React from 'react';
import { Outlet } from 'react-router-dom';

import * as C from '../theme/StyledContainers';
import Footer from './Footer';

import Header from './Header';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <C.Main>
        <Outlet />
      </C.Main>
      <Footer />
    </>
  );
};

export default Layout;
