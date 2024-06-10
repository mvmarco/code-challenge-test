import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Images } from '../components/pages/images';




const AppRouter:FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
