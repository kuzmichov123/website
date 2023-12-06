// src/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Array<Post>, void>({
      query: () => 'posts',
    }),
    getPost: builder.query<Post, number>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = api;
