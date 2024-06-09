import { FC } from 'react';

import { GlobalStyles } from './styles/GlobalStyles';
import AppRouter from './appRouter';



export const App:FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};

