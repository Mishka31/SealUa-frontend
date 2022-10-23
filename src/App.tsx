import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from 'layouts/Layout';
import { Home } from 'pages';
import { routes } from 'shared/constants/routes';

console.log('React 🔰', React.version);

export const App = () => {
  return (
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
  );
};
