import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from 'pages';
import { routes } from 'shared/constants/routes';

console.log('React 🔰', React.version);

export const App = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
    </Routes>
  );
};
