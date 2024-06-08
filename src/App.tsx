import { FC } from 'react';

import AppRouter from './components/appRouter';
import { GlobalStyles } from './styles/GlobalStyles';



export const App:FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppRouter />
    </>
  );
};

