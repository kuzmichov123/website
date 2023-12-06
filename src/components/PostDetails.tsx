// src/components/PostDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostQuery } from '../api';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const postId: number | undefined = id ? parseInt(id, 10) : undefined;
  const { data: post } = useGetPostQuery(postId as number);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
      <button onClick={() => window.history.back()}>Назад</button>
    </div>
  );
};

export default PostDetails;
