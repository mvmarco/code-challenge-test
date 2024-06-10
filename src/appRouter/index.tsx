import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Images } from '../components/pages/images';




const AppRouter:FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
