import React from 'react';

export const Context = React.createContext<{
  screenWidth: number;
}>({
  screenWidth: window.screen.width,
});
