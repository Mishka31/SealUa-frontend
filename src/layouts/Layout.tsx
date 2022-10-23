import React, { FC } from 'react';

import { Footer } from 'layouts/Footer/Footer';
import { Header } from 'layouts/Header/Header';

interface ILayout {
  children: JSX.Element | JSX.Element[];
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
