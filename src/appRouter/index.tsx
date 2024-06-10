import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import { Images } from '../components/pages/images/Images';






const AppRouter:FC = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Images />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
