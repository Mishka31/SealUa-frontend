import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'layouts/Layout';
import { Home } from 'pages';
import { routes } from 'shared/constants/routes';

import { Context } from './context';

console.log('React 🔰', React.version);

export const App = () => {
  const [first, setfirst] = useState(window.screen.width);
  const getWindowWidth = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  };
  const onResize = () => {
    window.requestAnimationFrame(() => {
      return setfirst(getWindowWidth());
    });
  };
  window.addEventListener('resize', onResize);

  return (
    <Context.Provider value={{ screenWidth: first }}>
      <Routes>
        <Route
          path={routes.home}
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </Context.Provider>
  );
};
