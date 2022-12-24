import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

import * as C from '../../theme/Components/UI/StyledContainers';

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
