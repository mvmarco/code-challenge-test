import { configureStore } from '@reduxjs/toolkit';

import { imagesSlice } from './api/imagesSlice';


 export default configureStore({
    reducer:{
      [imagesSlice.reducerPath]: imagesSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([imagesSlice.middleware])
  });

