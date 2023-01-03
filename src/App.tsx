import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/UI';

import { ROUTES } from 'helpers/constants';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {ROUTES.map((route, index) =>
          route.index ? (
            <Route index element={<route.element />} key={index} />
          ) : (
            <Route path={route.path} element={<route.element />} key={index} />
          )
        )}
      </Route>
    </Routes>
  );
};

export default App;
