import { FC } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';

import { ImageList } from '../components/pages/images/ImageList';

const AppRouter:FC = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<ImageList />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;
