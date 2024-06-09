import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Image, NewImage } from "../../models/image";

const API_URL = "http://localhost:3000/api";

interface ImageResponse {
  data: Image;
}

export const imagesSlice = createApi({
  reducerPath: "imagesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  tagTypes: ["Images"],
  endpoints: (builder) => ({
    fetchImages: builder.query({
      query: () => `/images`,
      providesTags: ["Images"],
    }),
    createImage: builder.mutation<ImageResponse, NewImage>({
      query: (params) => {
        return {
          url: `${API_URL}/images`,
          method: "POST",
          body: params,
        };
      },
      invalidatesTags: ["Images"],
    }),
  }),
});

export const { useFetchImagesQuery, useCreateImageMutation } = imagesSlice;
