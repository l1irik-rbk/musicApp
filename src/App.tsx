import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ROUTES } from './helpers/constants';

function App() {
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
}

export default App;
